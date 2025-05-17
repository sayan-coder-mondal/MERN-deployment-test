import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'

const GetData = () => {
    const [allData,setAllData]=useState([]);
    useEffect(() => {
      axios.get("/api/data")
      .then((response)=>{
        if(response.data.success){
            setAllData(response.data.data);
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    }, [])
    
  return (
    <>
    {
        allData.map((item)=>{
            return <div key={item.name} style={{ border: '2px solid black',margin:"10px",padding:"10px" }}>
                <h1>{item.name}</h1>
                <h2>{item.profession}</h2>
            </div>
        })
    }

    <div>Here we go</div>
    </>
  )
}

export default GetData