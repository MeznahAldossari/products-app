import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from './Nav'
import axios from 'axios'
function Mainhome() {
    const [arr, setArr] = useState([])
    const {id} = useParams()
    const [role, setRole] = useState('')
    

    useEffect(()=>{
        
        axios.get('https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users')

        .then(function (response) {
        // handle success
        
        let findUser = response.data.find((user)=>user.id === id)
            if(findUser){
                setRole(findUser.role)
              
            }
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
        });
        getProducts()
    },[])

    const getProducts = ()=>{
        axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')

        .then(function (response) {
        // handle success
        const getData = JSON.parse(localStorage.getItem("userLogin"))
        if(getData){
            setArr(response.data)
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
    const deleteItem = (id)=>{
        axios.delete(`https://665736969f970b3b36c8658a.mockapi.io/Products/${id}`).then((res)=>{
            alert("Deleted")
            setArr(arr.filter((e)=> e.id !== id))
        }
           
          
            
        )
    }

   
    

  return (
    <div className='bg-[#edeff1] '>
        <div>
            <Nav/>
        </div>
        <div className='w-full flex flex-col'>

        <h2 className='text-[1.5rem] ml-8 mt-6 font-medium  text-[#604CC3]'>All Products</h2>
       
        <hr className="border-gray-300 my-4 w-full" />
        </div>
        
        {role === 'Admin' ? (
    <div className='w-full mt-6 grid grid-cols-4 gap-6 px-12 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:h-auto '>
        {arr.map((character, index) => (
            <div className="card bg-base-100 flex flex-col items-center justify-center shadow-xl h-auto" key={index}>
                <img className='pt-6 w-[70%] max-sm:w-[45%]' src={character.image} alt={character.name} />

                <p className='my-4 text-center text-md font-medium text-[#604CC3]'>{character.product}</p>
                <div className='flex gap-6 justify-center w-full mb-4 '>
                {/* <Link to={`/productInfo/${character.id}`}>
                    <button className='btns py-1 bg-[#FF7F3E]'>View Details</button>
                    </Link> */}
                    <button className='btns py-1 bg-[#FF7F3E]' onClick={()=>{deleteItem(character.id)}}>Delete</button>
                </div>
            </div>
        ))}
    </div>
) : (
    <div className='w-full mt-6 grid grid-cols-4 gap-6 px-12 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:h-auto '>
        {arr.map((character, index) => (
            <div className="card bg-base-100 flex flex-col items-center justify-center shadow-xl h-auto" key={index}>
                <img className='pt-6 w-[60%] max-sm:w-[45%]' src={character.image} alt={character.name} />

                <p className='my-6 text-center text-md font-medium text-[#510c95]'>{character.product}</p>
                <div className='flex gap-6 justify-center w-full mb-4 '>
                    <Link to={`/productInfo/${character.id}`}>
                    <button className='btns py-1 bg-[#FF7F3E]'>View Details</button>
                    </Link>
                    
                </div>
            </div>
        ))}
    </div>
)}
    
      
    </div>
  )
}

export default Mainhome
