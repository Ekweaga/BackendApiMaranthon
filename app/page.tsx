"use client"

import Image from 'next/image'
import {useState,useEffect} from "react"

export default function Home() {
  const [image,setImage] = useState()
  const handleSubmit = (e:any)=>{
  console.log(e.target.files[0])

  }
  return (
    <>
    <div className="flex items-center justify-center">
    <input type="file" onChange={handleSubmit}/>
    </div>
    
    </>
  )
}
