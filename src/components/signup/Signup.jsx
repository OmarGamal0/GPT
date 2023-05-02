import React from 'react'
import aiImage from '../../assets/ai.png'
import './signup.css'


const Inputs= ()=>( <>

<label htmlFor="first_name">Frist Name</label>
<input   type="text"name='first_name'id='first_name'/>

<label htmlFor="first_name">last name</label>
<input type="text" name='last_name'id='last_name'/>

<label htmlFor="first_name">age</label>
<input  type="number"name='age'id='age'/>

<label htmlFor="first_name">Email</label>
<input  type="email"name='email'id='email'/>
  
<label htmlFor="first_name">Password</label>
<input  type="password"name='password'id='password'/>

</>)

function Signup() {
  return (
<>

    <div className='gpt__signup section__padding  '>
    <div className='gpt__signup-content__input '>
    <h1 className='gradient__text'>SignUp</h1>
      <Inputs/>
    <button type='button'>Done</button>
    </div>

    <div className='gpt__signup-image'>
      <img src={aiImage} alt="" />
    </div>
    </div>
    
  
        
     
</>
   
   
  )
}

export default Signup