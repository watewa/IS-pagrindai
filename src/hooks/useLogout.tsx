import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {

    const { dispatch } :any = useAuthContext();

    const logout = () => {
        // remove user
        localStorage.removeItem('user');

        // logout action
        dispatch({ type: "LOGOUT" })
    }
    return { logout };
}