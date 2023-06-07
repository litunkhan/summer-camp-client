import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Authprobider";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
const LoginPage = () => {
  const [text,settext] = useState(true)
  const { register, handleSubmit } = useForm();
  const {LoginIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    // Handle login logic here
    console.log(data);
    LoginIn(data.email,data.password)
    .then(res=>{
      console.log(res.user)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'LogIn Successfull ',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/')
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-8">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              {...register("password")}
              type={text?"password":"text"}
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
            <i onClick={()=>{
               settext(!text)
            }} className="fa-solid fa-eye"></i>
          </div>

          <div className="mb-4">
            <label htmlFor="rememberMe" className="flex items-center">
              <input
                {...register("rememberMe")}
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <span className="text-sm">Remember me</span>
            </label>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mb-4">
          <h3 className="text-lg font-medium">Or login with:</h3>
          <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-red-600">
            Google
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm">
            Dont have an account?{" "}
            <Link to="/registration" className="text-blue-500">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
