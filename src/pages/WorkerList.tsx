import {
    useNavigate
} from "react-router-dom";

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faInfo} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                        <th>Operacijos</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jonas</td>
                        <td>Petraitis</td>
                        <td>1989-07-16</td>
                        <td>jonas@gmail.com</td>
                        <td>
                            <button onClick={() => navigate("/newworker")}><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button onClick={() => alert("deleted")}><FontAwesomeIcon icon={faClose} /></button>
                            <button onClick={() => navigate("/worker/42")}><FontAwesomeIcon icon={faInfo} /></button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jonas</td>
                        <td>Petraitis</td>
                        <td>1989-07-16</td>
                        <td>jonas@gmail.com</td>
                        <td>
                            <button onClick={() => navigate("/newworker")}><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button onClick={() => alert("deleted")}><FontAwesomeIcon icon={faClose} /></button>
                            <button onClick={() => navigate("/worker/402")}><FontAwesomeIcon icon={faInfo} /></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jonas</td>
                        <td>Petraitis</td>
                        <td>1989-07-16</td>
                        <td>jonas@gmail.com</td>
                        <td>
                            <button onClick={() => navigate("/newworker")}><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button onClick={() => alert("deleted")}><FontAwesomeIcon icon={faClose} /></button>
                            <button onClick={() => navigate("/worker/420")}><FontAwesomeIcon icon={faInfo} /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ListPage;