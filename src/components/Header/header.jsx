import React from 'react'
import BellSVG from "../../assets/bell.svg"
import FourArrow from "../../assets/four-sides.png"
import User from "../../assets/user.png"
import CompanyLogo from "../../assets/company-logo.png"
import Navigation from "../Navigation/navbar"
import "./header.css"


const header = () => {
  return (
    <>
      <div className='contain-header'>
        <div className='box2'>
          <img src={CompanyLogo} className="logo" alt="LOGO" width ={30} />
        </div>
        <div className='box2 options-container1'>
          <img src={FourArrow} className="icons1"  alt="arrows" width={20}/>
          <img src={BellSVG} className="icons1"  alt="bell" width={20}/>
          <img src={User} className="icons1"  alt="user" width={20}/>    
        </div>
      </div>
      <div>
          <Navigation />
      </div>
    </>
  )
}

export default header