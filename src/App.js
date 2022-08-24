import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <h1>Animations, transitions, transforms, keyframes, etc. Demo</h1>
      
      <p>This project includes some different things I've made to practice
        CSS properties that have to do with animations. I also practiced React Router
        when making this project.
      </p>

      <ul>
        <li><Link to={"/topMenuToggle"}>Top-menu toggle</Link></li>
        <li><Link to={"/sideMenu"}>Side-menu</Link></li>
        <li>Image revolver</li>
        <li>Side-swipe modal</li>
        
      </ul>
   
    </div>
  );
}

export default App;
