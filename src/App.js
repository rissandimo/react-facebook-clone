import React from 'react';
import './App.css';

// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Posts from './Post';

function App() {
  return (
    // BEM naming convention
    <div className="app">

      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />

        {/* widgets */}

      </div>
    

    </div>

  );
}

export default App;
