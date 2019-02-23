import React from 'react';
import '../side_nav/nav-bar.css'

class SideNav extends React.Component {
    render() {
        return (
            <div className='side-nav'>
                <nav>
                    <a><img className="icon-link" src={require('../images/file-icon.png')}/></a>
                    <a><img className="icon-link" src={require('../images/search-icon.png')}/></a>
                </nav>
            </div>
        )
    }
}

export default SideNav;