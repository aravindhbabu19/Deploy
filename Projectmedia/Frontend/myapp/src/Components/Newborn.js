import React, { useEffect, useState } from 'react'
import Newborn1 from './Newborn1'

const Newborn = () => {
    const [newBorn,setNewBorn]=useState([])
                useEffect(()=>{
                    const fetchPost=async()=>{
                        try{
                        const response=await fetch('https://rsmedia1.onrender.com/api/v1/New')
                        const newBorn=await response.json()
                        console.log(newBorn.New)
                        setNewBorn(newBorn.New)
                        
                        }
                        catch(err){
                            console.log(err)
                        }
                    }
                  (async()=> fetchPost()) () 
                },[])
  return (
    <div>
        <div class='container'>
        {/* <div class='new1-div'></div> */}
        <img src='./Images/Media/new1.jpg' alt='' class='new1-div'/>
        <h1 class='baby-h mt-5'>Joyful Family to Cherish Forever</h1>
        <div class='row'>
       {
       newBorn.map((newBorn)=>(
         <Newborn1 newBorn={newBorn}/>
       ))
    }
    </div>
    </div>
    </div>
  )
}

export default Newborn
