import React from 'react'
import Footer from '../../components/common/footer/Footer'
import Navbar from '../../components/common/navbar/Navbar'
import "./Home.css"
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../contact/Contact';
import Intro from '../intro/Intro';
import Education from '../education/Education';

const Home = () => {
    return (
        <div className='homeDiv'>
            <Navbar />

            {/* ............... Intro Section .............. */}

            <Intro />


            {/* .................About Section.................... */}

            <About />


            {/* .....................skills...................... */}

            <Skills />


            {/* ........................Projects........................ */}

            <Projects />


            {/* ......................Education..................... */}

            <Education />


            {/* .......................Contact............................ */}

            <Contact />


            {/* ...................footer.......................... */}

            <Footer />


        </div>
    )
}

export default Home