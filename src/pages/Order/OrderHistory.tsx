import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const ListPage = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState<Array<any>>([])
    const { user }: any = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState<Array<string>>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/orders/${user._id}`, {
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
        fetchOrders()
    }, [user, id])

    return (
        <div className="box">
            {isLoading ? <h2>Kraunama...</h2> : <>
                <h2 className="center">Užsakymų istorija:</h2>
                {orders.length > 0 ? <table id="table">
                    <tbody>
                        <tr>
                            <th>Užsakymo nr.</th>
                            <th>Data</th>
                            <th>Būsena</th>
                            <th>Užsakė</th>
                        </tr>
                        {orders.map((w, ind) => (
                            <tr key={ind}>
                                <td>{w.nr}</td>
                                <td>{w.sukurimo_data.split('T')[0]}</td>
                                <td>{w.busena}</td>
                                <td>{w.fk_Klientasid_Klientas}</td>
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