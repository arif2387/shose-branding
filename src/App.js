import './App.css';
import Herosection from "./components/Hero";
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      {/* This is the second way to write the code */}
      {/* 
      <nav>
        <div className='logo'>
          <img src="images/nike.jpg" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">More</li>
        </ul>
        <button>Login</button>
      </nav> 
      */}
      <Navigation />
      <Herosection/>
    </div>
  );
}

export default App;
