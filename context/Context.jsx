import { createContext, useState } from "react";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [error, setErrorMessage] = useState('');
    const [success, setSuccessMessage] = useState('');
    const contextValue={
        error,
        setErrorMessage,
        success,
        setSuccessMessage,
    } 
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;