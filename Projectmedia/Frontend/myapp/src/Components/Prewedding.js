import React, { useEffect, useState } from 'react'
import Prewedding1 from './Prewedding1'

const Prewedding = () => {
    const [preWedding,setPreWedding]=useState([])
                useEffect(()=>{
                    const fetchPost=async()=>{
                        try{
                        const response=await fetch('http://localhost:3500/api/v1/'+'PreWed')
                        const preWedding=await response.json()
                        console.log(preWedding.PreWed)
                        setPreWedding(preWedding.PreWed)
                        
                        }
                        catch(err){
                            console.log(err)
                        }
                    }
                  (async()=> fetchPost()) () 
                },[])
  return (
    <div class='container'>
        {/* <div class='pre1-div'></div> */}
        <img src='./Images/Media/pre1.jpg' alt='' class='pre1-div'/>
        <h1 class='baby-h mt-5'>Joyful Family to Cherish Forever</h1>
        <div class='row'>
       {
       preWedding.map((preWedding)=>(
         <Prewedding1 preWedding={preWedding}/>
       ))
    }
    </div>
    </div>
  )
}

export default Prewedding