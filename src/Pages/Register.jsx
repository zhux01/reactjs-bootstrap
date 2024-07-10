import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  
  const navigate = useNavigate()
  const { register, handleSubmit,formState: {errors},} = useForm()
  
  const postSubmit = async (data) => {
    try{
    await axios.post('http://localhost:3000/posts',{
      username: data.username,
      names: data.names
    })
    }catch(error){
      console.log(error)
    }
  }
  return (
  <>
    <div className="card w-85 mx-3">
    <div className="card-body">
    <form onSubmit={handleSubmit(postSubmit)} className="row g-3">
    <div className="col-md-6">
    <label className="form-label">Username</label>
    <input type="text" className="form-control" {...register('username')} />
  </div>
  <div className="col-md-6">
    <label className="form-label">Name</label>
    <input className="form-control" {...register('names')}/>
  </div>
  <div className="d-grid gap-2 my-2">
  <button className="btn btn-primary" type="submit">Login</button>
</div>
  </form>
  </div>
</div>  
  </>
  )
}

export default Register