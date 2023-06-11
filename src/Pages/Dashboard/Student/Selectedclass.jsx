/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/Authprobider";

const Selectedclass = () => {
    const { user } = useContext(AuthContext);
    const { data: my = [], refetch } = useQuery(["classes"], async () => {
      const res = await fetch(`${import.meta.env.VITE_URL}/selectedClasses`, {
        // headers:{
        //   authorization: `bearer ${token}`
        // }
      });
      const allselectClass = await res.json(); // Await the JSON data
    
      const myClass = allselectClass.filter((classs) => classs.email === user.email);
      console.log(myClass);
      return myClass;
    });
    return (
        <>
           <div className="my-12 grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            
           {
            my.map(singleclass=>{
                 return <div key={singleclass._id} className="w-full text-center">
                  
                    <img className="w-full h-60" src={singleclass.data.classimage} alt={singleclass.data.classname} />
                    <div className="flex gap-2 justify-center items-center">
                            <p>instactorname: {singleclass.data.instactorname}</p>
                            <p>{singleclass.data.classname}</p>
                        </div>
                           <h2 className="text-1xl">{singleclass.email}</h2>
                           <p>Seats available:{ singleclass.data.seats}</p>
                           <p>Price: ${singleclass.data.price}</p>
                           <h4 className="text-1xl">
                             Enroll-Student: {!singleclass.data.enroll?0:singleclass.data.enroll}
                           </h4>
                        
                    <div className="flex gap-2 justify-center items-center">

                    <button 
                     
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