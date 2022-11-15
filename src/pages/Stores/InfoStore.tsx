import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faInfo} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const InfoStore = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className= "container">
            <div className = "center">
                <h2>Parduotuvių valdymo skydas</h2>
                <p id="msg"></p>
            </div>
                <table id = "table">
                    <tr >
                        <th>Nr</th>
                        <th>Pavadinimas</th>
                        <th>Adresas</th>
                        <th>Vadovas</th>
                        <th>Darbuotojų skaičius</th>
                        <th>Padaryta apyvarta</th>
                        <th>Išleista pinigų</th>
                        <th>Nuostolis/Pelnas</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Centrinė</td> 
                        <td>Gričiupio g. 1</td>
                        <td>Jonas Jonaitis</td>
                        <td>11</td>
                        <td>2680eur</td>
                        <td>1122eur</td>
                        <td>1558eur</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Vakarinė</td> 
                        <td>Karaliaus Mindaugo pr. 1</td> 
                        <td>Petras Petraitis</td>
                        <td>8</td>
                        <td>2080eur</td>
                        <td>982eur</td>
                        <td>1098eur</td>
                    </tr>
                </table>
            </div>
        </div>
    )   
}
export default InfoStore;