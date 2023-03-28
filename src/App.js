import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
export default function App() {
  /*
  function setScreenSize(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", '${vh}px');
  }
  useEffect(() => {
    setScreenSize();
  });
  */

  return (
    <div>
      <BrowserView>
        <Link to="/transfer/account">account on Browser</Link><br/>
        <Link to="/log/main">log on Browser</Link>
      </BrowserView>
      <MobileView>
        <Link to="/transfer/account">account on Mobile</Link>
        <Link to="/log/main">log on Mobile</Link>
      </MobileView>


    </div>
  );
}
