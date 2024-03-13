import React from 'react'
import "./dashboard.css"
import GreenDot from './../../assets/green-dot.png'
import Pencil from './../../assets/pencil.svg'
import Settings from './../../assets/settings.svg'
import Code from './../../assets/code.svg'
import Bell from './../../assets/bell-2.svg'
import Cross from './../../assets/cross.svg'
import Globe from './../../assets/globe-2.svg'

const dashboard = () => {

  document.addEventListener('DOMContentLoaded', function() {
    const td = document.getElementById('Dept');  
    const span = document.createElement('span'); // Create a new span element
    td.appendChild(span);
    span.className = 'dept-td';
    span.innerText = 'HR Dept';
    
});

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
    <tr>
      <td><img src={GreenDot} width={10}/><span id='row1'>Data 1</span></td>
      <td>Data 2</td>
      <td id='Dept'></td>
      <td>Data 4</td>
      <td><p id='time'>12:00 AM - 11:59 PM</p><p id="days">M T W T F S S</p></td>
      <td>
        <img src={Pencil} id='pencil' width={20}/>
        <img src={Globe} id='cross' width={20}/>
        <img src={Settings} id='settings' width={20}/>
        <img src={Code} id='code' width={20}/>
        <img src={Bell} id='bell' width={20}/>
        <img src={Cross} id='cross' width={20}/>        
      </td>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
      <td>Data 4</td>
      <td>Data 5</td>
      <td>Data 6</td>
    </tr>

  </tbody>
</table>

        {/* <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
    </>
  )
}

export default dashboard

{/* <div className='dashboard-container'>
        <div className='dashboard'>
            <span className='desc'>
                <b id="list">List</b> Widget | List
            </span>
            <div className='date-block'>
                <button className='date-button'>Jan 21, 2024 to Feb 20, 2024</button>
            </div>        
        </div>
        <div className='info-blocks'>
        </div>
    </div> */}