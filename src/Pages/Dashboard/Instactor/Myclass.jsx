/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
// import axios from 'axios';
import { AuthContext } from "../../Firebase/Authprobider";

const Myclass = () => {
    const {user} = useContext(AuthContext)
    const [my,setmyClass] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_URL}/getmyclass`)
        .then(res=> res.json())
        .then(datas=>{
            const myclass = datas.filter(instactor=>instactor.data.email===user.email)
            console.log(myclass)
            setmyClass(myclass)
        })
    },[user.email])
    return (
        <>
           <div className="my-12 grid md:grid-cols-3 lg:grid-cols-4">
           {
            my.map(singleclass=>{
                 return <div key={singleclass._id} className="w-full text-center">
                    <img src={singleclass.data.classimage} alt={singleclass.data.classname} />
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

                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>{singleclass.data.status}</span>
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>Edit</span>
                    </button>
                        </div>

                    </div>
            })
           }
           </div>
           
        </>
    );
};

export default Myclass;