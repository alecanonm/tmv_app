import Image from 'next/image'
const CustomButton = ({ width, height, src, alt, xasies, yaxies }) => {
  return (
    <div
      role='button'
      className={`fixed max-sm:${xasies} ${
        xasies || 'left-5'
      } ${yaxies} rounded-full`}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  )
}

export default CustomButton
