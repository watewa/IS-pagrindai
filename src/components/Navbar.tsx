import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"

const Navbar = () => {

    const { logout } = useLogout();
    const { user }:any = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <header>
            <div className="container">

                <Link to="/">
                    <img src="logo-blue.png" alt="logo"></img>
                </Link>

                <nav>
                    {!user ? //not connected display login....
                        <>
                            <Link to="/login">Log in</Link>
                            <Link to="/signup">Sign up</Link>
                        </> : // connected as someone no clue...
                        <>
                            {user.tipas >= 0 ? <Link to="/item">Prekė</Link> : ""}

                            {user.tipas >= 1 ? <Link to={`/worker/${user._id}`}>Darbuotojas</Link> : ""}

                            {user.tipas >= 0 ? <Link to="/store">Parduotuvė</Link> : ""}

                            {user.tipas >= 42 ? <Link to="/workerlist">Darbuotojai</Link> : ""}

                            {user.tipas >= 0 ? <Link to="/order">Užsakymai</Link> : ""}

                            <button onClick={handleLogout}>Log out</button>

                        </>}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;