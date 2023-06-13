import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { createUser ,updateUserProfile} = useContext(AuthContext);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result=>{

        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(result=>{
          const saveUser = {name: data.name, email:data.email}
          console.log(result);
          fetch("http://localhost:5000/users",{
            method: "POST",
            headers:{
              'content-type': 'application/json'
            },
            body:JSON.stringify(saveUser)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
           
              reset()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'successfully user registered',
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/")
            
          })
         
        }).catch(err=>{ 
          console.log(err);
        })
    }).catch(error=>{
        console.log(error.message);
    })
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss| Sign Up</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col md:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign up now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Minimum 6 characters are required
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Maximum 20 characters are limit
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Minimum eight characters, at least one letter and one
                      number
                    </p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className='btn btn-primary"'
                    type="submit"
                    value="sign up"
                  ></input>
                </div>
              </form>

              <p className="text-center text-xl pb-4">
                <small>
                  Already have an account then <Link className="text-orange-600" to="/login">Login?</Link>
                </small>
              </p>
              <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
