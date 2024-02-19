import React from 'react'
import FormComponent from './FormComponent'
import './AuthComponent.css'
import { Link } from 'react-router-dom'

const AuthComponent = () => {
  // change css
  return (
    <div className="Auth h-screen overflow-hidden">
      <div className='top-0 left-0 mt-4'>
        <strong className="m-2 p-2 bg-green-500 rounded-lg" >
          <Link to={'/'}> e-Pay</Link>
         </strong>
        {/* <i className="fab fa-typo3"></i> */}
      </div>
      <div className="AuthComponent flex h-4/5">
        <div className="left w-1/2 p-4">
          <h1 className="text-8xl font-bold">simple fast & secure</h1>
        </div>
        <div className="right items-center w-1/2 p-4 overflow-y-auto scrollbar-hide">
          <FormComponent/>
        </div>
      </div>
      <footer className="bottom-0 mt-6 w-full text-center py-4 bg-black text-sm font-light text-gray-500 dark:text-gray-400">Made with Love India</footer>    
    </div>

  )
}

export default AuthComponent


