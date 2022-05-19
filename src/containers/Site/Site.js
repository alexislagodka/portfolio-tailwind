import React, { Component } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import DarkModeToggle from '../../components/Buttons/DarkModeToggle/DarkModeToggle'
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
import StarrySky from '../../components/StarrySky/StarrySky'

export default class Site extends Component {
  state = {
    projects: null
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
        console.log('active darkmode')
        this.setState({ darkMode: true })
        document.documentElement.classList.add('dark')
      } else {
        console.log('disable darkmode')
        this.setState({ darkMode: false })
        document.documentElement.classList.remove('dark')
      }
    }

    render () {
      return (
        <>
          <ProgressBar />
          <StarrySky />
          <div className='z-10 w-full h-full  flex justify-center dark:text-neutral-200'>
            <div className='w-full h-full max-w-screen-lg p-6 grid gap-6'>
              <div className='flex items-center'>
                <DarkModeToggle />
              </div>
              <FadeInSection>
                <PresentationCard />
              </FadeInSection>
              <FadeInSection>
                <CompetencesCard />
              </FadeInSection>
              <FadeInSection>
                <TechnoCard />
              </FadeInSection>
              <FadeInSection>
                {this.state.projects && <ProjectsSwiper projects={this.state.projects} />}
              </FadeInSection>
              <FadeInSection>
                <ExperiencesCard />
              </FadeInSection>
              <FadeInSection>
                <FormationCard />
              </FadeInSection>
              <Footer />
            </div>
          </div>
        </>
      )
    }
}
