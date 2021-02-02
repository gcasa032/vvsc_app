import React from 'react';

import './Footer.css'



const footer = ( props ) => {

    // Implement links and hover
    return (
            <footer id={props.id} className="container-fluid bg-dark py-3 footer-basic text-center">
                    <ul className="list-inline">
                        <li className="list-inline-item">About</li>
                        <li className="list-inline-item">Privacy Policy</li>
                    </ul>
                    <p class="copyright">Vincent Victorero SC © 2016</p>
            </footer>
    );
}

export default footer;