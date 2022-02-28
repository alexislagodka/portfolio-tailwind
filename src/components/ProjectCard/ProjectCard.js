import React, { useState, useEffect } from 'react'
import BasicButton from '../Buttons/BasicButton/BasicButton'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import PropTypes from 'prop-types'

export default function ProjectCard ({ title, image, demoUrl, gitUrl, tags, description }) {
  const [imageSrc, setImageSrc] = useState('')
  const storage = getStorage()

  useEffect(() => {
    getDownloadURL(ref(storage, image))
      .then(url => {
        setImageSrc(url)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className='card md:flex w-full h-full md:pb-8'>
      <img className='md:w-1/3 rounded object-fit' src={imageSrc} alt='' />
      <div className='flex-1 grid grid-rows-[auto_50px_1fr_50px] md:pl-4'>
        <div>{tags.map((tag) => `#${tag} `)}</div>
        <h1>{title}</h1>
        <div className='mt-2 mb-2'>{description}</div>
        <div className='grid grid-cols-2 gap-4 md:max-w-sm'>
          <BasicButton
            handleClick={() => window.open(demoUrl)}
            color='blue'
          >
            Demo
          </BasicButton>
          <BasicButton
            handleClick={() => window.open(gitUrl)}
            color='white'
          >
            Code
          </BasicButton>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
  demoUrl: PropTypes.string,
  gitUrl: PropTypes.string
}
