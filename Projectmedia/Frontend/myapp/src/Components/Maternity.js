import React, { useEffect, useState } from 'react'
import Maternity1 from './Maternity1'

const Maternity = () => {
    const [maternity,setMaternity]=useState([])
            useEffect(()=>{
                const fetchPost=async()=>{
                    try{
                    const response=await fetch('http://localhost:3500/api/v1/Maternity')
                    const maternity=await response.json()
                    console.log(maternity.Maternity)
                    setMaternity(maternity.Maternity)
                    
                    }
                    catch(err){
                        console.log(err)
                    }
                }
              (async()=> fetchPost()) () 
            },[])
  return (
    <div class='container'>
        {/* <div class='maternity-div'></div> */}
        <img src='./Images/Media/maternity7.jpg' alt='' class='maternity-div'/>
        <h1 class='baby-h mt-5'>Joyful Family to Cherish Forever</h1>
        <div class='row'>
       {
       maternity.map((maternity)=>(
         <Maternity1 maternity={maternity}/>
       ))
    }
    </div>
    </div>
  )
}

export default Maternity
