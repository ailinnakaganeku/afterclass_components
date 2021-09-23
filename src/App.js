import React from 'react';

import './App.css';

//Components
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Landing />
    </div>
  );
}

export default App;
