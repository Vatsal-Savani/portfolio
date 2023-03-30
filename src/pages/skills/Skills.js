import React from 'react'
import { GoVerified } from "react-icons/go";
import "./Skills.css"

const Skills = () => {
    return (
        <div id="skillId" className='skillDiv'>
            <div className="skillHeading">
                <p className='head1 d-flex justify-center'>What Skills I Have</p>
                <p className='head2 d-flex justify-center'>Skills</p>
            </div>
            <div className="skills d-flex justify-center wrap">
                <div className="frontend">
                    <p className="feHeading d-flex justify-center m2">
                        Frontend Development
                    </p>
                    <div className='d-flex'>
                        <ul className='feul'>
                            <li className="d-flex m2"><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>HTML</li>
                                    <li className="level">Intrermediate</li>
                                </ul>
                            </li>
                            <li className="d-flex m2"><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>JavaScript</li>
                                    <li className="level">Intrermediate</li>
                                </ul>
                            </li>
                            <li className="d-flex m2"><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>React Js</li>
                                    <li className="level">Intrermediate</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className='feul'>
                            <li className="d-flex m2"><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>CSS</li>
                                    <li className="level">Intrermediate</li>
                                </ul>
                            </li>
                            <li className="d-flex m2"><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>BootStrap</li>
                                    <li className="level">Intrermediate</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="backend">
                    <p className="beHeading d-flex justify-center m2">
                        Backend Development
                    </p>
                    <div className="d-flex">
                        <ul className='beul'>
                            <li className='d-flex m2'><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>Node Js</li>
                                    <li className="level">Beginner</li>
                                </ul>
                            </li>
                            <li className='d-flex m2'><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>Mongo DB</li>
                                    <li className="level">Intrermediate</li>
                                </ul>
                            </li>
                            <li className='d-flex m2'><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>mongoose</li>
                                    <li className="level">Intrermediate</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className='beul'>
                            <li className='d-flex m2'><GoVerified color='#4db5ff' />
                                <ul>
                                    <li>Express Js</li>
                                    <li className="level">Beginner</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills