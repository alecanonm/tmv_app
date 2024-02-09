'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navMotion = {
  visible: {
    opacity: 10,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

const Navbar = () => {
  const [toggled, setToggled] = useState(false)
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth <= 900)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className='flex items-center text-black font-semibold'>
      {!matches && (
        <ul className='flex gap-10'>
          <li className='hover:underline hover:underline-offset-8'>
            <Link href='/about'>Sobre Nosotros</Link>
          </li>
        </ul>
      )}
      {matches && (
        <section
          onClick={() => setToggled((prevToggled) => !prevToggled)}
          className='space-y-1 cursor-pointer z-50'
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className='block h-1 w-8 rounded bg-black'
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 26 }}
            className='block h-1 w-6 rounded bg-black'
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 30 : 18,
            }}
            className='block h-1 w-4 rounded bg-black'
          ></motion.span>
        </section>
      )}
      {toggled && matches && (
        <motion.section
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className='fixed flex flex-col gap-24 bg-[#ffffff] z-10 bottom-0 left-0 w-full h-screen items-center justify-center'
        >
          <motion.ul
            variants={navMotion}
            animate='visible'
            initial='hidden'
            className='flex flex-col gap-12 text-lg'
          >
            <motion.li
              variants={itemMotion}
              onClick={() => {
                setToggled((prev) => !prev)
              }}
            >
              <Link href='/'>Inicio</Link>
            </motion.li>
            <motion.li
              variants={itemMotion}
              onClick={() => {
                setToggled((prev) => !prev)
              }}
            >
              <Link href='/about'>Sobre nosotros</Link>
            </motion.li>
          </motion.ul>
          <motion.ul className='flex gap-10'>
            <li>
              <a href='https://www.instagram.com/takemyvape?utm_source=qr'>
                <Image
                  src='/instagram.png'
                  alt='instagram'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li>
              <a href='https://www.tiktok.com/@takemyvape?_t=8jispdHdodk&_r=1'>
                <Image src='/tiktok.png' alt='tiktok' height={25} width={25} />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/profile.php?id=100066701364823'>
                <Image
                  src='/facebook.png'
                  alt='facebook'
                  height={25}
                  width={25}
                />
              </a>
            </li>
          </motion.ul>
        </motion.section>
      )}
    </nav>
  )
}

export default Navbar
