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
        this.setState({
            folder: !this.state.folder
        })
    }

    handleOpenSearchTab = () => {
        this.setState({
            search: !this.state.search
        })
    }

    render() {
        return (
            <div className='side-nav'>
                <nav>
                    <a 
                    name={'folder'}
                    onClick={this.handleOpenFilesTab}>
                        <i
                        className={`fas ${this.state.folder ? 'fa-folder-plus' : 'fa-folder-minus'}`}>
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