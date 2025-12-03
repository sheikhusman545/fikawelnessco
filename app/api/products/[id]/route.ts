import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET single product
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 500 })
    }

    const { id: idParam } = await params
    const id = parseInt(idParam)
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        gallery: true,
      },
    })

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error: any) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product', message: error.message },
      { status: 500 }
    )
  }
}

// PUT update product
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 500 })
    }

    const { id: idParam } = await params
    const id = parseInt(idParam)
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

    // If gallery images are provided, update them
    if (galleryImages) {
      // Delete existing gallery images
      await prisma.productImage.deleteMany({
        where: { productId: id },
      })

      // Create new gallery images
      await prisma.productImage.createMany({
        data: galleryImages.map((url: string, index: number) => ({
          productId: id,
          url,
          alt: `${name || 'Product'} - Image ${index + 1}`,
        })),
      })
    }

    const product = await prisma.product.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(slug && { slug }),
        ...(description !== undefined && { description }),
        ...(fullDescription !== undefined && { fullDescription }),
        ...(price && { price: parseFloat(price) }),
        ...(salePrice !== undefined && { salePrice: salePrice ? parseFloat(salePrice) : null }),
        ...(categoryId && { categoryId: parseInt(categoryId) }),
        ...(status && { status }),
        ...(isFeatured !== undefined && { isFeatured }),
        ...(stock !== undefined && { stock: parseInt(stock) }),
        ...(comingSoon !== undefined && { comingSoon }),
        ...(mainImage !== undefined && { mainImage }),
        ...(ingredients !== undefined && { ingredients }),
        ...(benefits !== undefined && { benefits }),
        ...(variants !== undefined && { variants }),
      },
      include: {
        category: true,
        gallery: true,
      },
    })

    return NextResponse.json(product)
  } catch (error: any) {
    console.error('Error updating product:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Product with this slug already exists' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to update product', message: error.message },
      { status: 500 }
    )
  }
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 500 })
    }

    const { id: idParam } = await params
    const id = parseInt(idParam)

    await prisma.product.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error: any) {
    console.error('Error deleting product:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(
      { error: 'Failed to delete product', message: error.message },
      { status: 500 }
    )
  }
}

