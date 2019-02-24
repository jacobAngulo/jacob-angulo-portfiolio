import React from 'react';
import Header from './components/header/Header';
import SideNav from './components/side_nav/SideNav';
import ContentDisplay from './components/content/ContentDisplay';
import profileData from './profileData';
import './app.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-content'>
          <SideNav
          projects={profileData.projects} 
          />
          <ContentDisplay />
        </div>
      </div>
    );
  }
}

export default App;