import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const SendEmail = () => {
    const [buyer, setBuyer] = useState("");
    const [ordernum, setOrderNum] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<Array<string>>([]);
    const { user }: any = useAuthContext();

    const send = async (w:any) => {
        w.preventDefault();
        setErrors([]);
        let errs: Array<string> = [];
        if (buyer.length === 0) {
            errs.push('Neivestas pirkėjas');
        }
        if (ordernum.length === 0) {
            errs.push('Neivestas užsakymo numeris');
        }
        if (email.length === 0) {
            errs.push('Neivestas El. paštas');
        }
        if (errs.length === 0) {
            try {
                const rs = await fetch(`${process.env.REACT_APP_APIURL}/api/store/sendemail`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        vadovas: buyer,
                        adresas: email,
                        ordernum: ordernum
                    })
                })
                const json = await rs.json();
                if(rs.ok){
                    setErrors(['Sekmingai išsiusta']);
                } else {
                    setErrors(['Nepavyko išsiusti laiško']);
                    console.log(json);
                }
            } catch (err: any) {
                console.log(err);
                setErrors([err.message]);
            }
        } else {
            setErrors(errs);
        }
    }
    return (
        <div className="box">
            <h2>Naujas darbuotojas</h2>
            <form method="post">
                <div className="grid form center">
                    <label htmlFor="buyer">Pirkėjas</label>
                    <input type="text" name="buyer" value={buyer} onChange={w => setBuyer(w.target.value)} />

                    <label htmlFor="ordernum">Užsakymo nr.</label>
                    <input type="text" name="ordernum" value={ordernum} onChange={w => setOrderNum(w.target.value)} />

                    <label htmlFor="date">El. paštas</label>
                    <input type="email" name="email" value={email} onChange={w => setEmail(w.target.value)} />


                </div>
                <button className="button" onClick={w => send(w)}>Siųsti</button>
            </form>
            {errors.length === 0 ? '' : errors.map(w => (
                <p>{w}</p>
            ))}
        </div>
    )
}

export default SendEmail;

