import { useSignup } from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const { useState } = require("react")

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, error, isLoading } = useSignup();
    const navigate = useNavigate();
    const { user } :any = useAuthContext();

    if(user){
        navigate("/");
    }

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        console.log("singup");
        const succ = await signup(email, password);
        console.log("error: ", error);
        if(succ){
            navigate("/");
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
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
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;