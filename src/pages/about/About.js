import React from 'react'
import "./About.css"
import { FaAward, FaFolder } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import Card from '../../components/common/card/Card';
import abtimg from "../../images/Hotpot.png"

const About = () => {
    return (
        <div id='aboutId' className="about d-flex">
            <div className="abt">
                <div className='aboutHead'>
                    <p className='head1 d-flex justify-center'>Get To Know</p>
                    <p className='head2 d-flex justify-center'>About Me</p>
                </div>
                <div className="mainAbout d-flex wrap">
                    <div className="leftAbout">
                        <div className="leftAbt">
                            <div className="iamgeofabout">
                                <img src={abtimg} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="rightAbt">
                        <div className="cards d-flex ">
                            <Card logo={<FaAward size={20} />} heading="Experience" data="0-1 year" />
                            <Card logo={<FaFolder size={20} />} heading="Projects" data="5+ completed" />
                            <Card logo={<MdOutlineLocationOn size={20} />} heading="Location" data="Gujarat,India" />
                        </div>
                        <div className='details d-flex'>
                            <p><RiStarSLine color='#4db5ff' /> My Skills are in Front-End Development.</p>
                            <p><RiStarSLine color='#4db5ff' /> i'm Final Year Student of Information Technology at Svit, Vasad.</p>
                            <p><RiStarSLine color='#4db5ff' /> Degree : Bechelor of Engineering</p>
                        </div>
                        <div className="abtBtn d-flex">
                            <a href="#contactId"><button className='aboutBtn'>Let's Talk</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About