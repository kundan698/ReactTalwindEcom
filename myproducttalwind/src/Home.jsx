import React, { useContext, useEffect, useState } from 'react'
import Header from './Common/Header'
import axios from 'axios'
import { ContextCount } from './Contest/ContextApi'
import Overlay from './Modal/Overlay'
import { Link } from 'react-router-dom'
import Responsive from './CarouselFolder/Carousel1'




export default function Home() {
    let [getData,setData]=useState([])
  let myfunc = ()=>{
    axios.get('https://dummyjson.com/products')
    .then((ress)=>{
      console.log(ress)
     setData(ress.data.products)

    })
  }
 useEffect(()=>{
    myfunc()
 },[])

 let {Cart,setCart}=useContext(ContextCount)
           

  return (
      <>
      <Header/>
      <section className='w-[100%]'>
        <div className="  mx-auto max-w-[1320px] p-4 gap-3">
          <Responsive/>

          <h3 className='text-[40px] pt-7 font-bold text-blue-950 m-2'>Shop From top Category</h3>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722449121_ENGLISH_DESKTOP.jpg?im=Resize=(2368,400)" alt=""  className='rounded'/>
          <img src="https://mercury.akamaized.net/i/cc8d9aed6a1412ac7454ce7c4ce47c50_281069_0.jpg" alt=""  className='rounded mt-4'/>

        </div>

      </section>
      <section className='max-w-[1320px] mx-auto grid lg:grid-cols-4 gap-3 grid-cols-1'>
        {getData.map((items,index)=>{
          let{id,thumbnail,brand,category}=items
             return(
              <ProductData pData={items} key={index}/>
                
             )
        })}
          
      </section>

      
      </>
  )
}
function ProductData({pData}){
  let {Cart,setCart}=useContext(ContextCount)
  let{id,thumbnail,brand,category,price,title}=pData
  

  let checkProduct = Cart.filter((v,i)=>v.id==id)

  let [qnty,setQnty]=useState(checkProduct.length==0 ? 1 : checkProduct[0].Qty)
  
  
 
   
  let addtoCart=()=>{

    if(checkProduct.length==0){

      let CartItems={
        Qty:1,
        Price:price,
        image:thumbnail,
        Brand:brand,
        Category:category,
        Title:title,
        id:id
      }
      setCart([...Cart,CartItems])

    }
    else{
     /* Product Update */
     

    }
   
   
  }
    useEffect(()=>{
      if(checkProduct.length==1){
        if(qnty>1){
        let filterProductData = Cart.filter((value)=>{
          if(value.id==id){
            value['Qty']=qnty
          }
          return value;
        })
      setCart(filterProductData)
      }
      else{
         let filterProductData = Cart.filter((value)=>value.id!=id)
         setCart(filterProductData)
      }
    
    }

    },[qnty])
 
  return(
               <div className='shadow-[0px_0px_10px_2px_#ccc] p-3 rounded-xl'>
                <img src={thumbnail} alt="" className='w-[200px] mx-6'/>
                <div className='flex justify-between p-4'>
                  <h5 className='font-bold'>{brand}</h5>
                 
                  <h5 className='font-bold'>{category}</h5>
                 
                </div>
                <p className='text-red-400 font-bold mx-3'><span className='line-through text-slate-400 p-2 font-normal text-[12px]'>Rs.199</span>Rs.{price} <span className='bg-[#127212b1] text-white'>50% off</span> </p>
                <p className='text-slate-950 font-bold p-3'>{title}</p>
                <div className='d-flex justify-between gap-4'>
                 {checkProduct.length==0 ?  <button onClick={addtoCart} className='bg-lime-700 font-medium text-white p-2 rounded-lg'>Add to Cart</button> : <input type="number" max={10} value={qnty} className='border border-solid border-slate-700 rounded-lg p-2 font-bold w-[100px] mx-9 ' onChange={(event)=>setQnty(event.target.value)} />}
                 
                    
                
                
               
                </div>
              </div>
  )
}

