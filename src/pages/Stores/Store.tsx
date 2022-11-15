import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faInfo} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
const userPreference = () => {
    var userPreference;
    const button = document.getElementById("msg");
    if (window.confirm("Ar tikrai norite ištrinti?") === true) {
        userPreference = "Sėkmingai ištrinta!";
    } else {
        userPreference = "Ištrinimas atšauktas!";
    }
    if(button != null){
        button.innerHTML = userPreference; 
    }

}
const Store = () => {
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
                        <th></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Centrinė</td> 
                        <td>Gričiupio g. 1</td>
                        <td>Jonas Jonaitis</td>
                        <td>
                            <button onClick={() => navigate("/newstore")}><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button onClick={() => userPreference()}><FontAwesomeIcon icon={faClose} /></button>
                            <button onClick={() => navigate("/infostore")}><FontAwesomeIcon icon={faInfo} /></button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Vakarinė</td> 
                        <td>Karaliaus Mindaugo pr. 1</td> 
                        <td>Petras Petraitis</td>
                        <td>
                            <button onClick={() => navigate("/newstore")}><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button onClick={() => userPreference()}><FontAwesomeIcon icon={faClose} /></button>
                            <button onClick={() => navigate("/infostore")}><FontAwesomeIcon icon={faInfo} /></button>
                        </td>
                    </tr>
                </table>
                <button className ="button" onClick={
                    () => navigate("/newstore")}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span className='btn-text'>
                        Pridėti parduotuvę
                    </span>
                     </button>
                     
            </div>
        </div>
        
    )
    
}

export default Store;