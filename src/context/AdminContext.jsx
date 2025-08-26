import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_REACT_APP_API_URL;
 
  const checkAdmin = async () => {
    try {

      const res = await axios.get(`${backendUrl}/api/v1/admin/login`, {
        withCredentials: true, 
      });
      if (res.data.success) setIsAdmin(true);
    
    } catch (err) {
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, checkAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
};
