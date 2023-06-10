/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/Authprobider";


const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("access-token");

    const { data: instactor, isLoading: isInstructorLoading } = useQuery({
      queryKey: ["isInstructor", user.email],
      queryFn: async () => {
        const res = await fetch(
          `${import.meta.env.VITE_URL}/user/instactor/${user.email}`,
          {
            headers: { authorization: `bearer ${token}`},
          }
         );

        return res.json();
      },
    });

    
    return [instactor, isInstructorLoading];
};

export default useInstructor;