import React, { Component } from 'react'
import ToggleSwitch from '../../components/Buttons/ToggleSwitch/ToggleSwitch'
import PresentationCard from '../../components/PresentationCard/PresentationCard'
import CompetencesCard from '../../components/CompetencesCard/CompetencesCard'
import TechnoCard from '../../components/TechnoCard/TechnoCard'
import ProjectsSwiper from '../ProjectsSwiper/ProjectsSwiper'
import ExperiencesCard from '../../components/ExperiencesCard/ExperiencesCard'
import FormationCard from '../../components/FormationCard/FormationCard'
import Footer from '../../components/Footer/Footer'
import app from '../../firebase'
import { getDatabase, get, ref, child } from 'firebase/database'

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
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    render () {
      return (
        <div className='w-full h-full flex justify-center dark:text-neutral-200'>
          <div className='w-full h-full max-w-screen-2xl p-6 grid gap-6'>
            <ToggleSwitch handleToggle={(toggle) => this.handleDarkMode(toggle)} />
            <PresentationCard />
            <CompetencesCard />
            <TechnoCard />
            {this.state.projects && <ProjectsSwiper projects={this.state.projects} />}
            <ExperiencesCard />
            <FormationCard />
            <Footer />
          </div>
        </div>
      )
    }
}
