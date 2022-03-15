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
        <>
          <ProgressBar />
          <StarrySky />
          <div className='z-10 w-full h-full  flex justify-center dark:text-neutral-200'>
            <div className='w-full h-full max-w-screen-lg p-6 grid gap-6'>
              <div className='flex items-center'>
                <ToggleSwitch handleToggle={(toggle) => this.handleDarkMode(toggle)} />
                {
                  this.state.darkMode
                    ? <BiMoon size={20} className='ml-2' />
                    : <BiSun size={20} className='ml-2' />
                }
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
