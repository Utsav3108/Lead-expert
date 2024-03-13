import React from 'react'
import dash from "./../../assets/dashboard.png"
import CRM from "./../../assets/CRM.png"
import Leads from "./../../assets/leads.png"
import CallHis from "./../../assets/call history.png"
import Widgets from "./../../assets/widget.png"
import Users from "./../../assets/users.png"
import Setting from "./../../assets/setting.png"
import './navbar.css'

const navbar = () => {
  return (
    <div>
        <ul className='nav-container'>
            <li className='nav-list'>
                <img src={dash} className='nav-icons' alt='dashboard'/>
                <span className='navs-desc'>Dashboard</span>
            </li>
            <li className='nav-list'>
                <img src={CRM} className='nav-icons' alt='crm'/>
                <span className='navs-desc'>CRM</span>
            </li>
            <li className='nav-list'>
                <img src={Leads} className='nav-icons' alt='leads'/>
                <span className='navs-desc'>Leads</span>
            </li>
            <li className='nav-list'>
                <img src={CallHis} className='nav-icons' alt='callhist'/>
                <span className='navs-desc'>Call History</span>
            </li>
            <li className='nav-list'>
                <img src={Widgets} className='nav-icons' alt='widget'/>
                <span className='navs-desc'>Widgets</span>
            </li>
            <li className='nav-list'>
                <img src={Users} className='nav-icons' alt='users'/>
                <span className='navs-desc'>Users</span>
            </li>
            <li className='nav-list'>
                <img src={Setting} className='nav-icons' alt='setting'/>
                <span className='navs-desc'>Setting</span>
            </li> 
        </ul>
    </div>
  )
}

export default navbar