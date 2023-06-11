/* eslint-disable no-unused-vars */
import {  useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {
    
    const { data: my = [], refetch } = useQuery(["classes"], async () => {
        const res = await fetch(`${import.meta.env.VITE_URL}/getmyclass`, {
          // headers:{
          //   authorization: `bearer ${token}`
          // }
        });
        return res.json();
      });

    
    const handleApprove = (approve) => {
      const url = `${import.meta.env.VITE_URL}/all/${approve._id}`;
    
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "approve" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${approve.data.className} is now approved`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log("Error:",error);
        });
    };


      const handleDenyed = (denyed) => {
        fetch(`${import.meta.env.VITE_URL}/alls/${denyed._id}`, {
          method: "PUT",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({status:'denyed'})
          
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${denyed.data.classname} is denyed`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };

    console.log(my)
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
                     onClick={()=>handleApprove(singleclass)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                     approve
                    </button>
                    <button 
                    onClick={()=>handleDenyed(singleclass)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>Denyed</span>
                    </button>
                        </div>

                    </div>
            })
           }
           </div>
           
        </>
    );
};

export default Classes;


