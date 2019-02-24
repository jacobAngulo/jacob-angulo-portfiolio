import React from 'react';
import Header from './components/header/Header';
import SideNav from './components/side-nav/SideNav';
import ContentDisplay from './components/content/ContentDisplay';
import footer from './components/footer/Footer'
import profileData from './profileData';
import './app.css'
import Footer from './components/footer/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default App;