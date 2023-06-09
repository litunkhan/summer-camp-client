import { useContext } from "react";
import axios from 'axios';
import { AuthContext } from '../../Firebase/Authprobider' 
import Swal from "sweetalert2";
const AddClassForm = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = async(e) => {
        
      e.preventDefault();
     const form = e.target
     const classname = form.classname.value
     const classimage= form.classimage.value
     const instactorname = form.instactorname.value
     const email = form.email.value
     const price = parseInt(form.price.value)
     const seats = parseInt(form.seats.value)
     const addclass = {
        classname,
        classimage,
        instactorname,
        email,
        price,
        seats,
        status:'pending'


     }
     
     try {
      const response = await axios.post(`${import.meta.env.VITE_URL}/allclass`, {
        data: addclass,
      });
  
      if(response.data.insertedId){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Added an class successfull`,
          showConfirmButton: false,
          timer: 1500,
        });
      } // Handle the response data here
    } catch (error) {
      console.error(error); // Handle the error here
    }
  

     
    };
  
    return (
      <div className="container mx-auto p-4">
        <form
          className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl mb-4">Add a Class</h2>
  
          <div className="mb-4">
            <label htmlFor="class-name" className="block mb-2 font-medium">
              Class Name
            </label>
            <input
              type="text"
              id="class-name"
              name="classname"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="class-image" className="block mb-2 font-medium">
              Class Image
            </label>
            <input
              type="url"
              id="class-image"
              name="classimage"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="instructor-name" className="block mb-2 font-medium">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructor-name"
              name="instactorname"
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              readOnly
              value={user.displayName}
              
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="instructor-email" className="block mb-2 font-medium">
              Instructor Email
            </label>
            <input
              type="email"
              id="instructor-email"
              name="email"
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              readOnly
              value={user.email}
              required
              
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="available-seats" className="block mb-2 font-medium">
              Available Seats
            </label>
            <input
              type="number"
              id="available-seats"
              name="seats"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-medium">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
    );
  };
  
  export default AddClassForm