import React, { createContext, useState } from 'react';

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
    const [token,setToken]=useState('');

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