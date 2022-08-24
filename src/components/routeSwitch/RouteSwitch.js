import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../../App"
import TopMenuToggle from "../topMenuToggle/TopMenuToggle";
import SideMenu from "../SideMenu/SideMenu.js"

const RouteSwitch = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/topMenuToggle" element={<TopMenuToggle/>}/>
        <Route path="/sideMenu" element={<SideMenu/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default RouteSwitch;