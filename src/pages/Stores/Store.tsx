import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faInfo} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
const Store = () => {
    
    return (
        <div>
            <h2>Parduotuvių valdymo skydas</h2>
            <div className= "container">
                <table id = "table">
                    <tr >
                        <th>Nr</th>
                        <th>Pavadinimas</th>
                        <th>Adresas</th>
                        <th>Vadovas</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Centrinė</td> 
                        <td>Gričiupio g. 1</td>
                        <td>Jonas Jonaitis</td>
                        <td><button><FontAwesomeIcon icon={faPlus} /></button>
                            <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button><FontAwesomeIcon icon={faClose} /></button>
                            <button><FontAwesomeIcon icon={faInfo} /></button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Vakarinė</td> 
                        <td>Karaliaus Mindaugo pr. 1</td> 
                        <td>Petras Petraitis</td>
                        <td><button><FontAwesomeIcon icon={faPlus} /></button>
                            <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button><FontAwesomeIcon icon={faClose} /></button>
                            <button><FontAwesomeIcon icon={faInfo} /></button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
    
}

export default Store;