import React, { useEffect, useState } from 'react'
import Matrimonial1 from './Matrimonial1'

const Matrimonial = () => {
     const [matrimonial,setMatrimonial]=useState([])
                useEffect(()=>{
                    const fetchPost=async()=>{
                        try{
                        const response=await fetch('http://localhost:3500/api/v1/Matri')
                        const matrimonial=await response.json()
                        console.log(matrimonial.Matri)
                        setMatrimonial(matrimonial.Matri)
                        
                        }
                        catch(err){
                            console.log(err)
                        }
                    }
                  (async()=> fetchPost()) () 
                },[])
  return (
    <div class='container'>
        {/* <div class='matri1-div'></div> */}
        <img src='./Images/Media/matri3.jpg' alt='' class='matri1-div'/>
        <h1 class='baby-h mt-5'>Joyful Family to Cherish Forever</h1>
        <div class='row'>
       {
       matrimonial.map((matrimonial)=>(
         <Matrimonial1 matrimonial={matrimonial}/>
       ))
    }
    </div>
    </div>
  )
}

export default Matrimonial
