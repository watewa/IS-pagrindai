// import { useSignup } from "../hooks/useSignup";

const { useState } = require("react")

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { signup, error, isLoading } = useSignup();
    const isLoading = false;
    const error = null;

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        console.log("singup");
        // await signup(email, password);
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
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
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;