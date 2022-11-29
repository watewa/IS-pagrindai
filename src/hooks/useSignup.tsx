import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } : any = useAuthContext();

    const signup = async (email : string, password : string) => {
        setIsLoading(true);
        setError(null);
        const res = await fetch(process.env.REACT_APP_APIURL+"/api/user/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:email, password })
        });

        const json = await res.json();
        console.log(json);
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
    return { signup, isLoading, error };
}