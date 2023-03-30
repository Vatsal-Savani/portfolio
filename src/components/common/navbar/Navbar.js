import React, { useState } from 'react'
import "./Navbar.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

const Navbarr = () => {

    const [activeNav, setActiveNav] = useState("#");

    return (
        <div className="navbar">
            <nav>
                <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
                <a href="#aboutId" onClick={() => setActiveNav("#aboutId")} className={activeNav === "#aboutId" ? "active" : ""}><AiOutlineUser /></a>
                <a href="#skillId" onClick={() => setActiveNav("#skillId")} className={activeNav === "#skillId" ? "active" : ""}><BiBook /></a>
                <a href="#projectId" onClick={() => setActiveNav("#projectId")} className={activeNav === "#projectId" ? "active" : ""}><RiServiceLine /></a>
                <a href="#contactId" onClick={() => setActiveNav("#contactId")} className={activeNav === "#contactId" ? "active" : ""}><BiMessageSquareDetail /></a>
            </nav>
        </div>

    )
}

export default Navbarr