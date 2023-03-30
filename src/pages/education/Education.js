import React from 'react'
import './Education.css'
import { FaUniversity, FaSchool } from "react-icons/fa"

const Education = () => {
    return (
        <div id="educationId" className='educationDiv'>
            <div className='aboutHead'>
                <p className='head1 d-flex justify-center'>Here Is My Studies</p>
                <p className='head2 d-flex justify-center'>Education</p>
            </div>
            <div className="educations d-flex">
                <div className="edu ssc d-flex justify-center wrap">
                    <div className="icon">
                        <FaSchool size={100} />
                    </div>
                    <div className="eduDetails">
                        <p>10'th "S.S.C" - 74 percentage </p>
                        <p className='place'>Pragna Primary School, Surat</p>
                        <p>G.S.E.B Board</p>
                    </div>
                    <div className="Duration" style={{ color: "#4db5ff" }}>
                        <p>Jul 2016 - Mar 2017</p>
                    </div>
                </div>
                <div className="edu hsc d-flex justify-center wrap">
                    <div className="icon">
                        <FaSchool size={100} />
                    </div>
                    <div className="eduDetails">
                        <p>12'th "S.S.C" - 71 percentage </p>
                        <p className='place'>Gajera Vidyabhavan, Surat</p>
                        <p>G.S.E.B Board</p>
                    </div>
                    <div className="Duration" style={{ color: "#4db5ff" }}>
                        <p>Jun 2018 - Mar 2019</p>
                    </div>
                </div>
                <div className="edu collage d-flex justify-center wrap">
                    <div className="icon">
                        <FaUniversity size={100} />
                    </div>
                    <div className="eduDetails">
                        <p>B.E "IT" - 7.69 C.P.I / 7.50 C.G.P.A </p>
                        <p className='place'>S.V.I.T, Vasad, Anand</p>
                        <p>G.T.U</p>
                    </div>
                    <div className="Duration" style={{ color: "#4db5ff" }}>
                        <p>Jul 2019 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education