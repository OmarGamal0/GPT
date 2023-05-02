import React from 'react'
import aiImage from '../../assets/ai.png'
import './signin.css'

const Inputs= ()=>( <>

  <label htmlFor="first_name">Email</label>
  <input  type="email"name='email'id='email'/>
    
  <label htmlFor="first_name">Password</label>
  <input  type="password"name='password'id='password'/>
  
  
  
  </> )

function Signin() {
  return (
    <div className='gpt__signin section__padding  '>
    <div className='gpt__signin-content__input '>

    <h1 className='gradient__text'>Signin</h1>
      <Inputs/>
    <button type='button'>Done</button>
    </div>

    <div className='gpt__signin-image'>
      <img src={aiImage} alt="" />
    </div>
    </div>
  )
}

export default Signin