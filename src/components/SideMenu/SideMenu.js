import style from "./SideMenu.css";
import NavItem from "./components/NavItem";
import { useEffect, useRef, useState } from "react";



function SideMenu() {

  // menuOpen - true if some nav menu is open
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState();



  let onPageMenuButtonClicked = function(e) {

    /* Scenarios for when menu button clicked on:
    1. No menus are open, you click on one to open it.
      - that button is also active
    2. A menu is open, and you click the button for that same menu to close it
      - that button is made inactive
    3. A menu is open, and you click the button for a different menu to close old one & open new one
      - The old button made inactive, new button made active
    */

    // Get all menus
    let menus = document.querySelectorAll(".sm .navMenu");
    let buttons = document.querySelectorAll(".sm .navButton")
    let currentButton = e.target;
    let clickedOn = e.target.nextElementSibling.attributes.menunum;
    let siblingMenu = e.target.nextElementSibling;

    // if a menu is not open yet, open the one clicked on
    if (menuOpen === false) {
      siblingMenu.classList.add("shown");
      currentButton.classList.add("active");
      setMenuOpen(true);
      setCurrentMenu(clickedOn)
    } else {
      // if a menu IS open
      // If the one currently open is clicked on, just close that one do nothing else
      if (clickedOn === currentMenu) {
        siblingMenu.classList.remove("shown");
        currentButton.classList.remove("active");
        setMenuOpen(false);
      } else {
        // If one other than currently open is clicked on, close all menus and open the one clicked on
        siblingMenu.classList.add("shown");
        
        setCurrentMenu(clickedOn);

        
        menus.forEach((menu) => {
          if (clickedOn !== menu.attributes.menunum) {
            menu.classList.remove("shown");
          }
        })

        buttons.forEach((button) => {
          button.classList.remove("active"); 
        })

        currentButton.classList.add("active")
      }
      


    console.log("currentMenu:", currentMenu);
      

    }  
  }

  /* The content for the nav buttons and their menus */
  let createButtonContent = function(symbol, name) {
    return (
      <><h2>{symbol}</h2><p>{name}</p></>
    )
  }


  let buttonOneContent = createButtonContent('H','Languages');
  let buttonTwoContent = createButtonContent("C", "Colours");
  let buttonThreeContent = createButtonContent("A", "About");
  let buttonFourContent = createButtonContent("O", "Other");
  let menuOneContent = <><h2>This is menu 1</h2></>



  return (
    <div className="sm">

        <nav className="siteNav">
          <div className="siteNavToggleButton">
            <button>T</button>
          </div>
          <div className="siteNavHeader">
            <h1>Demo Website</h1>
          </div>
        </nav>


        <nav className="pageNav">  
          <NavItem onClicked={onPageMenuButtonClicked} 
          buttonContent={buttonOneContent} menuContent={menuOneContent} id={1}></NavItem>
          <NavItem onClicked={onPageMenuButtonClicked} 
          buttonContent={buttonTwoContent} id={2}></NavItem>
          <NavItem onClicked={onPageMenuButtonClicked} 
          buttonContent={buttonThreeContent} id={3}></NavItem>
          <NavItem onClicked={onPageMenuButtonClicked} 
          buttonContent={buttonFourContent} id={4}></NavItem>
        </nav>

        <div className="content">
          <h1>Page Content</h1>
          <h2>Here is a subheader</h2>
          <p>Some content under the subheader, which is cool</p>
          <p>And another paragraph</p>
          <h2>The second subheader</h2>
          <p>This section iaadfafd afasdfa sdfasd fasdf asdf
            asd fad fdasfas dafads fa sfas
            asdfas fasfaf asdfa sdfas fasdf
            asd fas dfas fasf asfa sdf
            asdfas dfasfasfa sdfa
            asdfasfasd
            fas
            dfas
            fdas fncludes a list!</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
          <p>And then a summary of the list!</p>
          <h2>Conclusion</h2>
          <p>And finally, you can conclude our conclusion.
            afa fds fds  sdg ss dg dsf gds ffds f hghfs dhfshf ds hfds 
            sdf hs dfh gdsg sd fgs d dfs g dsggfgff dsg s fgs gs dgssg  dsfg 
          </p>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>
          <h1>aaaaaaa</h1>


        </div>

        <footer>
          <p><a>@Jordan McGalliard</a></p>
          <p><a href="https://github.com/jordan-mcgalliard">Github</a></p>
          <p><a href="https://github.com/jordan-mcgalliard/animations-transitions-tranforms-demos">App Source</a></p>
        </footer>

    </div>

  )
}


export default SideMenu;