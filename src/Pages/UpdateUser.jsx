import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'

const Update = () => {
  
  const { id } = useParams()
  const [load,setLoad] = useState(true)
  const navigate = useNavigate()
  const { register, setValue, handleSubmit,formState: {errors},} = useForm()
  useEffect(()=>{
    setTimeout(()=>{
    setLoad(false)
    },2000)
    getUser()
  },[])
  const getUser = async () =>{
    const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setValue('title',response.data.title)
    setValue('body',response.data.body)
  }
  
  const postSubmit = async (data) => {
    try{
    await axios.get('http://localhost:3000/posts')
    }catch(error){
      console.log(error)
    }
  }
  return (
  <>
  {load?<Skeleton/>:
    <div className="card w-85 mx-3">
    <div className="card-body">
    <form onSubmit={handleSubmit(postSubmit)} className="row g-3">
    <div className="col-md-6">
    <label className="form-label">Title</label>
    <input type="text" className="form-control" {...register('title')} />
  </div>
  <div className="col-md-6">
    <label className="form-label">Body</label>
    <input className="form-control" {...register('body')}/>
  </div>
  <div className="d-grid gap-2 my-2">
  <button className="btn btn-primary" type="submit">Login</button>
</div>
  </form>
  </div>
</div>  
  }
  </>
  )
}

export default Update