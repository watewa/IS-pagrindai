import {
    useNavigate
} from 'react-router-dom';

const NewStore = () => {
    const navigate = useNavigate();

    return (
        <div className="box">
            <h2>Nauja parduotuvė</h2>
            <form method="post">
                <div className="grid form center">
                    <label htmlFor="name">Pavadinimas</label>
                    <input type="text" name="name" id="" />

                    <label htmlFor="surname">Adresas</label>
                    <input type="text" name="address" id="" />

                    <label htmlFor="date">Vadovas</label>
                    <input type="date" name="manager" id="" />

                </div>
                <button className="button" onClick={() => navigate("/workerlist")}>Pateikti</button>
            </form>
        </div>
    )
}
export default NewStore;