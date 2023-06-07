import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Authprobider";
import {  updateProfile } from 'firebase/auth';

const RegistrationPage = () => {
  const [text,settext] = useState(true)
  const {signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle registration logic here
    console.log(data);
    signIn(data.email,data.password)
        .then(res=>{
            console.log(res.user)
             navigate('/login')
            updateProfile(res.user,{displayName:data.name,photoURL:data.image})
            .then(()=>{
              
           })
           
       })
       .catch(err=>{
          console.log(err.message)
       })
  };

  return (
    <div className="min-h-screen my-10 flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-8">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Invalid email address</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*\W)/,
              })}
              type={text?"password":"text"}
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            /><i onClick={()=>{
               settext(!text)
            }} className="fa-solid fa-eye"></i>
            {errors.password && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters long and contain a capital letter and a special character
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === document.getElementById("password").value,
              })}
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">Passwords do not match</p>
            )}
          </div>
          {/* images url part  */}
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2 font-medium">
              image
            </label>
            <input
              {...register("image", {
                required: true,
                validate: (value) =>
                  value === document.getElementById("image").value,
              })}
              type="url"
              id="image"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
           
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
