import {
    Link,
    useNavigate
} from "react-router-dom";

const ListPage = () => {
    const navigate = useNavigate();
    return (
        <div className="box">
            <h2 className="center">Darbuotojų sąrašas:</h2>
            <div className="flex-end">
                <button className="button" onClick={() => navigate("/newworker")}>Naujas</button>
            </div>
            <table id="table">
                <tbody>
                    <tr>
                        <th>Nr.</th>
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Gimimo data</th>
                        <th>El. paštas</th>
                        <th>Ištrinti</th>
                        <th>Redaguoti</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jonas</td>
                        <td>Petraitis</td>
                        <td>1989-07-16</td>
                        <td>jonas@gmail.com</td>
                        <td><button>Trinti</button></td>
                        <td><Link to={`/worker/42`}>Redaguoti</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jonas</td>
                        <td>Petraitis</td>
                        <td>1989-07-16</td>
                        <td>jonas@gmail.com</td>
                        <td><button>Trinti</button></td>
                        <td><Link to={`/worker/420`}>Redaguoti</Link></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jonas</td>
                        <td>Petraitis</td>
                        <td>1989-07-16</td>
                        <td>jonas@gmail.com</td>
                        <td><button>Trinti</button></td>
                        <td><Link to={`/worker/314`}>Redaguoti</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ListPage;