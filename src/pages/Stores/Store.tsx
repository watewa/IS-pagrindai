import { useNavigate } from "react-router-dom";
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
const Store = () => {
    const navigate = useNavigate();
    const [stores, setStores] = useState<Array<any>>([])
    const { user }: any = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState<Array<string>>([]);
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/store/`, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if (res.ok) {
                    console.log(json);
                    setStores(json.Stores);
                } else {
                    throw Error(json.error);
                }
            } catch (err:any) {
                
                setErrors([err.message]);
                console.log(err);
            }
            setIsLoading(false);
            
        }
        fetchStores();
    }, [user])

    const deleteStore = async (ind: number) => {
        let conf = window.confirm(`Ar tikrai norite ištrinti ${stores[ind].vardas} ${stores[ind].pavarde}?`);
        if(conf){
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/store/${stores[ind].id_Parduotuve}`, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if(!res.ok){
                    throw Error(json.error);
                }
                setStores(w => w.filter((_,i) => i !== ind));
            } catch (err:any) {
                setErrors([err.message]);
            }
        }
    }

    return (
        <div className="box">
            {isLoading ? <h2>Kraunama...</h2> : <>
                <h2 className="center">Parduotuvių sąrašas:</h2>
                <div className="flex-end">
                    <button className="button" onClick={() => navigate("/newstore")}>Naujas</button>
                    <button className="button" onClick={() => navigate("/sendemail")}>Siųsti laišką</button>
                </div>
                {stores.length > 0 ? <table id="table">
                    <tbody>
                        <tr>
                            <th>Nr.</th>
                            <th>Vadovo vardas</th>
                            <th>Parduotuvės adresas</th>
                            <th>Operacijos</th>
                        </tr>
                        {stores.map((w, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{w.vadovas}</td>
                                <td>{w.adresas}</td>
                                <td>
                                    <button onClick={() => navigate(`/editstore/${w.id_Parduotuve}`)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button onClick={() => deleteStore(ind)}><FontAwesomeIcon icon={faClose} /></button>
                                    <button onClick={() => navigate(`/Store/${w.id_Parduotuve}`)}><FontAwesomeIcon icon={faInfo} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <h3>Nėra parduotuvių</h3>}
                {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
                <p key={ind}>{w}</p>
            ))}</div> : ""}
            </>}
        </div>
    )
}
export default Store;