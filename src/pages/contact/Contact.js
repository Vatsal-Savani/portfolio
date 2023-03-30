import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Card from '../../components/common/card/Card'
import "./Contact.css"
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const nameReg = /^[a-zA-Z]([a-zA-z]){0,30}/;
        const emailReg = /^[a-z][a-z A-Z 0-9 .]*@[a-z]{1,30}.[a-z]{2,4}/;

        const isName = nameReg.test(name);
        const isMail = emailReg.test(email);

        console.log(isName, isMail)

        if (!isMail || !isName || message == "undefined") {
            alert("please Enter Valid Name or Email-id");
        }
        else {
            emailjs.sendForm('service_z8u3pp6', 'template_9pcuveq', form.current, 'tAL2DthJYlUTqFBDL')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            setName("")
            setEmail("")
            setMessage("")
        }


    };

    return (
        <div id="contactId" className='contactDiv'>
            <div className="contactHeading">
                <p className='head1 d-flex justify-center'>Get In Touch</p>
                <p className='head2 d-flex justify-center'>Contact Me</p>
            </div>
            <div className="contactBody d-flex justify-center wrap">
                <div className="left d-flex justify-center">
                    <Card logo={<MdOutlineMail size={20} />} heading="Email" data="Send a mail" />
                    <Card logo={<BsWhatsapp size={20} />} heading="WhatsApp" data="Send a message" />
                </div>
                <div className="right">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='name'>
                            <input type="text" name="name" placeholder='Your Full Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='email'>
                            <input type="text" name="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='message'>
                            <textarea name="message" cols="30" rows="8" placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                        </div>
                        <div>
                            <button className='contactbtn'>Send Message</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact