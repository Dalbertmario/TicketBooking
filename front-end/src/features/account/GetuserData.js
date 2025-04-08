import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function userdata() {
    const api = import.meta.env.VITE_API_BACKEND;
    const token = JSON.parse(localStorage.getItem("token1"));
  
    try {
      const responce = await fetch(`${api}/userdatass`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await responce.json()
      if (!responce.ok) {
        toast.error(data.message || "Something went wrong");
        throw new Error(data.message);
      }
  
      console.log(data);
      return data;
    } catch (Er) {
      console.error("Fetch error:", Er.message);
      throw new Error(Er.message);
    }
  }
  

 export default function UseUserDetials() {
    const { data, isLoading } = useQuery({
      queryKey: ["userdetail"],
      queryFn: userdata,
      onError: (error) => toast.error(error.message),
    });
  
    return { data, isLoading };
  }