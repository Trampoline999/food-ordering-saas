import "./Header.css"
import "../../fontawsome/fontawsome.js";
import Zomatologo from "../../assets/ZomatoLogo.png"
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  const [login,setLogin] = useState(false);

  const handleLogin = ()=>{
      return login===false ? setLogin(true) : setLogin(false);        
  }
  return (
   <div className='header'>
    {/* logo */}
     <div className='logo-container'>
      <img src={Zomatologo} alt="logo" />
    </div>
   {/* navitems */}
    <div className="navbar-menu">
        <ul className='nav-items'>
        <li className="navbar-links">
          <Link  to="/">Home</Link>
        </li>
        <li className="navbar-links">
          <Link to="/about">About Us</Link>
        </li>
        <li className="navbar-links">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="login-btn" onClick={handleLogin}>{login === false ? "login": "logout"}</li>
        <li className="navbar-links">Cart</li>
        </ul>
        
    </div>

   </div>
  )
}

export default Header