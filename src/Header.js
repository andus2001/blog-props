import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div className="navContainer">
            <Navbar />
            <div className="headerTitle">
              <h1>Clean Blog</h1>
            <h4 >A Blog Theme by Start Bootstrap</h4>  
            </div>
            
        </div>
    )
}

export default Header