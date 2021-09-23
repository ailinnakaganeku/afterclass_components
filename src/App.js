import './App.css';
import Landing from './components/Landing/Landing';
import { NavBar } from './components/NavBar/NavBar';
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
