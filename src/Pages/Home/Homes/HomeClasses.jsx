import { useContext, useEffect, useState } from "react";
import useAdmin from '../../Dashboard/Hook/useAdmin';
import useInstructor from '../../Dashboard/Hook/useInstactor';
import { AuthContext } from "../../Firebase/Authprobider";

const HomeClasses = () => {
  const {user} = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    const [admin,isAdminLoading ] = useAdmin()
    const [instactor,isInstructorLoading ] = useInstructor()

//  
  useEffect(() =>{
fetch(`${import.meta.env.VITE_URL}/approvedClasses`).then(res => res.json()).then(data => {
setClasses(data)  
console.log(data)})
// 

  },[])
  const buttonDisabled = admin || instactor


  if(isAdminLoading || isInstructorLoading  ){
    return <div><p>Loading</p></div>
  }

  const selectClass =(myClass) =>{
    const selectedClass = {...myClass,email:user.email}
        fetch(`${import.meta.env.VITE_URL}/selectclass`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedClass),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("Inserted");
            }
            console.log(data);
          });
        console.log(selectedClass)
      }
    return (
      <>
      <div className="my-12 grid md:grid-cols-3 lg:grid-cols-4 gap-3">
       
      {
       classes.map(singleclass=>{
            return <div key={singleclass._id} className="w-full text-center">
             
               <img className="w-full h-60" src={singleclass.data.classimage} alt={singleclass.data.classname} />
               <div className="flex gap-3 justify-center items-center">
                       <p>instactorname: {singleclass.data.instactorname}</p>
                       <p>Classname: {singleclass.data.classname}</p>
                   </div>
                      <h2 className="text-1xl">{singleclass.email}</h2>
                      <p>Seats available:{ singleclass.data.seats}</p>
                      <p>Price: ${singleclass.data.price}</p>
                      <h4 className="text-1xl">
                        Enroll-Student: {!singleclass.data.enroll?0:singleclass.data.enroll}
                      </h4>
                   
               <div className="flex gap-2 justify-center items-center">

               <button 
                onClick={()=>{
                  if(!user){
                    return alert('Please login first')
                  }
                  selectClass(singleclass)
                }}
                disabled={buttonDisabled}
               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                Select
               </button>
              
                   </div>

               </div>
       })
      }
      </div>
      
   </>
    );
};

export default HomeClasses;