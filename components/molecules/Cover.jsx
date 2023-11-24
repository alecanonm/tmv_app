import Image from 'next/image'

const Cover = ({ title, img, width, height, bgColor }) => {
  const styles = `max-sm:flex-col flex justify-center items-center h-screen text-white ${bgColor}`

  return (
    <section className={styles}>
      <div className='flex flex-col gap-10'>
        <h1 className='uppercase font-bold text-4xl text-center'>{title}</h1>
        <button className='max-sm:hidden uppercase font-semibold hover:scale-110 transition p-2 w-64 rounded-lg bg-[#7474745d] self-center'>
          Saber mas
        </button>
      </div>
      <figure>
        <Image src={img} alt='mussblack' width={width} height={height} />
      </figure>
      <button className='max-sm:block hidden uppercase font-semibold p-2 w-64 rounded-lg bg-[#7474745d]'>
        Saber mas
      </button>
    </section>
  )
}

export default Cover
