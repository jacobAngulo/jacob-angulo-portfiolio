import React from 'react';
import SideNavLinkContent from './side-nav-link-content/SideNavLinkContent'
import '../side-nav/nav-bar.css';

class SideNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            folder: false,
            search: false
        }
    }

    handleOpenFilesTab = () => {
        if(this.state.folder === false && this.state.search === true) {
            this.setState({
                folder: true,
                search: false,
                projects: false
            })
        } else {
            this.setState({
                folder: !this.state.folder
            })
        }
    }

    handleOpenProjectsTab = () => {
        this.setState({
            projects: !this.state.projects
        })
    }

    handleOpenSearchTab = () => {
        if(this.state.search === false && this.state.folder === true) {
            this.setState({
                folder: false,
                search: true
            })
        } else {
            this.setState({
                search: !this.state.search
            })
        }
    }

    render() {
        return (
            <div className='side-nav'>
                <nav className='side-nav-nav'>
                    <a 
                    name={'folder'}
                    onClick={this.handleOpenFilesTab}>
                        <i
                        className={`fas ${this.state.folder ? 'fa-folder-minus' : 'fa-folder-plus'}`}>
                        </i>
                    </a>
                    <a 
                    name={'folder'}
                    onClick={this.handleOpenSearchTab}>
                        <i 
                        class={`fas ${this.state.search ? 'fa-search-minus' : 'fa-search-plus'}`}>
                        </i>                    
                    </a>
                </nav>
                <div className={`side-nav-explorer ${this.state.folder ? 'open' : 'closed'}`}>
                    <h2>EXPLORER</h2>
                    <section className='explorer-section'>
                        <div onClick={this.handleOpenProjectsTab} className='explorer-tab'>
                            <span className={`${this.state.projects ? 'explorer-arrow-open' : 'explorer-arrow-closed'}`}></span><h3>PROJECTS</h3>
                        </div>
                        <nav className={`${this.state.projects ? 'projects-nav-open' : 'projects-nav-closed'}`}>
                        {this.props.projects.map(project => {
                            return (
                                <SideNavLinkContent
                                project={project}
                                />
                            )
                        })}
                        </nav>
                    </section>
                </div>
            </div>
        )
    }
}

export default SideNav;