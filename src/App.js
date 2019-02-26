import React from 'react';
import Header from './components/header/Header';
import SideNav from './components/side-nav/SideNav';
import ContentDisplay from './components/content/ContentDisplay';
import profileData from './profileData';
import './app.css'
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-content'>
          <SideNav
          changeContent={this.changeContent}
          projects={profileData.projects} 
          />
          <Route exact path='/' component={ContentDisplay.MainContent}/>
          <Route path='/insta-clone' component={ContentDisplay.InstaClone}/>
          <Route path='/oer-bookr' component={ContentDisplay.OerBookr}/>
          <Route path='/todo-app' component={ContentDisplay.TodoApp}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;