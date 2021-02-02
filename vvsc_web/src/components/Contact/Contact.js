import React from 'react';


import SocialIcon from './SocialIcon';
import './Contact.css';

const contact = () => {

    const style = { padding: '50px'}

    const hrStyle = {
        maxWidth: "50px",
        borderWidth: "3px",
        borderColor:" #DC3545"
    }

    return (
        <section id="contact" style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading">Let's Get In Touch!</h2>
                        <hr style={hrStyle} className="my-4"/>
                        <p class="mb-5">Have any questions? Feel free to send me a DM or an email!</p>
                    </div>
                </div>
                <div className="row ml-auto">
                    <div className="col"></div>
                    <SocialIcon link="https://www.instagram.com/vincentvictorero_sc/" icon='instagram'/>
                    <SocialIcon link="https://www.facebook.com/VincentVictoreroSC/" icon='facebook'/>
                    <SocialIcon link="vincentvictorero@gmail.com" icon='email'/>
                    <div className="col"></div>
                </div>
            </div>
        </section>
    );

}

export default contact;