import React, { useState } from 'react';
import './navbar.css';
import {RiBarChartHorizontalLine , RiCloseLine} from 'react-icons/ri';
import logo from  '../../assets/logo.svg';


const Menu =()=>(<>
  <p><a href="#">home</a></p>
  <p><a href="#wgpt">what is gpt?</a></p>
  <p><a href="#possibility">open ai </a></p>
  <p><a href="#features">case studies</a></p>
  <p><a href="#blog">library </a></p>

</>)

 
function Navbar() {

  const [toggleMenu, settoggleMenu] = useState(false); 

  return (
 
    <div className='gpt__navbar'>
      <div className="gpt__navbar-links">

        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt__navbar-links_container">  <Menu/>  </div>


        <div className="gpt__navbar-links_sign">
        <p>singin</p>
        <button type='button'> signup</button>
        </div>


        <div className='gpt__navbar-menu'>

        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={()=>settoggleMenu(false)}/>
        : <RiBarChartHorizontalLine color='#fff' size={27} onClick={()=>settoggleMenu(true)}/> }

        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className='gpt__navbar-menu_container-links'>

            <Menu/>

            <div className="gpt__navbar-menu_container-links-sign">

              <p>singin</p>
              <button type='button'> signup</button>
              </div>

            </div>
            </div> )  }

        </div>
        

        


      </div>
    </div>
  )
}

export default Navbar