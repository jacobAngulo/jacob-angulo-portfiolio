import React from 'react';
import '../side_nav/nav-bar.css';

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
                search: false
            })
        } else {
            this.setState({
                folder: !this.state.folder
            })
        }
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
                <nav>
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
            </div>
        )
    }
}

export default SideNav;