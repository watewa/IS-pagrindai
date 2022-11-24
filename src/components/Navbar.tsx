import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"

const Navbar = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();
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
                            <Link to="/item">Prekė</Link>

                            <Link to="/worker/1">Darbuotojas</Link>

                            <Link to="/store">Parduotuvė</Link>

                            <Link to="/workerlist">Darbuotojai</Link>

                            <Link to="/order">Užsakymai</Link>

                            <button onClick={handleLogout}>Log out</button>

                        </>}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;