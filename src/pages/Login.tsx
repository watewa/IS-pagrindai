import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
    const { user } :any = useAuthContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("login..");
        await login(email, password);
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label>Email:</label>
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <button disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
            {user && user.email && <div>logged in</div>}
        </form>
    )
}

export default Login;