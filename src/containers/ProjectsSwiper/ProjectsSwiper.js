import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

SwiperCore.use([Pagination])

export default class ProjectsSwiper extends Component {
  render () {
    return (
      <div className='grid'>
        <Swiper
          className='w-full h-full flex justify-center'
          spaceBetween={50}
          slidesPerView={1}
          pagination
        >
          {Object.entries(this.props.projects).map((project) => {
            const key = project[0]
            const data = project[1]
            return (
              <SwiperSlide key={key}>
                <ProjectCard
                  title={data.title}
                  image={data.image}
                  demoUrl={data.demoUrl}
                  gitUrl={data.gitUrl}
                  tags={data.tags}
                  description={data.description}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    )
  }
}

ProjectsSwiper.propTypes = {
  projects: PropTypes.object
}
