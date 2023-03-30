import React from 'react'
import ProjectCard from '../../components/common/projectCard/ProjectCard'
import "./Projects.css"
import projectdata from "../../projectData/projectsData.js"


const Projects = () => {
    return (
        <div id="projectId" className='projectsDiv'>
            <div className='projectHead'>
                <p className='head1 d-flex justify-center'>My Recent Work</p>
                <p className='head2 d-flex justify-center'>Portfolio</p>
            </div>

            <div className="projectCards d-flex justify-center wrap">
                {
                    projectdata.map((item, index) => {
                        return (
                            <div className="pCard" key={index}>
                                <ProjectCard title={item.title} image={item.img} technology={item.technology} githubLink={item.githubLink} liveLink={item.liveLink} />
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Projects