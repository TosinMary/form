import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const App = () =>  {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your fullName is required"),
    age: yup.number().positive().integer().min(18).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required()
  })
  const {register, handleSubmit,formState: {errors}, reset} = useForm({
    resolver: yupResolver(schema),
    
  });
  const onSubmit = (data) => {
    console.log({data});
    alert("Sign in completed");
    reset();
  }
  return (
    <div className="App">
      <section className='container flex justify-content-center align-items-center mt-2 text-white w-50'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className='text-center'>Sign In</h3>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("fullName")}/>
    <p className='text-danger'>{errors.fullName?.message} </p>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("age")} />
    <p className='text-danger'>{errors.age?.message} </p>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  {...register("email")} />
    <p className='text-danger'>{errors.email?.message} </p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"   {...register("password")}/>
    <p className='text-danger'>{errors.password?.message} </p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"   {...register("confirmPassword")}/>
    <p className='text-danger'>{errors.confirmPassword?.message} </p>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</section>
    </div>
  );
}

export default App;
