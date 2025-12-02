export default function PlaceholderImage({ 
  text = 'Image', 
  className = '' 
}: { 
  text?: string
  className?: string 
}) {
  return (
    <div className={`bg-gray-200 flex items-center justify-center text-gray-400 text-xs ${className}`}>
      {text}
    </div>
  )
}

