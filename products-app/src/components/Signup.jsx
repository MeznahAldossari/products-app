import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState({})
  const [testName, setTestName] = useState(false)
  const [testEmail, setTestEmail] = useState(false)
  const [testPassword, setTestPassword] = useState(false)
  const [checkError, setCheckError] = useState([])


  const nextPage = ()=>{
    setCheckError([])
    let newArr = []

   
    if(userName.name !== '' && userName.email !== '' && userName.password !== '' && userName.role){
        let checkName = /^(.*[a-zA-Z].*){4,}$/
        let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        let checkPassword = /^\d{5}$/
        
        if(!checkName.test(userName.name)){
        
            newArr.push("The UserName Should be Contains at least 4 Letters")
           

        }

        if(!checkEmail.test(userName.email)){

            newArr.push("Please, Write Correct Email")
            
        }  
        if(!checkPassword.test(userName.password)){  

            newArr.push("The Password Should be Contain 5 Numbers")
        }
        

        if(checkPassword.test(userName.password) && checkEmail.test(userName.email) && checkName.test(userName.name)){
        //    getUserData(userName.name,userName.email)
            let obj = {
                "name": userName.name,
                "email": userName.email,
                "password": userName.password,
                "role":  userName.role
            }

            localStorage.setItem("user", JSON.stringify(obj))
            navigate("/photo")
        }
     

    }else{
        newArr.push("Please, Fill The Fields")
    }
    setCheckError(newArr)
    console.log(newArr)
  }
  
 


  return (
    <div className='h-screen bg-[#edeff1]'>
         <div>
            <Nav/>

        </div>
        <div className='flex  h-auto bg-[#edeff1]  justify-center w-full'>
        <div className=' mt-6 bg-white signDiv h-auto w-[50%] flex flex-col  items-center max-sm:w-[95%] max-sm:h-auto'>
            <p className='text-lg  text-[2.7rem] max-sm:text-[2.1rem] font-medium text-[#604CC3] mt-12'>Sign Up</p>
            <div className='h-[50%]  mt-[24] flex flex-col items-center w-full'>
            <input type="text" onChange={(e)=>{setUserName({...userName, "name": e.target.value})}} placeholder='UserName' className='pl-2 reginput mt-14 max-sm:mt-10 w-[60%] max-sm:w-[70%] '></input>
            <input type="email" onChange={(e)=>{setUserName({...userName, "email": e.target.value})}} placeholder='Email' className=' pl-2 reginput mt-2 w-[60%] max-sm:w-[70%]'></input>
            <input type="password" onChange={(e)=>{setUserName({...userName, "password": e.target.value})}} placeholder='Password' className=' pl-2 reginput mt-2 w-[60%] max-sm:w-[70%]'></input>
            
            <select className='reginput mt-2 w-[60%] pl-2 max-sm:w-[70%] ' onChange={(e)=>{setUserName({...userName, "role": e.target.value})}}>
            <optgroup>
               <option value="" className='text-[#ccc]'>Select your Role</option>
                <option value="Admin">Admin</option>
                <option value="Visitor">Visitor</option>
                </optgroup>
            </select>
           
            {/* <button htmlFor="my_modal_6" className='loginbtn1 mt-12 px-10' onClick={nextPage}>Next</button> */}
            
            <span className='mt-1 max-sm:ml-2 text-sm  w-[59%] max-sm:w-[70%] max-sm:text-[0.8rem]'>Do you already have an account?
                 <Link to={"/login"}><span className='ml-2 max-sm:text-[0.8rem] text-[#604CC3] font-medium text-sm '>Login</span></Link>
            </span>
            <label htmlFor="my_modal_6" className="cursor-pointer loginbtn1 mt-10 mb-10 px-14 py-1 text-lg" onClick={nextPage} >Next</label>
            {checkError.length > 0 && (
                    <>
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold">Warning</h3>
                                {checkError.map((e, index) => (
                                    <p className="py-2 text-black" key={index}>{e}</p>
                                ))}
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                </div>
                            </div>
                        </div>
                    </>
                )}
           
            </div>

           
            {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}
           

        </div>
       

        </div>
      
    </div>
  )
}

export default Signup
