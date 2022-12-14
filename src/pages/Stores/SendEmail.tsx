import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const SendEmail = () => {
    const [buyer, setBuyer] = useState("");
    const [ordernum, setOrderNum] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { user }: any = useAuthContext();

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
            <button className="button" disabled={isLoading} onClick={e => SendEmail()}>Siųsti</button>
        </form>
        {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
            <p key={ind}>{w}</p>
        ))}</div> : ""}
    </div>
)
}

export default SendEmail;

