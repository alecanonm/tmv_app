'use client'

import { usePathname } from 'next/navigation'
import { BlockUI } from 'primereact/blockui'
import { useEffect, useState } from 'react'
import NProgress from 'nprogress'

const RedirectUI = () => {
  const pathname = usePathname()
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickle: true,
      trickleSpeed: 200,
      minimum: 0.08,
      easing: 'ease',
      speed: 200,
      template:
        '<div class="bar" role="bar"><div class="peg"></div></div><div role="spinner"><div class="spinner-icon"></div></div>',
    })
  }, [])

  useEffect(() => {
    NProgress.done()
    NProgress.remove()
    setBlocked(false)
    return () => {
      NProgress.start()
    }
  }, [pathname])

  return <BlockUI blocked={blocked} fullScreen />
}

export default RedirectUI
