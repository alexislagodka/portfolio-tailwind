import React from 'react'
import me from '../../assets/images/me.jpg'
import linkedInLogo from '../../assets/images/LI-In-Bug.png'

export default function PresentationCard () {
  return (
    <div className='card'>
      <div className='md:flex'>
        <img
          className='flex-auto md:w-1/3 rounded object-cover'
          src={me}
          alt='Pictures of me'
        />
        <div className='grid p-4'>
          <div className='grid grid-cols-2'>
            <div className='p-2'>
              <h1>Alexis Lagodka</h1>
              <h2 className=''>Développeur Front-End</h2>
            </div>
            <div className='p-2 flex flex-col items-end'>
              <a
                href='https://www.linkedin.com/in/alexis-lagodka/'
                className='flex items-center'
              >
                <img className='h-4' src={linkedInLogo} alt='LinkedIn logo' />
                Mon linkedIn
              </a>
            </div>
          </div>
          <div className='p-2'>
            <p className='pb-4'>
              Vous trouverez sur cette page mon parcours de formation ainsi que mes différents projets.
            </p>
            <p className='pb-4'>
              Je travail actuellement sur react js.
            </p>
            <p>
              Mes travaux sont disponibles <button className='link' href='#project' onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth', block: 'center' })}>ici</button> et sur mon <a href='www.google.com'>github</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
