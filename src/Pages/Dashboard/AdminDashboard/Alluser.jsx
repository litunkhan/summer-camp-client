/* eslint-disable no-unused-vars */


import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";

const Alluser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`${import.meta.env.VITE_URL}/getusers`, {
      // headers:{
      //   authorization: `bearer ${token}`
      // }
    });
    return res.json();
  });

  const [selectedUser, setSelectedUser] = useState(null);

  const handleAdmin = (admin) => {
    fetch(`${import.meta.env.VITE_URL}/user/admin/${admin._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${admin.name} is now Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
          setSelectedUser(admin);
        }
      });
  };

  const handleInstactor = (admin) => {
    fetch(`${import.meta.env.VITE_URL}/user/instactor/${admin._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${admin.name} is now Instactor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-12">
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
              </td>

              

<td className="cursor-pointer">
  {user.role === "admin" ? (
    "admin"
  ) : user.role === "instactor" ? (
    "instactor"
  ) : (
    <>
      {!selectedUser || selectedUser._id !== user._id ? (
        <p
          onClick={() => {
            handleAdmin(user);
          }}
        >
          Make admin
        </p>
      ) : null}
      {!selectedUser || selectedUser._id !== user._id ? (
        <p
          onClick={() => {
            handleInstactor(user);
          }}
        >
          Make instactor
        </p>
      ) : null}
    </>
  )}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;



