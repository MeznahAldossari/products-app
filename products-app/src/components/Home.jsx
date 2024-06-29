import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='w-full h-screen'>
        <div>
            <Nav/>

        </div>
        <div className='flex  justify-center items-center'>
          <h2 className='mt-12 text-[#604CC3] text-[2rem] max-sm:text-[1.3rem]'>Welcome to Our Website</h2>
        </div>
        <div className='w-full mt-12 h-auto px-6 flex justify-center items-center gap-16 max-sm:gap-6'>
            <Link to="/login" className='loginbtn w-[12%] max-sm:w-full px-4 max-sm:px-4 max-sm:text-[1rem]  text-center py-1'><button>Login</button></Link>
            <Link to="/signup" className='loginbtn w-[12%] max-sm:w-full max-sm:text-[1rem] max-sm:px-4   text-center py-1 '><button>Sign-Up</button></Link>

            

        </div>
        
      
    </div>
  )
}

export default Home
