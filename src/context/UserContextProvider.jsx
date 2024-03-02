import React, { useState } from "react";
import UserContext from "./UserContext";
import Log from "../components/Log";


const UserContextProvider =({children}) => {

    const [user ,setUser]= useState('')


   return(
    <>
    <UserContext.Provider value = {{user,setUser}}>
    <Log />
    </UserContext.Provider>
    
    </>
   )
}

export default UserContextProvider