import { Link } from "react-router-dom"
//import { useAuthContext } from "../hooks/useAuthContext";
//import { useLogout } from "../hooks/useLogout"

const Navbar = () => {

    // const { logout } = useLogout();
    // const { user } = useAuthContext();

    // const handleLogout = () => {
    //     logout();
    // }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Geles IS</h1>
                </Link>
                <nav>
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;