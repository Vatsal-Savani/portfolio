import React, { useState } from 'react'
import "./Card.css"

const Card = ({ logo, heading, data }) => {

    const [href, setHref] = useState();

    if (heading == "Email" || heading == "WhatsApp") {

        return (
            <div className="mainAbt">
                <div className="abtCard">
                    <div className="cardLogo d-flex justify-center">
                        {logo}
                    </div>
                    <p className='d-flex justify-center'>{heading}</p>
                    <p className='d-flex justify-center'>{heading == "Email" ? "vatsalsavani333@gmail.com" : "+91 9327090366"}</p>
                    <a className="cardHref" href={heading == "Email" ? "mailto:vatsalsavani333@gmail.com" : "https://api.whatsapp.com/send?phone=9327090366"} target="_blank" ><p className='d-flex justify-center'>{data}</p></a>
                </div>
            </div>

        )
    }

    return (
        <div className="mainAbt">
            <div className="abtCard">
                <div className="cardLogo d-flex justify-center">
                    {logo}
                </div>
                <p className='d-flex justify-center'>{heading}</p>
                <p className='cardData d-flex justify-center'>{data}</p>
            </div>
        </div>

    )
}

export default Card