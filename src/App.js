import React from 'react';
import Header from './components/header/Header';
import SideNav from './components/side-nav/SideNav';
import ContentDisplay from './components/content/ContentDisplay';
import profileData from './profileData';
import './app.css'
import Footer from './components/footer/Footer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      content: ContentDisplay.MainContent
    }  
  }

  changeContent = (newContent) => {
    this.setState({
      content: newContent
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-content'>
          <SideNav
          changeContent={this.changeContent}
          projects={profileData.projects} 
          />
          <this.state.content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;