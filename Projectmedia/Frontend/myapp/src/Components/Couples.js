import React, { useEffect, useState } from 'react'
import Couples1 from './Couples1'

const Baby = () => {
   const [couples,setCouples]=useState([])
    useEffect(()=>{
        const fetchPost=async()=>{
            try{
            const response=await fetch('http://localhost:3500/api/v1/'+'Couples')
            const couples=await response.json()
            console.log(couples.Couples)
            setCouples(couples.Couples)
            
            }
            catch(err){
                console.log(err)
            }
        }
      (async()=> fetchPost()) () 
    },[])
  return (
    <div class='container'>
        {/* <div class='couples1-div'></div> */}
        <img src='./Images/Media/couples1.jpg' alt='' class='couples1-div'/>
        <h1 class='baby-h mt-5'>Joyful Couples to Cherish Forever</h1>
        <div class='row'>
       {
       couples.map((couples)=>(
         <Couples1 couples={couples}/>
       ))
    }
    </div>
    </div>
  )
}

export default Baby