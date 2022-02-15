import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const FadeInSection = ({
  children
}) => {
  const domRef = useRef()

  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true)

        // No need to keep observing:
        observer.unobserve(domRef.current)
      }
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])

  return (<section ref={domRef} className={`fadeInSection ${isVisible ? ' is-visible' : ''}`}>{children}</section>)
}

FadeInSection.propTypes = {
  children: PropTypes.elementType
}

export default FadeInSection
