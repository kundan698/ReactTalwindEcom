import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export let ContextCount = createContext()
  


export default function ContextApi({children}) {
  const tokenValue = Cookies.get('token');
  const TokensValues = Cookies.get('GetValue')
  let [register,setRegister]= useState(TokensValues ?? '')
    let[token,setToken] = useState(tokenValue ?? '')
    
   
    let [Cart,setCart]=useState(JSON.parse(localStorage.getItem('CART'))?? [])
   
   
    
    let obj={Cart,setCart,token,setToken,register,setRegister}
    useEffect(()=>{
      localStorage.setItem('CART',JSON.stringify(Cart))
    },[Cart])

    useEffect(()=>{
      Cookies.set('token',token)

    },[token])

    useEffect(()=>{
         Cookies.set('GetValue',register)
    },[register])

   
    
  return (
    <div>
        <ContextCount.Provider value={obj}>
            {children}
        </ContextCount.Provider>
      
      
        
       

    </div>
  )
}
