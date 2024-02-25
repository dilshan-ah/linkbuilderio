import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

const Context = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);


  const info = {
    mobileMenu,
    setMobileMenu,
  };

  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};

export default Context;