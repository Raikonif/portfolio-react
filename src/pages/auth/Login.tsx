import React from 'react'
import {RiMailLine, RiLockLine} from "react-icons/ri";
const Login = () => {
  return (
    
    <div className='bg-white p-8 rounded-lg'>
        <div className='mb-10'>
          <h1 className='text-3x1 uppercase font-bold mb-4' >Sign In</h1>
              <form>
                  <div>
                      <input 
                      type='email' 
                      className='w-full border border-green-200 outline-none py-2 px-4 rounded-lg mb-2' 
                      id='email' 
                      placeholder='E - mail' />
                      <input type='password' 
                      className='w-full border border-green-200 outline-none py-2 px-4 rounded-lg' 
                      id='password' 
                      placeholder='Password' />
                  </div>
              </form>
        </div>
    </div>
  )
}

export default Login;
