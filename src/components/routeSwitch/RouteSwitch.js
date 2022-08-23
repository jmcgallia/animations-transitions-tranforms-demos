import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../../App"
import TopMenuToggle from "../topMenuToggle/TopMenuToggle";

const RouteSwitch = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/topMenuToggle" element={<TopMenuToggle/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default RouteSwitch;