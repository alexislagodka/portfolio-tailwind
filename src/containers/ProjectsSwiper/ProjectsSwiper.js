import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import weatherAppImg from '../../assets/images/weather-app.png';
import windbnbImg from '../../assets/images/windbnb.png';

SwiperCore.use([Pagination]);

export default class ProjectsSwiper extends Component {
    render() {
        return (
        <Swiper
        className="w-full h-full"
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
        >
            <SwiperSlide>
                <ProjectCard 
                title="Weather-App"
                img={weatherAppImg} 
                demoUrl="https://wthrapp.netlify.app/" 
                gitUrl="https://github.com/alexislagodka/weatherapp" 
                tags={["#react", "#css", "#responsive","#api"]}
                >
                <p>
                    Une application météo basée sur l'API metaweather.
                </p>
                </ProjectCard>
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard 
                title="WindBnB"
                img={windbnbImg} 
                demoUrl="https://wndbnbchllng.netlify.app/" 
                gitUrl="https://github.com/alexislagodka/windbnbChallenge" 
                tags={["#react", "#css", "#responsive"]}
                >
                <p>
                    Une petite version de airbnb.
                </p>
                </ProjectCard>
            </SwiperSlide>
        </Swiper>
        )
    }
}
