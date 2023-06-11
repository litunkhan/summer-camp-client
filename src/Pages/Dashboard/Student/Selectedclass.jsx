/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/Authprobider";
import Swal from 'sweetalert2'
const Selectedclass = () => {
    const { user } = useContext(AuthContext);
    const { data: my = [], refetch } = useQuery(["classes"], async () => {
      const res = await fetch(`${import.meta.env.VITE_URL}/selectedClasses`, {
        // headers:{
        //   authorization: `bearer ${token}`
        // }
      });
      const allselectClass = await res.json(); // Await the JSON data
    
      const myClass = allselectClass.filter((classs) => classs.studentemail=== user.email);
      console.log(myClass);
      return myClass;
    });


    const deleteHandle = (id)=>{
      console.log(id)
      fetch(`${import.meta.env.VITE_URL}/selectclass/${id}`,{
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.deletedCount > 0) {
              refetch()
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Item deleted Succesfully',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
          
      })
  }

    return (
        <>
           <div className="my-12 grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            
           {
            my.map(singleclass=>{
                 return <div key={singleclass._id} className="w-full text-center">
                  
                    <img className="w-full h-60" src={singleclass.classimage} alt={singleclass.classname} />
                    <div className="flex gap-2 justify-center items-center">
                            <p>instactorname: {singleclass.instactorname}</p>
                            <p>Class-Name{singleclass.classname}</p>
                        </div>
                           {/* <h2 className="text-1xl">{singleclass.email}</h2> */}
                           <p>Seats available:{ singleclass.seats}</p>
                           <p>Price: ${singleclass.price}</p>
                           <h4 className="text-1xl">
                             Enroll-Student: {!singleclass.enroll?0:singleclass.enroll}
                           </h4>
                        
                    <div className="flex gap-2 justify-center items-center">

                    <button 
                     onClick={()=>deleteHandle(singleclass._id)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                     Delete
                    </button>
                   
                        </div>

                    </div>
            })
           }
           </div>
           
        </>
        
    );
};

export default Selectedclass;