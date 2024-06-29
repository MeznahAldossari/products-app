import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function ProductInfo() {
    const {id} = useParams()
    const [arr, setArr] = useState({})

    useEffect(()=>{
        getProducts()
    })

    const getProducts = ()=>{
        axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')

        .then(function (response) {
        // handle success
        let findUser = response.data.find((user)=>user.id === id)
        if(findUser){
            setArr({"image": findUser.image,"product": findUser.product, "price": findUser.price, "feature": findUser.feature})
          
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

  return (
    <div className='h-screen bg-[#edeff1] '>
         <div>
            <Nav/>

        </div>
        <div className='flex flex-col items-center h-auto bg-[#edeff1]'>
        <div className='w-full flex flex-col '>

            <h2 className='text-[1.5rem] ml-12 mt-6 font-medium  text-[#604CC3]'>Product Details</h2>

            <hr className="border-gray-300 my-4 w-full" />
        </div>
        <div className=' mt-4 bg-white signDiv h-auto w-[50%] max-sm:w-[95%] max-sm:flex-row flex flex-col   items-center'>
            <div>
            <div className='h-[50%]  mt-[24] flex max-sm:flex-col  items-center w-full'>
                <div className='flex justify-center items-center'>
                <img src={arr.image} className=' reginput mt-6 mb-12 w-[50%]'></img>

                </div>
                <div className='pr-12'>
                <p className='pl-2  mt-4  '><b className='mr-2'>Product Name:</b>{arr.product}</p>
                <p className='pl-2  mt-4 '><b className='mr-2'>Product Price:</b>{arr.price} SAR</p>
                <p className='pl-2  mt-4 '><b className='mr-2'>Product Feature:</b>{arr.feature}</p>

                </div>
           
            {/* <Link to={`/mainhome/${id}`}>
            <button  className="loginbtn1 mt-10 mb-10 px-14 py-1 text-lg" >Go Back</button>

            </Link> */}
            

            
           
            </div>
            <div className='flex  ml-6 '>
            <Link to={`/mainhome/${id}`}>
            <button  className="loginbtn1 mt-4 mb-4 px-6 py-1 text-sm" >Go Back</button>

            </Link>

            </div>
            </div>

        </div>
        </div>
      
    </div>
  )
}

export default ProductInfo
