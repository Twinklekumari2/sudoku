import React from 'react'
import {useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  function clickHandleSudoku(){
    navigate('/SsLandPage');
  }
  function clickHandleTic(){
    navigate('/ticGame');
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-[url("/ss.webp")] bg-cover'>
      <h2 className='font-bold text-2xl text-neutral-300'>Are you interested in playing sudoku ?&#x1F525; </h2>
      <div className='flex justify-around w-[500px] mt-5'>
        <button className='text-2xl font-extrabold px-5 py-2 border rounded-2xl cursor-pointer text-gray-300' onClick={clickHandleSudoku}>
        Yes &#x1F3AE;
      </button>
      <button className='text-2xl font-extrabold px-5 py-2 border rounded-2xl cursor-pointer text-gray-300' onClick={() => toast.warn(`You may try once \u{1F62D}`)}>
        No &#x1F494;
      </button>

      </div>
      

    </div>
  )
}

export default Home
