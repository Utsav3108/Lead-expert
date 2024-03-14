import React from 'react'
import { useState } from 'react';
import "./dashboard.css"
import GreenDot from './../../assets/green-dot.png'
import Pencil from './../../assets/pencil.svg'
import Settings from './../../assets/settings.svg'
import Code from './../../assets/code.svg'
import Bell from './../../assets/bell-2.svg'
import Cross from './../../assets/cross.svg'
import Globe from './../../assets/globe-2.svg'

const Dashboard = () => {

  const [data, setData] = useState([
        { id: 1,Name: "Testing Widget", "Assigned Representative": "2", Dept: ['other', 'development', 'hr', 'business'], "Number of Leads":0 },
        { id: 2,Name: "Lead Generate", "Assigned Representative": "2", Dept: ['other', 'hr', 'business'], "Number of Leads":1 },
        { id: 3,Name: "Test 2", "Assigned Representative": "2", Dept: ['other', 'hr', 'business'], "Number of Leads":1 },
        { id: 4,Name: "Default", "Assigned Representative": "2", Dept: ['other', 'hr', 'business'], "Number of Leads":1 },
        { id: 5,Name: "Test", "Assigned Representative": "2", Dept: ['other', 'hr', 'business'], "Number of Leads":1 },
        { id: 6,Name: "Email Hunter", "Assigned Representative": "2", Dept: ['other', 'development'], "Number of Leads":1 },
        { id: 7,Name: "WebCodeGenie Inc.", "Assigned Representative": "2", Dept: ['other', 'hr', 'business'], "Number of Leads":1 },
        { id: 8,Name: "Smartwrp", "Assigned Representative": "2", Dept: ['other','design', 'business', 'hr'], "Number of Leads":1 },
        { id: 7,Name: "Sendtechdata", "Assigned Representative": "2", Dept: ['other', 'hr', 'business'], "Number of Leads":1 },
    ]);

    const length = data.length;

  return(
    <>
    <div className='List-container'>
      <span id='list-label'>List <span id="widget">Widget | List</span></span>
      <button id='bt-addwidget'>Add Widget</button>
    </div>
    <div className='table-container'>
      <div className='tab-elements'>
        <input id='search' type='text' placeholder='Search using name and domain'/>
        <button id='buttons-1'>Search</button>
        <button id='buttons-2'>Reset</button>
      </div>
      <div>
      <table className="striped-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Assigned Representatives</th>
            <th>Departments</th>
            <th>Number of Leads</th>
            <th>Active Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map(row => (

          <tr key={row.id}>
            <td id='first-row'><img src={GreenDot} width={10} alt="dot"/><span id='row1'>{row.Name}</span></td>
            <td>{row['Assigned Representative']}</td>
            <td id='Dept'>

            {
              row.Dept.map((dept, index) => (
                                      <React.Fragment key={index}>
                                          <span id="dept-tag">{dept}</span>                                    
                                      </React.Fragment>
                                  ))
            }

            </td>
            <td>{row['Number of Leads']}</td>
            <td><p id='time'>12:00 AM - 11:59 PM</p><p id="days">M T W T F S S</p></td>
            <td>
              <img src={Pencil} id='pencil' width={20} alt='icons'/>
              <img src={Globe} id='cross' width={20} alt='icons'/>
              <img src={Settings} id='settings' width={20} alt='icons'/>
              <img src={Code} id='code' width={20} alt='icons'/>
              <img src={Bell} id='bell' width={20} alt='icons'/>
              <img src={Cross} id='cross' width={20} alt='icons'/>        
            </td>
          </tr>
          
          ))}

          

        </tbody>
      </table>
      <p id='last-desc'>Display 1 to {length} records out of {length}</p>
      
      </div>
    </div>
    </>
  )
}

export default Dashboard