import React, { useState, useEffect } from 'react'

export default function ProgressBar () {
  const [pourcent, setPourcent] = useState(0)

  const controlProgress = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100
    console.log(winScroll)
    console.log(height)
    setPourcent(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlProgress)
    return () => {
      window.removeEventListener('scroll', controlProgress)
    }
  }, [])

  return (
    <div className='z-10 fixed w-full bg-gray-200 h-2.5 dark:bg-gray-700'>
      <div className='fixed bg-blue-600 h-2.5' style={{ width: `${pourcent}%` }} />
    </div>
  )
}
