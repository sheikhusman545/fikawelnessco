import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all products
export async function GET(request: NextRequest) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 500 })
    }

    const searchParams = request.nextUrl.searchParams
    const categoryId = searchParams.get('categoryId')
    const status = searchParams.get('status')

    const where: any = {}
    if (categoryId) {
      where.categoryId = parseInt(categoryId)
    }
    if (status) {
      where.status = status
    }

    const products = await prisma.product.findMany({
      where,
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        gallery: {
          select: {
            id: true,
            url: true,
            alt: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(products)
  } catch (error: any) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products', message: error.message },
      { status: 500 }
    )
  }
}

// POST create new product
export async function POST(request: NextRequest) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 500 })
    }

    const body = await request.json()
    const {
      name,
      slug,
      description,
      fullDescription,
      price,
      salePrice,
      categoryId,
      status,
      isFeatured,
      stock,
      comingSoon,
      mainImage,
      galleryImages,
      ingredients,
      benefits,
      variants,
    } = body

    if (!name || !slug || !price || !categoryId) {
      return NextResponse.json(
        { error: 'Name, slug, price, and categoryId are required' },
        { status: 400 }
      )
    }

    // Create product with gallery images
    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description: description || null,
        fullDescription: fullDescription || null,
        price: parseFloat(price),
        salePrice: salePrice ? parseFloat(salePrice) : null,
        categoryId: parseInt(categoryId),
        status: status || 'Active',
        isFeatured: isFeatured || false,
        stock: stock ? parseInt(stock) : 0,
        comingSoon: comingSoon || false,
        mainImage: mainImage || null,
        ingredients: ingredients || null,
        benefits: benefits || [],
        variants: variants || null,
        gallery: {
          create: (galleryImages || []).map((url: string, index: number) => ({
            url,
            alt: `${name} - Image ${index + 1}`,
          })),
        },
      },
      include: {
        category: true,
        gallery: true,
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error: any) {
    console.error('Error creating product:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Product with this slug already exists' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create product', message: error.message },
      { status: 500 }
    )
  }
}

