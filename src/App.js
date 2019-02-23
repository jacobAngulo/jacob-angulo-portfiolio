import React from 'react';
import SideNav from './components/side_nav/SideNav';
import Header from './components/header/Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav />
      </div>
    );
  }
}

export default App;