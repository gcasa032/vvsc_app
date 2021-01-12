import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button"

import './Header.css';
import headerImg from '../../assets/img/Header/headerImg.JPG';

const header = () => {

    const style = {
        background: `linear-gradient(116deg, rgba(162,46,136,0.25), rgba(3,53,227,0.25) 98%), url(${headerImg}) center / cover space`,
        margin: '0'
    }

    const hrStyle = {
        maxWidth: "50px",
        borderWidth: "3px",
        borderColor:" #DC3545"
    }

    const btnStyle = {
        fontWeight: "700",
        borderRadius: "300px",
        padding: ".9rem 1.5rem"
    }

    return (
        <Jumbotron id='header' style={style} className="text-center text-white" fluid={true}>
            <div className="container my-auto"> 
                <div className="col-lg-10 mx-auto">
                    <h1 className="text-uppercase">
                        <strong>Vincent Victorero</strong>
                    </h1>
                    <h2 className="text-uppercase">
                        <small>
                            <strong>STRENGTH &amp; CONDITIONING</strong>
                        </small>
                    </h2>
                    <hr style={hrStyle} />
                </div>
                <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">Intrested in coaching? Click below to sign up now. If you are already a member you can sign in</p>
                <Button style={btnStyle} size='lg' type='button' variant='danger' class="btn btn-danger btn-xl" href="#services">SIGN UP</Button>
            </div>
            </div>
        </Jumbotron>
    )
}

export default header;