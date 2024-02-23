/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import {Link } from 'react-router-dom';


  
    const Log = () => {

const [data , setData] = useState({})
      
  
const handleSubmit = (e) => {     
        e.preventDefault()
        console.log(data)
       }
      
        const onChangeHandler =(e) => {
          setData({...data,[e.target.id]:e.target.value})
        }
            
    return (
        <>
        <div className='grid grid-cols-1 h-screen w-full'>
         <div className='bg-white flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto  bg-gray-300 p-4' onSubmit ={handleSubmit} >

            <h2 className='text-4xl font-bold text-center py-6'>ANIMATE.</h2>
            <div className='flex flex-col py-2'>
              <label>Username</label>
              <input className='border p-2' type = "text" name='username' id='username' autoComplete='off' onChange ={onChangeHandler} 
              />
            </div>
    
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='border p-2' type = "text" name='password' id='password' autoComplete='off' onChange ={onChangeHandler} />
            </div>
    
            
            <button className='border w-full my-5 py-2 bg-indigo-500 hover:bg-indigo-600' type='submit'>Sign In</button>
            <div className='flex justify-between'>
              <p className='flex items-center mr-2'><input className='mr-2' type='checkbox'/>Remember Me</p>
              <p>Create an account</p>
              
              {/* <Link to="/Reg">Create an account</Link> */}
            </div>
          </form>
        </div>
        </div>
        </>
      )
    }
    
    
export default Log