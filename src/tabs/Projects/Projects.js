import React, { useState } from 'react';
import burger from '../../assets/burger.png';
import gridGame from '../../assets/grid-game.png'
import portfolio from '../../assets/portfolio.png'

import './Projects.scss';

const Projects = () => {

    const [projectData, setProjectData] = useState([{
        title: 'Grid Game',
        codeUrl: 'https://github.com/kshamaj15/ui-grid-game',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        description: 'This is a game where you have given N X N matrix with one empty block and you need to sort the numbers by moving the empty block',
        image: gridGame
    },{
        title: 'Burger App',
        codeUrl: 'https://github.com/kshamaj15/React-Burger-App',
        hostedOn: 'https://github.com/kshamaj15/ui-grid-game',
        description: 'This is an app for customised burger with your favorite ingredients',
        image: burger
    },{
        title: 'Portfolio',
        codeUrl: 'https://github.com/kshamaj15/portfolio',
        hostedOn: 'https://kshamaj15.github.io/portfolio/',
        description: 'This is my portpholio, where you can find my complete professional profile',
        image: portfolio
    }]);

    return (
        <div className="mx-3 tab tab-projects">
            <h1>Personal Projects</h1>
            <div className="tab-projects-list">
            {projectData.map((project, i) => {
                return (
                    <div className="tab-projects-list-item" key={i}>
                        <a href={project.codeUrl} target="_blank"><img src={project.image} height="210px" style={{borderRadius: '38px'}} alt="img"/></a>
                        <p>{project.description}</p>
                        <h6>{project.title}</h6>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Projects;
