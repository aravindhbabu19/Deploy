import React, { useEffect, useState } from 'react'
import Family1 from './Family1'

const Family = () => {
    const [family,setFamily]=useState([])
        useEffect(()=>{
            const fetchPost=async()=>{
                try{
                const response=await fetch('http://localhost:3500/api/v1/'+'Family')
                const family=await response.json()
                console.log(family.Family)
                setFamily(family.Family)
                
                }
                catch(err){
                    console.log(err)
                }
            }
          (async()=> fetchPost()) () 
        },[])
  return (
    <div class='container'>
        {/* <div class='family1-div'></div> */}
        <img src='./Images/Media/family1.jpg' alt='' class='family1-div'/>
        <h1 class='baby-h mt-5'>Joyful Family to Cherish Forever</h1>
        <div class='row'>
       {
       family.map((family)=>(
         <Family1 family={family}/>
       ))
    }
    </div>
    </div>
  )
}

export default Family