import { useEffect, useState } from "react";

const HomeInstractor = () => {
    const [instructors,setInstructor] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_URL}/instructor`)
        .then(res=> res.json())
        .then(datas=>{
            // const instactor = datas.filter(instactor=>instactor.role==='instactor')
            setInstructor(datas)
        })
    },[])
    return (
        <div>
        <h3 className="my-4 text-2xl text-center">Popular instactors</h3>
        <div className="container mx-auto">
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="px-4 py-2">Image</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
      </tr>
    </thead>
    <tbody>
      {instructors.slice(3,9).map((item) => (
        <tr key={item._id}>
          <td className="border px-4 py-2">
            <img src={item.image} alt="Profile" className="w-12 h-12 rounded-full" />
          </td>
          <td className="border px-4 py-2">{item.name}</td>
          <td className="border px-4 py-2">{item.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
    );
};

export default HomeInstractor;