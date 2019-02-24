import React from 'react';

class SideNavLinkContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opened: false
        }
    }
    render() {
        return (
            <div className='projects-nav-link'>
                <span className='explorer-arrow-closed'></span>
                <p>{this.props.project.name}</p>
            </div>
        )
    }
}

export default SideNavLinkContent