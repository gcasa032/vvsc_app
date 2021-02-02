import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const socialIcon = (props) => {

    let icon = null;

    if (props.icon === "instagram") {
        icon = (<a href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon color="#2b2b2b" size="4x" icon={faInstagram} /></a>)
    } else if (props.icon === "facebook") {
        icon = (<a href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon color="#2b2b2b" size="4x" icon={faFacebook} /></a> )
    } else if (props.icon === "email") {
        const link = "mailto:" + props.link;
        icon = (<a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon color="#2b2b2b" size="4x" icon={faPaperPlane} /></a> )
    }

    return (
    <div className="col-1 text-center">
        {icon}
    </div>
    );
}

export default socialIcon;