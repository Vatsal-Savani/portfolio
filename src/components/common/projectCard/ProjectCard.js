import React, { useEffect, useState } from 'react'
import "./ProjectCard.css"


const ProjectCard = ({ title, image, technology, githubLink, liveLink }) => {

    const IsLink = githubLink == "#" ? false : true;

    if (IsLink) {
        return (
            <div className="ProjectCard">
                <div className="cardDiv">
                    <div className="projectDp">
                        <img src={image} alt="" />
                    </div>
                    <div className="projectTitle">
                        <h3>{title}</h3>
                    </div>
                    <div className='techs'>
                        <p>{technology}</p>
                    </div>
                    <div className="projectLinks">

                        <a href={githubLink} target="_blank" ><button id="gh" className='cardbtn'>Github</button></a>
                        <a href={liveLink} target="_blank" ><button id="ld" className='cardbtn'>Live Demo</button></a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="ProjectCard">
            <div className="cardDiv">
                <div className="projectDp">
                    <img src={image} alt="" />
                </div>
                <div className="projectTitle">
                    <h3>{title}</h3>
                </div>
                <div className='techs'>
                    <p>{technology}</p>
                </div>
                <div className="projectLinks">

                    <a href="#" target="_blank" ><button id="gh" className='cardbtn' disabled>Github</button></a>
                    <a href="#" target="_blank" ><button id="ld" className='cardbtn' disabled>Live Demo</button></a>
                </div>
            </div>
        </div>
    )




}

export default ProjectCard