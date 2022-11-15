import {
    Link
} from 'react-router-dom';

const Home = () => {
    
    return (
        <div className="">
            <h1>Sveiki atvykę į gėlių IS!</h1>
            <p className='center'>prašome <Link to={"/login"}>prisijungti</Link>.</p>
        </div>
    )
}
export default Home;
