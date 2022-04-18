import React from 'react';
import './Contact.css';
import {MdEmail} from 'react-icons/md';
import {BsMessenger, BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    {/* Email */}
                    <article>
                        <div>
                            <h4> <MdEmail className='contact__icon contact__email__icon'/> </h4>
                            <h5>softsamiul@gmail.com</h5>
                        </div>
                        <a href="mailto:softsamiul@gmail.com" target="_blank" >Send a message</a>
                    </article>
                    {/* Whatsapp */}
                    <article>
                        <div>
                            <h4> <BsWhatsapp className='contact__icon contact__whatsapp__icon'/> </h4>
                            <h5>Whatsapp</h5>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=+917478803500" target="_blank">Send a message</a>
                    </article>
                    {/* Messenger */}
                    <article>
                        <div>
                            <h4> <BsMessenger className='contact__icon contact__messenger__icon'/> </h4>
                            <h5>Messenger</h5>
                        </div>
                        <a href="https://m.me/softsamiul02" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action="" className='contact__form'>
                    <input type="text" name='name' placeholder='Enter name'/>
                    <input type="email" name='email' placeholder='Enter email'/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                    <button type="submit" className='btn btn-primary send__msg__btn'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;