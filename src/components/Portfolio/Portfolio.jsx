import React from 'react';
import ProjectData from '../../Data/Projects_data';
import './Portfolio.css';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <Zoom>
                <h5>My Recent Work</h5>
                <h2 className='portfolio__heading'>Portfolio</h2>
            </Zoom>

            <div className="container portfolio__container">
                {
                    ProjectData.map((item) => <article key={item.id} className='portfolio__item'>
                    <Flip bottom>
                    <div className="portfolio__item__img">
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <div className="portfolio__item__cta">
                        <a href={item.github} className='btn' target='_blank'>Github</a>
                        <a href={item.liveLink} target='_blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                    </Flip>
                </article>)
                }
                
                
            </div>
        </section>
    );
};

export default Portfolio;