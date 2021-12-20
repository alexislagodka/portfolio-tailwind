import React, { Component } from 'react';
import PresentationCard from '../../components/PresentationCard/PresentationCard';
import CompetencesCard from '../../components/CompetencesCard/CompetencesCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import weatherAppImg from '../../assets/images/weather-app.png';

export default class Site extends Component {
    render() {
        return (
            <div className="w-full h-full p-4 grid gap-4">
                <PresentationCard />
                <CompetencesCard />

                <ProjectCard 
                title="Weather-App"
                img={weatherAppImg} 
                demoUrl="https://wthrapp.netlify.app/" 
                gitUrl="https://github.com/alexislagodka/weatherapp" 
                tags={["#react", "#css", "#responsive"]}
                >
                <p>
                    Application météo basé sur l'API metaweather.
                </p>
                </ProjectCard>

            </div>
        )
    }
}
