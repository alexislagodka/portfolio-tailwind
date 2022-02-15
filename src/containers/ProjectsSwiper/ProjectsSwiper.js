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
      <div className='w-full max-full max-h-screen min-w-0 min-h-0'>
        <Swiper
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
                >
                  <p>
                    Une application de collection de photos basé sur nextjs.
                  </p>
                </ProjectCard>
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
