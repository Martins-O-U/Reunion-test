import React from 'react';
import {NavLink,Link} from 'react-router-dom';



const HeaderNav = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className='container'>
                <Link to='/'>Reunite</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}

export default HeaderNav;

const SignedInLink = () =>{
    return (
        <ul className ="right">
            <li><NavLink to='/volunteer-add-case'>Add A New Case</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>RU</NavLink></li>
        </ul>
    )
}


const SignedOutLink = () =>{
    return (
        <ul className ="right">
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
    )
}