import React, { Component } from 'react';
import PresentationCard from '../../components/PresentationCard/PresentationCard';
import CompetencesCard from '../../components/CompetencesCard/CompetencesCard';
import ProjectsSwiper from '../ProjectsSwiper/ProjectsSwiper';
import ExperiencesCard from '../../components/ExperiencesCard/ExperiencesCard';
import FormationCard from '../../components/FormationCard/FormationCard';

export default class Site extends Component {
    render() {
        return (
            <div className="w-full h-full max-w-screen-2xl p-6 grid gap-6">
                <PresentationCard />
                <CompetencesCard />
                <ProjectsSwiper />
                <ExperiencesCard />
                <FormationCard />
            </div>
        )
    }
}
