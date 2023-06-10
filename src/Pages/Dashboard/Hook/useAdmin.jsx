import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import {AuthContext} from '../../Firebase/Authprobider'

const useAdmin = () => {
  const { user } = useContext(AuthContext)
  const token = localStorage.getItem("access-token");

  const { data: admin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user.email],
    queryFn: async () => {
      const res = await fetch(
          `${import.meta.env.VITE_URL}/user/admin/${user.email}`,
        {
          headers: { authorization: `bearer ${token} `}
        }
      );

      return res.json();
    },
  });

  console.log(admin);
  return [admin, isAdminLoading];
};

export default useAdmin;