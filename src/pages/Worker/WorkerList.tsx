import { useNavigate } from "react-router-dom";
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const ListPage = () => {
    const navigate = useNavigate();
    const [workers, setWorkers] = useState<Array<any>>([])
    const { user }: any = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState<Array<string>>([]);
    useEffect(() => {
        const fetchWorkers = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/workers/`, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if (res.ok) {
                    console.log(json);
                    setWorkers(json.workers);
                } else {
                    throw Error(json.error);
                }
            } catch (err:any) {
                setErrors([err.message]);
                console.log(err);
            }
            setIsLoading(false);
        }
        fetchWorkers();
    }, [user])

    const deleteWorker = async (ind: number) => {
        let conf = window.confirm(`Ar tikrai norite ištrinti ${workers[ind].vardas} ${workers[ind].pavarde}?`);
        if(conf){
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/workers/${workers[ind].id_Darbuotojas}`, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if(!res.ok){
                    throw Error(json.error);
                }
                setWorkers(w => w.filter((_,i) => i !== ind));
            } catch (err:any) {
                setErrors([err.message]);
            }
        }
    }

    return (
        <div className="box">
            {isLoading ?  <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <>
                <h2 className="center">Darbuotojų sąrašas:</h2>
                <div className="flex-end">
                    <button className="button" onClick={() => navigate("/newworker")}>Naujas</button>
                </div>
                {workers.length > 0 ? <table id="table">
                    <tbody>
                        <tr>
                            <th>Nr.</th>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Gimimo data</th>
                            <th>El. paštas</th>
                            <th>Operacijos</th>
                        </tr>
                        {workers.map((w, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{w.vardas}</td>
                                <td>{w.pavarde}</td>
                                <td>{w.gimimo_data.split('T')[0]}</td>
                                <td>{w.el_pastas}</td>
                                <td>
                                    <button onClick={() => navigate(`/editworker/${w.id_Darbuotojas}`)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button onClick={() => deleteWorker(ind)}><FontAwesomeIcon icon={faClose} /></button>
                                    <button onClick={() => navigate(`/worker/${w.id_Darbuotojas}`)}><FontAwesomeIcon icon={faInfo} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <h3>Nėra darbuotojų</h3>}
                {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
                <p key={ind}>{w}</p>
            ))}</div> : ""}
            </>}
        </div>
    )
}
export default ListPage;