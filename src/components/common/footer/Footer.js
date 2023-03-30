import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineLinkedin } from "react-icons/ai";
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footerDiv'>
            <div className="codeVats d-flex justify-center">
                <p>CodeVats</p>
            </div>
            <div className="footerNav">
                <nav className='footerNav'>
                    <ul className='footerUl d-flex justify-center wrap'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#educationId">Education</a></li>
                        <li><a href="#skillId">Skills</a></li>
                        <li><a href="#projectId">Portfolio</a></li>
                        <li><a href="#aboutId">About</a></li>
                        <li><a href="#contactId">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="socials d-flex justify-center wrap">
                <a target="_blank" href="https://www.instagram.com/vats.savani.9083/"><button className='footerbtn'><BsInstagram size={25} /></button></a>
                <a target="_blank" href="https://www.linkedin.com/in/vatsal-savani-2786991b4/"><button className='footerbtn'><AiOutlineLinkedin size={25} /></button></a>
                <a target="_blank" href="https://twitter.com/vatsalsavani333"><button className='footerbtn'><RxTwitterLogo size={25} /></button></a>
            </div>
            <div className="copyright d-flex justify-center">
                <p> &copy; CodeVats Developers All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer