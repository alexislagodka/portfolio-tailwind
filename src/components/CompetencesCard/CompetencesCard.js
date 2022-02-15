import React from 'react'

export default function CompetencesCard () {
  return (
    <div className='card w-full'>
      <h1>FRONT-END</h1>
      <div className='grid md:grid-cols-2'>
        <div className='p-2'>
          <div className='mb-1 text-base font-medium text-blue-700'>React</div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div
              className='bg-blue-600 h-2.5 rounded-full'
              style={{ width: '65%' }}
            />
          </div>
        </div>
        <div className='p-2'>
          <div className='mb-1 text-base font-medium text-blue-700'>
            Javascript
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div
              className='bg-blue-600 h-2.5 rounded-full'
              style={{ width: '70%' }}
            />
          </div>
        </div>
        <div className='p-2'>
          <div className='mb-1 text-base font-medium text-blue-700'>
            TypeScript
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div
              className='bg-blue-600 h-2.5 rounded-full'
              style={{ width: '55%' }}
            />
          </div>
        </div>
        <div className='p-2'>
          <div className='mb-1 text-base font-medium text-blue-700'>CSS</div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div
              className='bg-blue-600 h-2.5 rounded-full'
              style={{ width: '65%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
