/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Alluser = ()=>{
    const {data: user =[],refetch} = useQuery(['users'],async()=>{
        const res = await fetch(`${import.meta.env.VITE_URL}/getusers`,{
    //      headers:{
    //        authorization: `bearer ${token}`
    //    }
        })
        return res.json()

   })
  

  
   return(
    <div className="my-12">
    <table className="min-w-full bg-white text-center">
    <thead>
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Image</th>
        <th className="px-4 py-2">Role</th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {user.map((user) => (
        <tr key={user.id}>
          <td className="px-4 py-2">{user.name}</td>
          <td className="px-4 py-2">{user.email}</td>
          <td className="px-4 py-2">
            <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
          </td>
          <td className="px-4 py-2">
          <td className="cursor-pointer">{user.role==='admin'?'admin':
             <i className="fa-regular fa-user"></i>
             
            }
            </td>
            <td className="cursor-pointer">{user.role==='instactor'?'instactor':
             <i  className="fa-regular fa-user"></i>
             
            }</td>
          </td>
          <td className="px-4 py-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Make Instructor
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Make Admin
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
);

}
export default Alluser