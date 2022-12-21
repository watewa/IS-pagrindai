import {
    Link
} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
    const { user }: any = useAuthContext();

    return (
        <div className="">
            <h1>Sveiki atvykę į gėlių IS!</h1>
            {!user ? <p className='center'>prašome <Link to={"/login"}>prisijungti</Link>.</p> : '' }
        </div>
    )
}
export default Home;
