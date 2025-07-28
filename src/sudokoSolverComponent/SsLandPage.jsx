import React from 'react'
import { Router } from 'react-router-dom'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './SsLandPage.css';
import SsGamePage from './SsGamePage';

const SsLandPage = () => {

  return (
    <div className='w-full min-h-screen bg-[url("./ss.webp")] bg-cover flex justify-center items-center border '>

    <div className='flex flex-col justify-center items-center w-full h-full gap-3'>
      <h1 className='text-4xl text-center text-slate-100 mb-10 font-extrabold tracking-widest'>SUDOKU GAME</h1>
      
      <div className='border-2 p-5  w-[500px] shadow-xl shadow-slate-100 backdrop-blur-md bg-white/40 rounded-2xl'>
          <h1 className='text-2xl font-bold text-shadow'>RULES TO PLAY SUDOKU</h1>
          <p><span className='font-bold'>1.</span> Each of the digits 1-9 must occur exactly once in each row.</p>
          <p><span className='font-bold'>2.</span>  Each of the digits 1-9 must occur exactly once in each column.</p>
          <p><span className='font-bold'>3.</span>  Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.</p>
      </div>
      
      <div className='flex justify-center items-center w-full mt-5'>
        <Link to='/SsGame'>
          <button className='border-2 bg-slate-400 rounded-2xl px-5 py-2 hover:bg-slate-200 '>PLAY</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default SsLandPage
