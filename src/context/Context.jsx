import React, { createContext, useEffect, useState } from "react";
import AuthUser from "../auth/AuthUser";
export const DataContext = createContext();

const Context = ({ children }) => {
  const {http} = AuthUser();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [allPackage, setAllPackge] = useState(null);
  const [allBlog, setAllBlog] = useState(null);

  useEffect(()=>{
    fetchAllPackage();
    fetchAllBlog();
},[]);


const fetchAllPackage = () => {
  http.get('/all-packages')
    .then((res) => {
      setAllPackge(res.data);
    })
    .catch((error) => {
      if (error.response.products) {
        
        if (error.response.status === 401) {
          console.error('Unauthorized access. Redirecting to login page or showing login modal.');
        } else {
          console.error('Error response from server:', error.response.data);
        }
      } else if (error.request) {
        console.error('No response received from server.');
      } else {
        console.error('Error setting up the request:', error.message);
      }
    });
};

const fetchAllBlog = () => {
  http.get('/all-blogs')
    .then((res) => {
      setAllBlog(res.data);
    })
    .catch((error) => {
      if (error.response.products) {
        
        if (error.response.status === 401) {
          console.error('Unauthorized access. Redirecting to login page or showing login modal.');
        } else {
          console.error('Error response from server:', error.response.data);
        }
      } else if (error.request) {
        console.error('No response received from server.');
      } else {
        console.error('Error setting up the request:', error.message);
      }
    });
};

  const info = {
    mobileMenu,
    setMobileMenu,
    allPackage,
    allBlog
  };

  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};

export default Context;