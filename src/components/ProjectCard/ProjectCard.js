import React from 'react'
import BasicButton from '../Buttons/BasicButton/BasicButton'

export default function ProjectCard (props) {
  return (
    <div className='card md:flex w-full h-full'>
      <img className='md:w-1/3 rounded object-fit' src={props.img} alt='' />
      <div className='flex-1 grid grid-rows-[auto_50px_1fr_50px] md:pl-4'>
        <div>{props.tags.map((tag) => `#${tag} `)}</div>
        <h1>{props.title}</h1>
        <div className='mt-2 mb-2'>{props.children}</div>
        <div className='grid grid-cols-2 gap-4 md:max-w-sm'>
          <BasicButton
            handleClick={() => window.open(props.demoUrl)}
            color='blue'
          >
            Demo
          </BasicButton>
          <BasicButton
            handleClick={() => window.open(props.gitUrl)}
            color='white'
          >
            Code
          </BasicButton>
        </div>
      </div>
    </div>
  )
}
