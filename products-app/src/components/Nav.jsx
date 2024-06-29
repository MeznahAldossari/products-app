import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import main from "../assets/delivery.png"
import { useNavigate } from 'react-router-dom'
function Nav() {
  const {id} = useParams()
  const [img, setImage] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const getDatas = JSON.parse(localStorage.getItem("userLogin"))
    const logo = localStorage.getItem("logo");
    console.log(logo)
    if (logo && getDatas) {
        setImage(logo);
    }

  }, []);
  let removeUser = ()=>{

    localStorage.removeItem("userLogin")
    navigate("/")

  }
 
  return (
    <div className='w-full'>
      <nav className='w-full flex justify-center items-center h-[12vh] bg-[#604CC3]'>
      { id ? (
  <div className='w-[95%] flex justify-between items-center h-full'>
    <div className='flex'>
      {/* <Link to={`/profile/${id}`}> */}
        <img src={img} className='w-14 mr-24 rounded-full items-end cursor-pointer' onClick={viewProfile} alt='Profile'></img>
      {/* </Link> */}
    </div>

    <div className='text-white flex gap-6 max-sm:gap-4 items-center'>
      <Link to={`/mainhome/${id}`}>
        <p className='text-[1.2rem] max-sm:text-[1rem]'>Home</p>
      </Link>

      
        <p className='text-[1.2rem] max-sm:text-[1rem] cursor-pointer' onClick={removeUser}>Logout</p>
      
    </div>
  </div>
) : (
  <div className='w-[95%] flex justify-between items-center h-full'>
    <div className='flex'>
      <Link to={`/profile/${id}`}>
        <img src={main} className='w-14 mr-24 rounded-full items-end' alt='Profile'></img>
      </Link>
    </div>

   
   
  </div>
)}

      </nav>
    </div>
  )
}

export default Nav
