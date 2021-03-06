import React from 'react';
import { Link } from 'react-router-dom'

class SideNavLinkContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opened: false
        }
    }

    toggleOpenness = ()  => {
        this.setState({
            opened: !this.state.opened
        })
    }

    render() {
        return (
            <div>
                <a 
                className='projects-nav-link'
                onClick={this.toggleOpenness}
                >
                    <span className={`${this.state.opened ? 'explorer-arrow-open' : 'explorer-arrow-closed'}`}></span>
                    <p>{this.props.project.name}</p>
                </a> 
                <nav className={`nested-explorer-nav ${this.state.opened ? 'projects-nav-open' : 'projects-nav-closed'}`}>
                    <a 
                        target='_blank'
                        href={this.props.project.repo} 
                        className='nested-link'>
                        <i class="nested-link-icon fas fa-seedling"></i>
                        {this.props.project.name}.githubRepo
                    </a>
                    <a
                        target='_blank'
                        href={this.props.project.link} 
                        className='nested-link'>
                        <i class="nested-link-icon fas fa-lemon"></i>                    
                        {this.props.project.name}.netlifySite
                    </a>
                    <Link
                        to={`/${this.props.project.name}`}
                        className='nested-link'>
                        <i class="nested-link-icon fas fa-pepper-hot"></i>                    
                        {this.props.project.name}.ReadMe
                    </Link>
                </nav>
            </div>
        )
    }
}

export default SideNavLinkContent