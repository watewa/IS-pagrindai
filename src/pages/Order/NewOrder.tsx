import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const NewOrderPage = () => {

    const navigate = useNavigate();
    const [status, setStatus] = useState("Nepatvirtintas");
    const [customer, setCustomer] = useState<Number>();
    var items0: string = 'x';
    var items1: string = 'x';
    var items2: string = 'x';
    var quantities0: string = 'x';
    var quantities1: string = 'x';
    var quantities2: string = 'x';

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { user }: any = useAuthContext();

    const CreateOrder = async (vnt: any) => {
        vnt.preventDefault();
        let errs: Array<string> = [];
        let a: Array<string> = [];
        let b: Array<string> = [];
        a.push(items0)
        a.push(items1)
        a.push(items2)
        b.push(quantities0)
        b.push(quantities1)
        b.push(quantities2)
        if (errs.length === 0 && !isLoading) {
            setIsLoading(true);
            const date = new Date().toJSON().slice(0, 19).replace('T', ' ');
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
                        klientas: customer,
                        prekes: a,
                        kiekiai: b
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

                    <label>Prekė</label>
                    <select name="item" id="item" onChange={a => [items0 = a.target.value]}>
                        <option value="x">-</option>
                        <option value="1">Tulpė</option>
                        <option value="2">Rožė</option>
                        <option value="3">Monstera</option>
                        <option value="4">Molinis vazonas</option>
                    </select>

                    <label>Kiekis</label>
                    <input type="number" onChange={b => [quantities0 = b.target.value]}/>
                    
                    <label>Prekė</label>
                    <select name="item" id="item" onChange={a => [items1 = a.target.value]}>
                        <option value="x">-</option>
                        <option value="1">Tulpė</option>
                        <option value="2">Rožė</option>
                        <option value="3">Monstera</option>
                        <option value="4">Molinis vazonas</option>
                    </select>

                    <label>Kiekis</label>
                    <input type="number" onChange={b => [quantities1 = b.target.value]}/>
                    
                    <label>Prekė</label>
                    <select name="item" id="item" onChange={a => [items2 = a.target.value]}>
                        <option value="x">-</option>
                        <option value="1">Tulpė</option>
                        <option value="2">Rožė</option>
                        <option value="3">Monstera</option>
                        <option value="4">Molinis vazonas</option>
                    </select>

                    <label>Kiekis</label>
                    <input type="number" onChange={b => [quantities2 = b.target.value]}/>
                </div>
                <button className="button" onClick={e => CreateOrder(e)}>Pateikti</button>
            </form>
        </div>
    )
}
export default NewOrderPage;