import React, { useState, useEffect } from 'react'

export default function ProgressBar () {
  const [pourcent, setPourcent] = useState(0)

  const controlProgress = () => {
    const winScroll = document.body.scrollTop
    const height = document.body.scrollHeight - document.body.clientHeight

    const scrolled = (winScroll / height) * 100
    setPourcent(scrolled)
  }

  useEffect(() => {
    document.body.addEventListener('scroll', controlProgress)
    return () => {
      document.body.removeEventListener('scroll', controlProgress)
    }
  }, [])

  return (
    <div className='z-10 fixed w-full bg-gray-200 h-2.5 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-30 backdrop-filter backdrop-blur-lg'>
      <div className='fixed bg-blue-600 h-2.5' style={{ width: `${pourcent}%` }} />
    </div>
  )
}
