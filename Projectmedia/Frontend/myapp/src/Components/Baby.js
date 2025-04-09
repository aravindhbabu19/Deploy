import React, { useEffect, useState } from 'react'
import Baby1 from './Baby1'

const Baby = () => {
   const [baby,setBaby]=useState([])
    useEffect(()=>{
        const fetchPost=async()=>{
            try{
            const response = await fetch('https://deploy-1-ww16.onrender.com/api/v1/Baby',{ mode: 'no-cors'})
            const baby=await response.json()
            console.log(baby.Baby)
            setBaby(baby.Baby)
            
            }
            catch(err){
                console.log(err)
            }
        }
      (async()=> fetchPost()) () 
    },[])
  return (
    <div class='container'>
         {/* <div class='baby-div'></div> */}
        <img src='./Images/Media/baby2.jpg' alt='' class='baby-div'/>
        <h1 class='baby-h mt-5'>Joyful Childhood to Cherish Forever</h1>
        <div class='row'>
       {
       baby.map((baby)=>(
         <Baby1 baby={baby} />
       ))
    }
    </div>
    </div>
  )
}

export default Baby
