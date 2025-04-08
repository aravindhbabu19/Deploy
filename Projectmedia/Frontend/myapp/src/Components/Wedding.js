import React, { useEffect, useState } from 'react'
import Wedding1 from './Wedding1'

const Wedding = () => {
    const [wedding,setWedding]=useState([])
                    useEffect(()=>{
                        const fetchPost=async()=>{
                            try{
                            const response=await fetch('https://rsmedia1.onrender.com/api/v1/Wed')
                            const wedding=await response.json()
                            console.log(wedding.Wed)
                            setWedding(wedding.Wed)
                            
                            }
                            catch(err){
                                console.log(err)
                            }
                        }
                      (async()=> fetchPost()) () 
                    },[])
  return (
    <div class='container'>
        {/* <div class='wed1-div'></div> */}
        <img src='./Images/Media/wed6.jpg' alt='' class='wed1-div'/>
        <h1 class='baby-h mt-5'>Joyful Family to Cherish Forever</h1>
        <div class='row'>
       {
       wedding.map((wedding)=>(
         <Wedding1 wedding={wedding}/>
       ))
    }
    </div>
    </div>
  )
}

export default Wedding
