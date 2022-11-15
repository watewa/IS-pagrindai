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
                    <input type="text" name="manager" id="" />

                    <label htmlFor="date">Darbuotojų skaičius</label>
                    <input type="text" name="workers" id="" />

                    <label htmlFor="date">Apyvarta</label>
                    <input type="text" name="bruto" id="" />

                    <label htmlFor="date">Išleista pinigų</label>
                    <input type="text" name="expenses" id="" />

                </div>
                <button className="button" onClick={() => navigate("/workerlist")}>Pridėti</button>
            </form>
        </div>
    )
}
export default NewStore;