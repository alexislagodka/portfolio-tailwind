import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BiMoon, BiSun } from 'react-icons/bi'

export default function DarkModeToggle () {
  const [toggle, setToggle] = useState(false)
  const toggleClass = ' transform translate-x-5'

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }, [])

  useEffect(() => {
    toggle ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, [toggle])

  return (
    <>
      <div
        className='md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer'
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <div
          className={
            'bg-white dark:bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
            (toggle && toggleClass)
          }
        />
      </div>
      {toggle
        ? (
          <BiMoon size={20} className='ml-2' />
          )
        : (
          <BiSun size={20} className='ml-2' />
          )}
    </>
  )
}

DarkModeToggle.propTypes = {
  handleToggle: PropTypes.func,
  init: PropTypes.bool
}
