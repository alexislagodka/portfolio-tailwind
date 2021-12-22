import React, { Component } from 'react';
import ToggleSwitch from '../../components/Buttons/ToggleSwitch/ToggleSwitch';
import PresentationCard from '../../components/PresentationCard/PresentationCard';
import CompetencesCard from '../../components/CompetencesCard/CompetencesCard';
import ProjectsSwiper from '../ProjectsSwiper/ProjectsSwiper';
import ExperiencesCard from '../../components/ExperiencesCard/ExperiencesCard';
import FormationCard from '../../components/FormationCard/FormationCard';

export default class Site extends Component {

    render() {
        return (
            <div className="w-full h-full flex justify-center  dark:bg-gray-900">
                <div className="w-full h-full max-w-screen-2xl p-6 grid gap-6">
                    <ToggleSwitch handleToggle={(toggle) => this.props.handleDarkMode(toggle)}/>
                    <PresentationCard />
                    <CompetencesCard />
                    <ProjectsSwiper />
                    <ExperiencesCard />
                    <FormationCard />
                </div>
            </div>
        )
    }
}
