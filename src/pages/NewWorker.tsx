import {
    useNavigate
} from 'react-router-dom';

const NewWorkerPage = () => {
    const navigate = useNavigate();

    return (
        <div className="box">
            <h2>Naujas darbuotojas</h2>
            <form method="post">
                <div className="grid form center">
                    <label htmlFor="name">Vardas</label>
                    <input type="text" name="name" id="" />

                    <label htmlFor="surname">Pavardė</label>
                    <input type="text" name="surname" id="" />

                    <label htmlFor="date">Gimimo data</label>
                    <input type="date" name="date" id="" />

                    <label htmlFor="email">El. paštas</label>
                    <input type="email" name="email" id="" />

                    <label htmlFor="address">Adresas</label>
                    <input type="text" name="address" id="" />
                </div>
                <button className="button" onClick={() => navigate("/workerlist")}>Pateikti</button>
            </form>
        </div>
    )
}
export default NewWorkerPage;