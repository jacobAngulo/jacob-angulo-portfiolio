import React from 'react';
import '../header/header.css';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <i class="fas fa-compact-disc"></i>
                <nav>
                    <Link to='/'>Hello</Link>
                    <Link to='/'>And</Link>
                    <Link to='/'>Welcome</Link>
                    <Link to='/'>To</Link>
                    <Link to='/'>My</Link>
                    <Link to='/'>Portfolio</Link>
                </nav>
            </div>
        )
    }
}

export default Header;