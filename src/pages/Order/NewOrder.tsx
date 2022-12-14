import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const NewOrderPage = () => {

    const navigate = useNavigate();
    const [date, setDate] = useState(new Date().toJSON().slice(0, 19).replace('T', ' '));
    const [status, setStatus] = useState("Nepatvirtintas");
    const [customer, setCustomer] = useState<Number>();
    
    const [errors, setErrors] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { user }: any = useAuthContext();

    const CreateOrder = async (vnt: any) => {
        vnt.preventDefault();
        let errs: Array<string> = [];
        setErrors([]);

        setErrors(w => [...w, ...errs]);

        if (errs.length === 0 && !isLoading) {
            setIsLoading(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/orders/new`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: date,
                        busena: status,
                        klientas: customer
                    })
                });
                const json = await res.json();
                if (res.ok) {
                    navigate("/order");
                } else {
                    throw Error(json.error);
                }
            } catch (err: any) {
                setErrors(w => [...w, err.message]);
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="box">
            <h2>Naujas užsakymas</h2>
            <form method="post">
                <div className="grid form center">
                    <label>Būsena</label>
                    <select name="status" id="status" onChange={(o) => setStatus(o.target.value)}>
                        <option value="Nepatvirtintas">Nepatvirtintas</option>
                        <option value="Patvirtintas">Patvirtintas</option>
                        <option value="Įvykdytas">Įvykdytas</option>
                        <option value="Atšauktas">Atšauktas</option>
                    </select>

                    <label>Kliento ID</label>
                    <input type="number" onChange={w => setCustomer(parseInt(w.target.value))}/>
                </div>
                <button className="button" onClick={e => CreateOrder(e)}>Pateikti</button>
            </form>
        </div>
    )
}
export default NewOrderPage;