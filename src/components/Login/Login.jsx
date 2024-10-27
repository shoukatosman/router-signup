import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const Login = () => {
  const auth = getAuth(app);
  const [loginUser,setLoginUser] =useState ({});

    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
      const email = form.email.value;
      const password =form.password.value;
      console.log(email,password);

      signInWithEmailAndPassword(auth,email,password)
      .then(result => {
        const user = result.user; 
        console.log(user);
        if(user){
          alert("user login successfully done")
        }
        setLoginUser(user)
      })
      .catch(error=>{
        console.log(error) 
      })
 
    };


    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col">
<div className="text-center">
  <h1 className="text-3xl font-bold">Login now!</h1>
</div>
<div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
  <form onSubmit={handleLogin} className="card-body">

    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input 
      type="email" 
      name ="email"
      placeholder="Type Email" 
      className="input input-bordered" 
      //required 
      />
    </div>

    <div className="form-control">
      <label className="label">
        <span className = "label-text">Password</span>
      </label>
      <input 
      type="password" 
       name ="password"
      placeholder="Type Password" 
      className="input input-bordered"
      //required 
       />
      <label className ="label text-center">
        <a
        className = "label-text-alt link link-hover text-center">
        Forget Password
        </a>
      </label>

      <label className ="label text-center">
        <Link to = "/sign-up" 
        className = "label-text-alt link link-hover text-center">
        New to Website? create an account
        </Link>
      </label>

    </div>
    <div className="form-control mt-6">
      <input
       type = "submit" 
      value = "Login" 
      className="btn btn-outline"/>
    </div>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default Login;