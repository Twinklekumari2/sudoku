import React from 'react'
import SsLandPage from './sudokoSolverComponent/SsLandPage'
import SsGamePage from './sudokoSolverComponent/SsGamePage';
import './App.css';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const App = () => {
  const route = createBrowserRouter(
    [
        {
           path: '/',
           element: <Home/>
        },
        {
          path: '/SsLAndPage',
          element: <SsLandPage/>
        },
        {
            path: '/SsGame',
            element: <SsGamePage/>
        },

    ]
);
  return (
    <div>
      <ToastContainer 
      position="top-right"
      autoClose={1000}
      theme="colored"
    />
      <RouterProvider router = {route}/>
    </div>
  )
}

export default App
