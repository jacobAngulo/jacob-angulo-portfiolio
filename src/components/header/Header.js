import React from 'react';
import '../header/header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img className="logo" src={require('../images/portfolio-logo.png')} />
                <nav>
                    <a>Hello</a>
                    <a>And</a>
                    <a>Welcome</a>
                    <a>To</a>
                    <a>My</a>
                    <a>Portfolio</a>
                </nav>
            </div>
        )
    }
}

export default Header;