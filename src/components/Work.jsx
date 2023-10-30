import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../assets/data.json';

const Work = () => {
  return (
    <div id='work'>
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} interval={2000} autoPlay={true} infiniteLoop={true}>
            {
              data.projects.map((project) => (
                <div key={project.title} className="workItem">
                  <img src={project.imgSrc} alt={project.title} />
                  <aside>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a className='demo' target='blank' href={project.url}>View Demo</a>
                    <a target='blank' href={project.github}>GitHub</a>
                  </aside>
                </div>
              ))
            }
          </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Work;
