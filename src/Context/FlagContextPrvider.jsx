import React, { createContext, useContext, useState,useEffect } from 'react';

// Create the context
const FlagContext = createContext();

export const FlagContextProvider = ({ children }) => {
  const [type, setType] = useState(0); 
  const [currentData,setCurrentData]=useState(null)
  const[data,setData]=useState(null)


  function filterByRegion(region) {
    if (region === "All") return data;
    return data.filter(country => country.region === region);
  }
  
  useEffect(()=>{
  
  
  
  if (type === 0){
  
  setCurrentData(filterByRegion("All"))
  }

  else if (type === 1){
  setCurrentData(filterByRegion("Asia"))
  }
  
  else if (type === 2) {
  setCurrentData(filterByRegion("Europe"))
  }
  
  },[data,type])



const values={
type,setType,currentData,setCurrentData,data,setData
}

  return (
    <FlagContext.Provider value={values}>
      {children}
    </FlagContext.Provider>
  );
};

// Custom hook for using the context
export const useFlag = () => useContext(FlagContext);

export default FlagContextProvider