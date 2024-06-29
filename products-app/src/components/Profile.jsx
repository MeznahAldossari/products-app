import React, { useState,useEffect  } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import close from '../assets/close.png'
import correct from '../assets/check.png'
function Profile() {
    const {id} = useParams()
    const [user,setUser] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        UserDetails()
    },[])

    const UserDetails = () =>{
        axios.get('https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users')

        .then(function (response) {
        // handle success
        console.log(response);
        const getDatas = JSON.parse(localStorage.getItem("userLogin"))

        if(getDatas){
            let findUser = response.data.find((user)=>user.id === id)
            
            if(findUser){
                setUser({"id":findUser.id, "name":findUser.name, "email": findUser.email,"password": findUser.password,"role":findUser.role, "logo": findUser.logo })
                    
                    
            }

        }
     
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
        });

    }

    const deleteUser = (id)=>{
        axios.delete(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${id}`).then(()=>{
            navigate("/")
        })
        
    }
    const updatedLogo =(e)=>{
        setUser({ ...user, "logo": e.target.value })
        
        
    }


    const updateProfile=(id)=>{
        if(user.name !=='' && user.email !=='' && user.password !=='' ){
            axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${id}`,{
                "name":user.name,
                "email":user.email,
                "password":user.password,
                "role":user.role,
                "logo":user.logo
            }).then(()=>{
                
                localStorage.setItem("logo", user.logo)
                // navigate(0)
                
            })
        }
      

    }

    

  return (
    <div className='w-full h-screen bg-[#edeff1]'>
         <div>
         <Nav/>
         </div>
         <div className='w-full flex flex-col'>

        <h2 className='text-[1.5rem] ml-8 mt-6 font-medium  text-[#604CC3]'>Profile Details</h2>

        <hr className="border-gray-300 my-4 w-full" />
        </div>         
        <div className='flex justify-center items-center max-sm:h-screen bg-[#edeff1]'>
    
        <div className="card signDiv bg-base-100 flex flex-col w-[50%] mt-4 h-auto  items-center justify-center shadow-xl max-sm:w-[90%]">
        <div className='flex w-full max-sm:flex-col max-sm:justify-center max-sm:items-center'>

            <div className='w-[30%] max-sm:w-full flex max-sm:flex-col justify-center items-center pl-4 max-sm:pl-0 rounded-lg'>
                <img className='mt-12 mb-6 ml-8 max-sm:ml-0 max-sm:mt-6 max-sm:mb-4 w-32 h-32 rounded-full max-sm:w-[45%] inline' src={user.logo} alt={user.name} />
            </div>
            
            <div className='flex flex-col ml-12 max-sm:ml-0 w-[60%] max-sm:w-[90%] max-sm:items-center '>
                <input value={user.logo} placeholder="Logo" className='mt-10 max-sm:mt-4 text-[1.2rem] font-medium text-[#510c95]' onChange={(e)=>{setUser({ ...user, "logo": e.target.value })}} />
                <input value={user.name} placeholder="username" className='mt-2 text-[1.2rem] font-medium text-[#510c95]' onChange={(e) => { setUser({ ...user, "name": e.target.value }) }} required />
                <input value={user.email} placeholder="email" className='mt-2 text-[1.2rem] text-md font-medium text-[#510c95]' onChange={(e) => { setUser({ ...user, "email": e.target.value }) }} required />
                <input value={user.password} placeholder="password" className='mt-2 text-[1.2rem] text-md font-medium text-[#510c95]' onChange={(e) => { setUser({ ...user, "password": e.target.value }) }} required />
            </div>
            
        </div>

        <div className='flex gap-6 justify-end w-full mb-4 py-6 mr-12 max-sm:mr-0 max-sm:justify-center max-sm:py-4 max-sm:mt-4'>
            <label htmlFor="my_modal_7" className='btns text-center py-2 max-sm:py-1 bg-[#FF7F3E] text-white' onClick={() => { updateProfile(user.id) }}>Update</label>
            <button className='btns py-2 max-sm:py-1 bg-[#FF7F3E] text-center text-white' onClick={() => { deleteUser(id) }}>Delete</button>
        </div>



             
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box relative">
                <img src={close} className='w-[1vw] h-[3vh] absolute top-4 right-4 cursor-pointer' onClick={() => document.getElementById('my_modal_7').checked = false}></img>
                <img src={correct} className='inline'></img>
                <span className="py-4 pl-4">updated successfully.</span>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
        </div>

      
    </div>
    </div>
  )
}

export default Profile
