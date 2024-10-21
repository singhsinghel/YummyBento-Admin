import React, { createContext, useEffect, useState } from 'react';

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
    const [token,setToken]=useState('');

    useEffect(()=>{
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
          setToken(savedToken);
        }
    },[])

    const ContextValue={
        token,
        setToken,
    };

    return(
        <StoreContext.Provider value={ContextValue}>

           {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider