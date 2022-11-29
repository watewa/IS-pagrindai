import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } :any = useAuthContext();

    const login = async (email:string, password:string) => {
        setIsLoading(true);
        setError(null);
        console.log(process.env.REACT_APP_APIURL+"/api/user/login");
        const res = await fetch(process.env.REACT_APP_APIURL+"/api/user/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:email, password })
        });

        const json = await res.json();
        if (!res.ok) {
            setIsLoading(false);
            setError(json.error);
            return false;
        } else {
            // saving to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // update auth context
            dispatch({ type: "LOGIN", payload: json });

            setIsLoading(false);
            return true;
        }
    }
    return { login, isLoading, error };
}