import { React, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

const TopMenuToggle = () => {

  const [showDropDown, setShowDropDown] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {

  }, [showDropDown])

  function onToggleButtonClick() {
    navRef.current.classList.toggle("shown")
    navRef.current.classList.toggle("notShown")
    return (setShowDropDown((showDropDown) ? false: true))
  }

  return (
    <div className="tmt">
      <nav className="mainNav notShown" ref={navRef}>
        <h1>Amazing Website</h1>

        <ul>
          <li><Link to={"/"}>Main Menu</Link></li>
          <li><Link to={"/"}>Main Menu</Link></li>
          <li><Link to={"/"}>Main Menu</Link></li>
          <li><Link to={"/"}>Main Menu</Link></li>
          
        </ul>

        
        <button className="toggleButton" 
        onClick={onToggleButtonClick}>
          A
        </button>

      </nav>


      <div className="content">
        <p>This is the first toggling menu I ever made. It is okay. I learned a lot about positioning.</p>
        <p>(make the screen not as wide to see it, or try on mobile)</p>
        <p>The next one should come much better and easier!</p>
        <p>This menu simply covers the page content. I'll try to make another one that pushes it down.</p>
      </div>

    </div>
  )

}

export default TopMenuToggle;