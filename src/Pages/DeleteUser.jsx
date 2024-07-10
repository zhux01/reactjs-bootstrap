import React, {useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const DeleteUser = () => {
  const {id} = useParams()
  const deleted = async () => {
    await axios.delete(`http://localhost:3000/posts/${id}`)
    console.log(`Id: ${id} sudah terhapus`)
  }
  useEffect(()=>{
    deleted()
  },[])
  return (
    <>
    
    </>
  )
}

export default DeleteUser