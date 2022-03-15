import React, { Component } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import ToggleSwitch from '../../components/Buttons/ToggleSwitch/ToggleSwitch'
import PresentationCard from '../../components/PresentationCard/PresentationCard'
import CompetencesCard from '../../components/CompetencesCard/CompetencesCard'
import TechnoCard from '../../components/TechnoCard/TechnoCard'
import ProjectsSwiper from '../ProjectsSwiper/ProjectsSwiper'
import ExperiencesCard from '../../components/ExperiencesCard/ExperiencesCard'
import FormationCard from '../../components/FormationCard/FormationCard'
import Footer from '../../components/Footer/Footer'
import FadeInSection from '../../components/Animation/FadeInSection/FadeInSection'
import app from '../../firebase'
import { getDatabase, get, ref, child } from 'firebase/database'
import { BiMoon, BiSun } from 'react-icons/bi'
import StarrySky from '../../components/StarrySky/StarrySky'
import AnimeWave from '../../components/Waves/AnimeWave/AnimeWave'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default class Site extends Component {
  state = {
    projects: null,
    darkMode: false
  }

  componentDidMount () {
    const db = getDatabase(app)
    get(child(ref(db), 'projects'))
      .then(snapshot => {
        if (snapshot.exists()) {
          const projects = snapshot.val()
          this.setState({ projects })
        } else {
          console.log('no data available')
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

    handleDarkMode = (active) => {
      if (active) {
        this.setState({ darkMode: true })
        document.documentElement.classList.add('dark')
      } else {
        this.setState({ darkMode: false })
        document.documentElement.classList.remove('dark')
      }
    }

    render () {
      return (
        <LocomotiveScrollProvider>
          <ProgressBar />
          <StarrySky />
          <div className='z-10 w-full h-full  flex flex-col justify-center dark:text-neutral-200'>
            <div className='fixed z-40 top-10 left-10 flex items-center'>
              <ToggleSwitch handleToggle={(toggle) => this.handleDarkMode(toggle)} />
              {
                  this.state.darkMode
                    ? <BiMoon size={20} className='ml-2' />
                    : <BiSun size={20} className='ml-2' />
                }
            </div>
            <section data-scroll-section className='relative w-full h-screen flex flex-col justify-center items-center'>
              <div data-scroll className='absolute w-full h-full flex flex-col justify-end '>
                <AnimeWave color='#a2d9ff' />
              </div>
              <div data-scroll className='max-w-4xl'>
                <FadeInSection>
                  <PresentationCard />
                </FadeInSection>
              </div>
            </section>
            <section data-scroll-section className='w-full flex flex-col justify-center items-center bg-[#a2d9ff]'>
              <div data-scroll className='max-w-4xl'>
                <FadeInSection>
                  <CompetencesCard />
                </FadeInSection>
              </div>
              <svg data-scroll xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#0099ff' fillOpacity='1' d='M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,176C672,171,768,149,864,144C960,139,1056,149,1152,128C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z' /></svg>
            </section>
            <section data-scroll-section className='w-full h-1/2 flex flex-col justify-center items-center bg-[#0099ff]'>
              <div data-scroll className='max-w-5xl'>
                <FadeInSection>
                  <TechnoCard />
                </FadeInSection>
              </div>
            </section>
            <section data-scroll-section className='relative w-full h-screen flex flex-col justify-center items-center bg-pink-500'>
              <div data-scroll className='max-w-5xl'>
                <FadeInSection>
                  {this.state.projects && <ProjectsSwiper projects={this.state.projects} />}
                </FadeInSection>
              </div>
            </section>
            <section data-scroll-section className='relative w-full h-screen flex flex-col justify-center items-center bg-indigo-500'>
              <div data-scroll className='max-w-5xl'>
                <FadeInSection>
                  <ExperiencesCard />
                </FadeInSection>
              </div>
            </section>
            <section data-scroll-section className='relative w-full flex flex-col justify-center items-center bg-fuchsia-500'>
              <div data-scroll className='max-w-5xl'>
                <FadeInSection>
                  <FormationCard />
                </FadeInSection>
              </div>
            </section>
            <Footer />

          </div>
        </LocomotiveScrollProvider>
      )
    }
}
