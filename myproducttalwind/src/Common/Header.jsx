import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCount } from '../Contest/ContextApi'
import Overlay from '../Modal/Overlay'
import Cart from './Cart'
import { FaCartShopping } from "react-icons/fa6";


export default function Header() {

 let {Cart,token,setToken,register,setRegister}=useContext(ContextCount)
 
   
 
   
  return (
    <>


   
      
      

<nav class="   sticky top-0 z-20 shadow-lg bg-blue-950 text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://www.jiomart.com/assets/ds2web/images/Jiomart-logo-ds2.0.svg?v=24" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mb-2">JioMart</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 text-purple-600 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" >
        <li>
          <a href='' class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" ></a>
        </li>
        <li className=''>
          <Link to={'/cart'} class="block py-2 relative px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[25px] text-white"><FaCartShopping /> </Link>
          <div className='absolute bg-[red] h-[25px] w-[25px] top-1 right-[315px] rounded-[50%] text-white text-center'>{Cart.length}</div>
          </li>
          {(register!==''&& register!==undefined) ?  
           <>
            <li>
          <Link to={'/Registration-form'} class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=>setRegister('')}>Registered</Link>
        </li>
           </>
           :
          <>
           <li>
           <Link to={'/Registration-form'} class="block py-2 px-3  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Registration</Link>
         </li>
        
         
          
          </>

          }
        
        {(token!=='' && token!==undefined) ? 
          
          <>
            <li>
          <Link to={'/login'} class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=>setToken('')}>LogOut</Link>
        </li>
        
          </>
          :
          <>
          
          <li>
          <Link to={'/login'} class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
        </li>
        {/* <li>
          <Link to={'/Registration-form'} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Registration</Link>
        </li> */}
          </>
        }
         
          
        
       
        <li>
          <Link to={'/Contact-us'} class="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
 
</nav>






    </>
  )
}
