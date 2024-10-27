import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../../firebase/firebase.init';



const SignUp = () => {
  const [signInUser,setSignInUser] =useState({});

  const auth = getAuth(app);
  // Google provider
  const googleProvider = new GoogleAuthProvider ();

    const handleRegistration =(event)=>{
        event.preventDefault();
        const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password =form.password.value;
      //console.log(name,email,password); 

      createUserWithEmailAndPassword(auth,email,password)
      .then(result => {
        const user = result.user; 
        console.log(user);
        if(user){
          alert("user created successfully done")
        }
        setSignInUser(user)
      })
      .catch(error=>{
        console.log(error) 
      })

    };

    const handleGoogleLogin=()=>{
      signInWithPopup(auth, googleProvider)
      .then(result=>{
        const user = result.user;
        setSignInUser(user)
        console.log(user);
        if(user){
          alert("user created successfully done by google")
        }
        setSignInUser(user)
      })
      .catch(error=>{
        console.log(error) 
      })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <h1>{signInUser?.email} {signInUser?.displayName}</h1>
    <div className="text-center">
      <h1 className="text-3xl font-bold">Sign Up now!</h1>
    </div>
    <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
      <form onSubmit={handleRegistration} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          type="text"
          name ="name"
          placeholder="Type Name" 
          className="input input-bordered" 
         // required
           />
        </div>

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
          <input type="password" 
           name ="password"
          placeholder="Type Password" 
          className="input input-bordered"
          //required 
           />
          <label className ="label text-center">
            <Link to = "/login" className = "label-text-alt link link-hover text-center">Already have an account? please login</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input
           type = "submit" 
          value = "Sign Up" 
          className="btn btn-outline"/>
        </div>

      </form>
      <div className="form-control mt-0 m-8">
          <button onClick={handleGoogleLogin} className="btn btn-outline"> Login with Google</button>
          </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;

