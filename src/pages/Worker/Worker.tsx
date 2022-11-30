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
                setWorker(json.worker);
                if (!res.ok) {
                    throw Error("Nepavyko gauti darbuotojo");
                }
            } catch (err: any) {
                setErrors(w => [...w, err.message]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchWorker();
    }, [user, id])

    return (
        <div className="box">
            {isLoading ? <h2>Kraunama...</h2> : <>
                <h2 className="center">Sveiki sugrįže {worker.vardas} {worker.pavarde}!</h2>
                <h3 className="center">Jūsų šiandienos tvarkaraštis:</h3>
                <div>
                    <table id="table">
                        <tbody>
                            <tr>
                                <th>Nr.</th>
                                <th>Pavadinimas</th>
                                <th>Pradėti</th>
                                <th>Trukmė (min)</th>
                                <th>Paaiškinimas</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Vazonai</td>
                                <td>12:25</td>
                                <td>30</td>
                                <td>Paimti vazonus ir juos išvalyti.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tulpes</td>
                                <td>13:00</td>
                                <td>14</td>
                                <td>Palaistyti visas tulpes.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
                    <p key={ind}>{w}</p>
                ))}</div> : ""}
            </>}
        </div>
    )
}
export default Worker;