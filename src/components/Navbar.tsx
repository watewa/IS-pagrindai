import { Link, useNavigate } from "react-router-dom"
import { Privileges, useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"

const Navbar = () => {

    const { logout } = useLogout();
    const { user }: any = useAuthContext();
    const navigate = useNavigate();

    const isUser = (priv: Privileges): boolean => {
        if (user == null)
            return false;
        if (priv === user.tipas) {
            return true;
        }
        return false;
    }

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
                            <Link to="/login">Prisijungti</Link>
                            <Link to="/signup">Registruotis</Link>
                        </> :
                        <>
                            {(isUser(Privileges.User) || isUser(Privileges.Admin)) ? <Link to="/item">Prekė</Link> : ""}

                            {(isUser(Privileges.Worker)) ? <Link to={`/worker/${user.wid}`}>Darbuotojas</Link> : ""}

                            {(isUser(Privileges.User) || isUser(Privileges.Admin)) ? <Link to="/store">Parduotuvė</Link> : ""}

                            {(isUser(Privileges.Admin)) ? <Link to="/workerlist">Darbuotojai</Link> : ""}

                            {(isUser(Privileges.Worker) || isUser(Privileges.Admin)) ? <Link to="/order">Užsakymų administravimas</Link> : ""}
                            {isUser(Privileges.User) ? <Link to="/orderhistory">Užsakymai</Link> : ""}

                            <button className="logout" onClick={handleLogout}>Atsijungti</button>

                        </>}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;