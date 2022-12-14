import { useState } from "react";

const SendEmail = () => {
    const [buyer, setBuyer] = useState("");
    const [ordernum, setOrderNum] = useState("");
    const [email, setEmail] = useState("");

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
            <button className="button" onClick={e => SendEmail()}>Siųsti</button>
        </form>
    </div>
)
}

export default SendEmail;

