import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const EditOrderPage = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("Nepatvirtintas");
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams();
    const { user }: any = useAuthContext();

    const EditOrder = async (vnt: any) => {
        vnt.preventDefault();
        let errs: Array<string> = [];

        if (errs.length === 0 && !isLoading) {
            setIsLoading(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/orders/update`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        oid: id,
                        busena: status
                    })
                });
                const json = await res.json();
                if (res.ok) {
                    navigate("/order");
                } else {
                    throw Error(json.error);
                }
            } catch (err: any) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="box">
           <h2>Keisti užsakymo būseną</h2>
           <form method="post">
                <div className="grid form center">
                    <label>Būsena</label>
                    <select name="status" id="status" onChange={(w) => setStatus(w.target.value)}>
                        <option value="Nepatvirtintas">Nepatvirtintas</option>
                        <option value="Patvirtintas">Patvirtintas</option>
                        <option value="Įvykdytas">Įvykdytas</option>
                        <option value="Atšauktas">Atšauktas</option>
                    </select>
                </div>
                <button className="button" onClick={e => EditOrder(e)}>Pateikti</button>
            </form>
        </div>
    )
}
export default EditOrderPage;