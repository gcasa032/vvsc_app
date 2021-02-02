import React from 'react';
import Image from 'react-bootstrap/Image';
import AboutText from './AboutText';
import './AboutMe.css';

import logo from '../../assets/img/AboutMe/logo.png';

const aboutMe = ( props ) => {

    const hrStyle = {
        maxWidth: "50px",
        borderWidth: "3px",
        borderColor:" #fff"
    }

    return (
        <div id= {props.id} className="bg-danger AboutMe" stlye={{background: 'linear-gradient(rgba(162,46,136,0.25), rgba(3,53,227,0.25))'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='text-white section-heading'>About VVSC</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col offset-lg-8 mx-auto text-center'>
                        <hr style={hrStyle}className='light my-4'/>
                        <AboutText/>
                        <Image style={{width: '150px'}} src={logo}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default aboutMe;