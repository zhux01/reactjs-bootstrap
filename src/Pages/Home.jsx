import Navbar from '../Component/Navbar.jsx'
import Footer from '../Component/Footer.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SkeletonLoading from '../Component/SkeletonLoading.jsx'


const Home = () => {
  const [loading,setLoading] = useState(true)
  const [loadFooter,setLoadfooter] = useState(false)
  const [users, setUsers] = useState([])
  const getUsers = async () =>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setUsers(response.data)
    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
  getUsers()
  setTimeout(()=>{
    setLoading(false)
    setLoadfooter(true)
    
  },2000)
  },[])
  return (
    <>
    <Navbar/>
    { loading? <SkeletonLoading/>: users.map((user,index)=> (
     <div key={user.id} className="card w-97 mx-2 my-2">
     <div className="card-body">
     <h5 className="card-title">{user.title}</h5>
     <p className="card-text">{user.body}</p>
     <a href={`http://localhost:5173/update/${user.id}`} className="btn btn-primary">Open</a>
     <a href={`http://localhost:5173/delete/${user.id}`} className="btn btn-primary">Delete</a>
   </div>
 </div>))}
  {loadFooter? <Footer/>:null}
   </>
  )
}
export default Home