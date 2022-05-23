import React from 'react'
import { FaReact } from 'react-icons/fa'
import {
  SiHtml5,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiTailwindcss
} from 'react-icons/si'

export default function StackCard () {
  return (
    <div className='card w-full'>
      <h1>STACK</h1>
      <div className='p-2'>
        <h2>Languages</h2>
        <div className='p-4 flex justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <a href='https://developer.mozilla.org/fr/docs/Web/HTML'><SiHtml5 title='HTML' size={100} className='text-orange-600 anime-scale' /></a>
            <a href='https://developer.mozilla.org/fr/docs/Web/JavaScript'><SiJavascript title='JavaScript' size={100} className='text-yellow-400 anime-scale' /></a>
            <a href='https://www.typescriptlang.org/'><SiTypescript title='TypeScript' size={100} className='text-blue-700 anime-scale' /></a>
            <a href='https://developer.mozilla.org/fr/docs/Web/CSS'><SiCss3 title='Css' size={100} className='text-blue-500 anime-scale' /></a>
          </div>
        </div>
      </div>
      <div className='p-2'>
        <h2>Framework et librairies</h2>
        <div className='p-4 flex justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <a href='https://nextjs.org/'><SiNextdotjs title='NextJS' size={100} className='text-black anime-scale' /></a>
            <a href='https://fr.reactjs.org/'><FaReact title='ReactJS' size={100} className='text-cyan-300 anime-scale' /></a>
            <a href='https://redux.js.org/'><SiRedux title='ReduxJS' size={100} className='text-purple-700 anime-scale' /></a>
            <a href='https://tailwindcss.com/'><SiTailwindcss title='TailwindCSS' size={100} className='text-sky-500 anime-scale' /></a>
          </div>
        </div>
      </div>
      <div className='p-2'>
        <h2>Services</h2>
        <div className='p-4 flex justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <a href='https://firebase.google.com/'><SiFirebase title='Firebase' size={100} className='text-yellow-500 anime-scale' /></a>
            <a href='https://vercel.com/'><SiVercel title='Vercel' size={100} className='text-black anime-scale' /></a>
            <a href='https://www.netlify.com/'><SiNetlify title='Netlify' size={100} className='text-emerald-400 anime-scale' /></a>
          </div>
        </div>

      </div>
    </div>
  )
}
