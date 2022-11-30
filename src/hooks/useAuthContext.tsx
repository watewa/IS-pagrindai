import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// i dunno everywhere i use these i get errors so f them.. use as reference
export enum Privileges {
    User = 0,
    Client = 1,
    Worker = 2,
    Admin = 42
}

export interface User {
    username: string,
    tipas: Privileges,
    token: string
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw Error("useAuthContext must be used within AuthContextProvider");
    }

    return context;
}