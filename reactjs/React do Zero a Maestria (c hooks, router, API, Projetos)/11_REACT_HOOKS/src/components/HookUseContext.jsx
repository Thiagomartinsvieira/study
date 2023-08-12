import { createContext } from "react";

export const someContext = createContext()

export const HookUseContext = ({children}) => {
    const contextValue = 'testing context'

    return (
        <someContext.provider value={{contextValue}} >
            {children}
        </someContext.provider>
    )
}