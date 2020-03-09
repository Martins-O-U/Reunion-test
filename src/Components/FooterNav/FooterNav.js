import React from 'react';
import { Link } from "react-router-dom"


const FooterNav = () => {
    return (
        <div>
            <footer className=" lighten-4">
                <div className='footer-link'>
                    <p><Link to='/' id='footerHome'>Home</Link></p>
                    <p><Link to='/' id='footerHome'>Contact</Link></p>
                </div>
                <div> &copy; 2019 Copyright Reunite</div>
                <ul className='ulContent'>
                    <li><a className="icons" href="#!"><i className="fa fa-fw fa-linkedin"></i></a></li>
                    <li><a className="icons" href="#!"><i className="fa fa-fw fa-facebook"></i></a></li>
                    <li><a className="icons" href="#!"><i className="fa fa-fw fa-instagram"></i></a></li>
                    <li><a className="icons" href="#!"><i className="fa fa-fw fa-twitter"></i></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default FooterNav;