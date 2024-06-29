import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Login() {
    const [userName, setUserName] = useState({})
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()
    const [checkError, setCheckError] = useState([])
    // const [arr, setArr] = useState([])


    // useEffect(()=>{
    //     setCheckError([])
    //     if (userName.name !== '' && userName.password !== '') {
    //         loginData();
    //     }else{

    //         setCheckError(["Your Data Not Found"]);

    //     }
    // },[])

    const loginData = () => {
        setCheckError([])
        setCheck(false)

        if (!userName.name || !userName.password) {
            setCheck(false)
            setCheckError(["Please Enter all Fields"]);
            return;
        }

        axios.get('https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users')
            .then(function (response) {
                let findUser = response.data.find((user) => user.name === userName.name && user.password === userName.password)

                if (findUser) {
                    setCheck(true)
                    localStorage.setItem("logo", findUser.logo)
                    let obj = {
                        "name": findUser.name,
                        "password": findUser.password,
                    }
                    localStorage.setItem("userLogin", JSON.stringify(obj))

                    navigate(`/mainhome/${findUser.id}`)
                } else {
                    setCheck(false)
                    setCheckError(["Make Sure to Enter correct values"]);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
  return (
    <div className='h-screen bg-[#edeff1]'>
         <div>
            <Nav/>

        </div>
        <div className='flex justify-center'>
        <div className=' mt-14 max-sm:mt-6 bg-white signDiv h-auto w-[50%] flex flex-col  items-center max-sm:w-[95%] max-sm:h-auto'>
        <p className='text-lg   text-[2.7rem] font-medium text-[#604CC3] mt-12'>Login</p>
        <div className='h-[50%]  mt-[24] flex flex-col items-center w-full'>
            <input type="text" onChange={(e)=>{setUserName({...userName, "name": e.target.value})}} placeholder='Username' className='pl-2 reginput mt-12 w-[60%] max-sm:w-[70%]'></input>
            <input type="password" onChange={(e)=>{setUserName({...userName, "password": e.target.value})}} placeholder='Password' className=' pl-2 reginput mt-4 w-[60%] max-sm:w-[70%] max-sm:mt-2'></input>
            {/* <button className='loginbtn1 mt-12 px-10' onClick={loginData}>Login</button> */}
            <span className='mt-1 max-sm:ml-2 max-sm:w-[70%] text-sm  w-[59%] max-sm:text-[0.8rem]'>Did Not Have Account?
                 <Link to={"/signup"}><span className='ml-2 max-sm:text-[0.8rem] text-[#604CC3] font-medium text-sm '>Sign Up</span></Link>
            </span>
            <label htmlFor="my_modal_6" className="cursor-pointer loginbtn1 mt-10 mb-10 px-14 py-1 text-lg" onClick={loginData}>Login</label>
            
            {checkError && (
                    <>
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold text-[#604CC3]">Warning</h3>
                                <p className="py-2 text-black">{checkError[0]}</p>
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div>
        </div>
      
    </div>
  )
}

export default Login
