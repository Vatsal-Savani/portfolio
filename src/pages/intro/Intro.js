import React from 'react'
import "./Intro.css"
import cv from "../../assets/resume-vs.pdf";

const Intro = () => {




    return (
        <div className='intro d-flex'>
            <div className='info'>
                <div className='infoChild1'>
                    <p className='childs c1'>Hello i'm</p>
                    <p className='childs c2'>Vatsal Savani</p>
                    <p className='childs c3'>Front-End Developer</p>
                </div>
                <div className="infoChild2">
                    <a href={cv} download><button>Download CV</button></a>
                    <a href="#contactId"><button>Let's Talk</button></a>
                </div>
            </div>
        </div>
    )
}

export default Intro