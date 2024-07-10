import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, formState: {errors},} = useForm()
  const navigateTo = useNavigate()
  const tesSubmit = (data) => {
    if(data.username == "admin" && data.password == 1){
      navigateTo('/')
    }
  }
  return (
  <>
    <div className="card w-85 mx-3">
    <div className="card-body">
  <form onSubmit={handleSubmit(tesSubmit)} className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Username</label>
    <input type="username" className="form-control" {...register('username', {required: 'required'})}/>
    {errors.username?.message}
  </div>
  <div className="col-md-6">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" {...register('password')}/>
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

export default Login