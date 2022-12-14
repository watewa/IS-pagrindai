import { useNavigate } from "react-router-dom";
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const ListPage = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState<Array<any>>([])
    const { user }: any = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState<Array<string>>([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/orders/`, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if (res.ok) {
                    console.log(json);
                    setOrders(json.orders);
                } else {
                    throw Error(json.error);
                }
            } catch (err:any) {
                setErrors([err.message]);
                console.log(err);
            }
            setIsLoading(false);
        }
        fetchOrders();
    }, [user])

    const deleteOrder = async (ind: number) => {
        let conf = window.confirm(`Ar tikrai norite ištrinti ${ind}?`);
        if(conf){
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/orders/${ind}`, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if(!res.ok){
                    throw Error(json.error);
                }
                setOrders(w => w.filter((_,i) => i !== ind));
            } catch (err:any) {
                setErrors([err.message]);
            }
        }
        const fetchOrders = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/orders/`, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if (res.ok) {
                    console.log(json);
                    setOrders(json.orders);
                } else {
                    throw Error(json.error);
                }
            } catch (err:any) {
                setErrors([err.message]);
                console.log(err);
            }
            setIsLoading(false);
        }
        fetchOrders();
    }

    return (
        <div className="box">
            {isLoading ? <h2>Kraunama...</h2> : <>
                <h2 className="center">Užsakymų sąrašas:</h2>
                <div className="flex-end">
                    <button className="button" onClick={() => navigate("/neworder")}>Naujas</button>
                </div>
                {orders.length > 0 ? <table id="table">
                    <tbody>
                        <tr>
                            <th>Užsakymo nr.</th>
                            <th>Data</th>
                            <th>Būsena</th>
                            <th>Užsakė</th>
                            <th>Operacijos</th>
                        </tr>
                        {orders.map((w, ind) => (
                            <tr key={ind}>
                                <td>{w.nr}</td>
                                <td>{w.sukurimo_data.split('T')[0]}</td>
                                <td>{w.busena}</td>
                                <td>{w.fk_Klientasid_Klientas}</td>
                                <td>
                                    <button onClick={() => navigate(`/editorder/${w.id_Uzsakymas}`)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button onClick={() => deleteOrder(w.id_Uzsakymas)}><FontAwesomeIcon icon={faClose} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <h3>Nėra užsakymų</h3>}
                {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
                <p key={ind}>{w}</p>
            ))}</div> : ""}
            </>}
        </div>
    )
}
export default ListPage;