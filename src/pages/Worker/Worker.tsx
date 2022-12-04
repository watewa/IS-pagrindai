import { useEffect, useState } from "react";
import {
    useParams,
} from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const Worker = () => {
    const { id } = useParams();
    const [worker, setWorker] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState<Array<string>>([]);
    const [tasks, setTasks] = useState<Array<any>>([]);
    const [isFetchingTasks, setIsFetchingTasks] = useState(true);
    const { user }: any = useAuthContext();

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/workers/worker/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if (!json.worker) {
                    throw Error("Darbuotojo duomenys nerasti");
                }
                setWorker(json.worker);
                if (!res.ok) {
                    throw Error("Nepavyko gauti darbuotojo");
                }
                setIsLoading(false);
            } catch (err: any) {
                setErrors(w => [...w, err.message]);
            }
        }
        const fetchTasks = async () => {
            try {
                setIsFetchingTasks(true);
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/workers/schedule`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                console.log(json.uzd);
                setTasks(json.uzd);
            } catch (err: any) {
                setErrors(w => [...w, err.message]);
            } finally {
                setIsFetchingTasks(false);
            }
        }

        fetchWorker();
        fetchTasks();
    }, [user, id])

    const getTime = (val : string) => {
        return val.split('T')[1].slice(0, 5);
    }

    return (
        <div className="box">
            {isLoading ? <h2>Kraunama...</h2> : <>
                <h2 className="center">Sveiki sugrįže {worker.vardas} {worker.pavarde}!</h2>
                <h3 className="center">Jūsų šiandienos tvarkaraštis:</h3>
                <div>
                    {isFetchingTasks ? <h2>Kraunama...</h2> : <>
                        <table id="table">
                            <tbody>
                                <tr>
                                    <th>Nr.</th>
                                    <th>Pavadinimas</th>
                                    <th>Pradėti</th>
                                    <th>Trukmė (min)</th>
                                    <th>Paaiškinimas</th>
                                </tr>
                                {tasks.map((w, ind) => 
                                    <tr key={ind}>
                                        <td>{ind+1}</td>
                                        <td>{w.pavadinimas}</td>
                                        <td>{getTime(w.pradzios_laikas)}</td>
                                        <td>{w.trukme}</td>
                                        <td>{w.paaiskinimas}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>}
                </div>
            </>}
            {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
                <p key={ind}>{w}</p>
            ))}</div> : ""}
        </div>
    )
}
export default Worker;