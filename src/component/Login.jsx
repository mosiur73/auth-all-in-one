import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
  const {singInuser}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        singInuser(email,password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New to this website <Link className='underline' to="/register">sign up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;