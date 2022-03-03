import React from 'react'
import anime from 'animejs'

export default class CloudySky extends React.Component {
    state = {
      num: 60,
      vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    }

    cloudyDay = () => {
      anime({
        targets: ['#sky .bird'],
        opacity: [
          {
            duration: 700,
            value: '0'
          },
          {
            duration: 700,
            value: '1'
          }
        ],
        easing: 'linear',
        loop: true,
        delay: (el, i) => 50 * i
      })
    };

    shootingClouds = () => {
      anime({
        targets: ['#shootingclouds .cloud'],
        easing: 'linear',
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [
          {
            duration: 700,
            value: '1'
          }
        ],
        width: [
          {
            value: '150px'
          },
          {
            value: '0px'
          }
        ],
        translateX: 350
      })
    };

    randomRadius = () => {
    //   return Math.random() * 0.7 + 0.6
      return Math.random() * 0.7 + 2
    };

    getRandomX = () => {
      return Math.floor(Math.random() * Math.floor(this.state.vw)).toString()
    };

    getRandomY = () => {
      return Math.floor(Math.random() * Math.floor(this.state.vh)).toString()
    };

    componentDidMount () {
      this.cloudyDay()
      this.shootingStars()
    }

    render () {
      const { num } = this.state
      return (
        <div id='cloudySky'>
          <svg id='sky'>
            {[...Array(num)].map((x, y) => (
              <circle
                cx={this.getRandomX()}
                cy={this.getRandomY()}
                r={this.randomRadius()}
                stroke='none'
                strokeWidth='0'
                fill='white'
                key={y}
                className='bird'
              />
            ))}
          </svg>
          <div id='shootingclouds'>
            {[...Array(60)].map((x, y) => (
              <div
                key={y}
                className='wish'
                style={{
                  left: `${this.getRandomY()}px`,
                  top: `${this.getRandomX()}px`
                }}
              />
            ))}
          </div>
        </div>
      )
    }
}
