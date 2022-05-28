import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loadeing/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const Register = () => {
    const [signInWithGoogle, googleUser, g_loading,  g_error] = useSignInWithGoogle(auth);
    const [updateProfile, User_updating, User_error] = useUpdateProfile(auth);
    const nevigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data =>{
         console.log(data)
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName : data.name});
        nevigate('/')
        };
    let ErrorSignin;
        if(loading || g_loading || User_updating){
            return <Loading></Loading>
        }
        if(error ||g_error || User_error){
            ErrorSignin = <p className='textred-500 '>{error?.message || g_error?.message 
                || User_error?.message}</p>;

        }
       
    return (
        <div >
            <h2 className='text-center text-3xl'>please register </h2>
        <div className='flex h-screen justify-center items-center'>
        <div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">

  <form onSubmit={handleSubmit(onSubmit)}>
      {/* daisey */}
      <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">name :</span>
  </label>
  <input 
  type="text" 
  placeholder="enter your name address" 
  class="input input-bordered w-full max-w-xs"
  {...register("name", { required: true })}
  />
 <label class="label">
  {errors.name?.type === 'required' && "name is required"}
  </label>
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
    <p>already have an account ? <Link to='/login' className='text-secondary'>please Login</Link></p>
    
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

export default Register;