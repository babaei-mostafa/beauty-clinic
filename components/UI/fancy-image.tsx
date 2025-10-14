import Image from 'next/image'

// ====================|| FANCY IMAGE ||==================== //

const FancyImage = ({
  src,
  name,
  width = 300,
  height = 200,
}: {
  src: string
  name: string
  width?: number
  height?: number
}) => {
  return (
    <div
      className="fancy-image-wrapper"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image src={src} alt={name} className="fancy-image" fill />
    </div>
  )
}

export default FancyImage
