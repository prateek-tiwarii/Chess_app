import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  return (
    <div className='flex justify-center align-middle mt-16 gap-16'>

      <div>
        <img src='/pieces.jpg' alt='reload ' className='h-[22rem] w-[35rem] rounded-lg border border-whit md:w-auto'/>
      </div>

      <div className='flex flex-col justify-evenly'>
        <p className='text-white font-semibold text-4xl'>Play Chess online on #2 site!!</p>

        <div className='justify-center mx-auto'>

        <button className='text-white font-medium text-lg bg-green-800 border border-black rounded-lg p-4' onClick={() => navigate("/game")}>Play Now</button>
        </div>
      </div>

    </div>
  )
}

export default Home