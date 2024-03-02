import React, { useState } from "react";
import MyContext from "./UserContext.js";
import Log from "../components/Log.jsx";


const UserContextProvider =({children}) => {

    const [user ,setUser]= useState('')


   return(
    
    <MyContext.Provider value = {{user,setUser}}>
   <Log />
    </MyContext.Provider>

   )
}

export default UserContextProvider