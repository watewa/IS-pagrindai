import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user } :any = useAuthContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();
    const navigate = useNavigate();
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const succ = await login(email, password);
        if(succ){
            navigate("/");
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label>Email:</label>
            <input
                type="text"
                pattern="[A-Za-z0-9]+"
                title="Tik skaičiai ir raidės"
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
            {user && <div>logged in</div>}
        </form>
    )
}

export default Login;