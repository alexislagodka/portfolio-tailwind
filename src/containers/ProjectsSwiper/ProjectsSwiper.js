import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import ProjectCard from '../../components/ProjectCard/ProjectCard'
import weatherAppImg from '../../assets/images/weather-app.png'
import windbnbImg from '../../assets/images/windbnb.png'
import portfolioImg from '../../assets/images/portfolio.png'
import countryquizImg from '../../assets/images/country-quiz.png'
import myunsplashImg from '../../assets/images/myunsplash.png'

SwiperCore.use([Pagination])

export default class ProjectsSwiper extends Component {
  render () {
    return (
      <Swiper
        className='w-full h-full'
        spaceBetween={50}
        slidesPerView={1}
        pagination
      >
        <SwiperSlide>
          <ProjectCard
            title='My-Unsplash'
            img={myunsplashImg}
            demoUrl='https://myunsplashdevchallenge.netlify.app/'
            gitUrl='https://github.com/alexislagodka/my-unsplash'
            tags={['react', 'next', 'tailwindcss', 'firebase']}
          >
            <p>Une application météo basée sur l&apos;api metaweather.</p>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title='Weather-App'
            img={weatherAppImg}
            demoUrl='https://wthrapp.netlify.app/'
            gitUrl='https://github.com/alexislagodka/weatherapp'
            tags={['react', 'css', 'responsive', 'api']}
          >
            <p>Une application météo basée sur l&apos;api metaweather.</p>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title='WindBnB'
            img={windbnbImg}
            demoUrl='https://wndbnbchllng.netlify.app/'
            gitUrl='https://github.com/alexislagodka/windbnbChallenge'
            tags={['react', 'css', 'responsive']}
          >
            <p>Une petite version de airbnb.</p>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title='Portfolio'
            img={portfolioImg}
            demoUrl='https://portfolio-alexis-lagodka.netlify.app/'
            gitUrl='https://github.com/alexislagodka/portfolioTailWind'
            tags={['react', 'css', 'responsive', 'tailwindcss']}
          >
            <p>Un profolio développé avec tailwindcss.</p>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            title='Country Quiz'
            img={countryquizImg}
            demoUrl='https://country-quiz-app.netlify.app/'
            gitUrl='https://github.com/alexislagodka/country-quiz'
            tags={['react', 'css', 'responsive', 'api']}
          >
            <p>Un quiz basé sur l&apos;api restcountries.eu.</p>
          </ProjectCard>
        </SwiperSlide>
      </Swiper>
    )
  }
}
