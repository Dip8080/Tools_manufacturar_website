import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loadeing/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, googleUser, g_loading,  g_error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{
         console.log(data)
         signInWithEmailAndPassword(data.email,data.password)
        };
        const nevigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let ErrorSignin;
        if(loading || g_loading){
            return <Loading></Loading>
        }
        if(error ||g_error){
            ErrorSignin = <p className='textred-500 '>{error?.message || g_error}</p>;

        }
        if(user || googleUser){
            nevigate(from, { replace: true });
        }
    return (
        <div >
            <h2 className='text-center text-3xl'>please login </h2>
        <div className='flex h-screen justify-center items-center'>
        <div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">

  <form onSubmit={handleSubmit(onSubmit)}>
      {/* daisey */}
      <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">email :</span>
  </label>
  <input 
  type="email" 
  placeholder="enter your email address" 
  class="input input-bordered w-full max-w-xs"
  {...register("email", { required: true })}
  />
 <label class="label">
  {errors.email?.type === 'required' && "email is required"}
  </label>
  <label class="label">
    <span class="label-text">password :</span>
  </label>
  <input 
  type="password" 
  placeholder="enter password" 
  class="input input-bordered w-full max-w-xs"
  {...register("password", { required: true })}
  />
 <label class="label">
  {errors.password?.type === 'required' && "password is required"}
  </label>
</div>
      {/* //////////// */}
      {ErrorSignin}
      <input  class="btn w-full btn-success input-bordered" type="submit" value='Login' />
    </form>
    <p>new here <Link to='/register' className='text-primary'>please register</Link></p>
    
    <div class="card-actions justify-end">
    <div class="divider">OR</div>
    </div>
    <div class="card-actions justify-end">
      <button onClick={() => signInWithGoogle()} class="btn  btn-outline btn-secondary">sign in with google</button>
    </div>

  </div>
</div>
</div>
        </div>
    );
};

export default Login;