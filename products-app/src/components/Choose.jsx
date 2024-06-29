import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import UserLogo from '../assets/user.png'
import { useNavigate } from 'react-router-dom'


function Choose() {
    const [logo, setLogo] = useState("data:image/png;base64,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")
    const navigate = useNavigate()

  const SignUp = () =>{
    const getData = JSON.parse(localStorage.getItem("user"))
    axios.post("https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users",{
                name: getData.name,
                email:getData.email,
                password:getData.password,
                role: getData.role,
                logo:logo
            }).then((res)=>{

                console.log(res.data)
                
                navigate('/login')

            })

  }
  return (
    <div className='h-screen bg-[#edeff1]'>
        <div>
            <Nav/>
        </div>
        <div className='flex justify-center h-screen bg-[#edeff1] '>
        
        <div className='mt-6 signDiv max-sm:mt-10 max-sm:w-[95%] bg-white h-[70vh] w-[30%] flex flex-col  items-center'>
            <div className='h-full mt-[10%] flex flex-col items-center'>
                <img src={logo} className='w-34 h-32 mb-6 mt-6'></img>
                <div className='flex mx-4 max-sm:mx-1 mt-8 justify-center items-center'>
                <p className='w-[9vw] max-sm:w-full max-sm:text-[0.9rem]'>Choose Photo: </p>
                <input type='text' placeholder='Logo URL' required className='InputUrl max-sm:w-[40vw] max-sm:ml-2' onChange={((e)=>{setLogo(e.target.value)})}></input>


                </div>
        


            </div>
            <div className="w-full h-full  flex  items-center">
            <button className="loginbtn1 py-1 px-6 ml-10 text-[1rem]" onClick={SignUp}>Sign Up</button>
            </div>
    
       
        </div>
        </div>
      
    </div>
  )
}

export default Choose
