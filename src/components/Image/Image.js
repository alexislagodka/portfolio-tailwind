import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt }) => {
  const [loaded, setloaded] = useState(false)
  return (
    <div className='relative w-full h-full'>
      {!loaded && (
        <div className='absolute w-full h-full rounded animate-pulse bg-slate-200 dark:bg-gray-700' />
      )}
      <img
        className={`w-full h-full rounded object-cover ${
          !loaded && 'invisible'
        }`}
        src={src}
        alt={alt}
        onLoad={() => setloaded(true)}
      />
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string
}

export default Image
