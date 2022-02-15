import React from 'react'
import PropTypes from 'prop-types'

export default function BasicButton (props) {
  let bgcolor
  let textcolor
  switch (props.color) {
    case 'white':
      bgcolor = 'bg-white dark:bg-gray-800'
      textcolor = 'text-blue-600 dark:text-white'
      break
    case 'blue':
      bgcolor = 'bg-blue-600'
      textcolor = 'text-white'
      break
    default:
      bgcolor = 'bg-white'
      textcolor = 'text-blue-600'
  }
  return (
    <button
      className={`
        p-2
        rounded-xl
        ${bgcolor}
        ${textcolor}
        hover:border-indigo-300
        border border-blue-600 
        `}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  )
}

BasicButton.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.element
}
