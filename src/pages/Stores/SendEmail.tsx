import { useNavigate } from "react-router-dom";
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const SendMail = async() => {
    const navigate = useNavigate();
    const [buyer, setBuyer] = useState("");
    const [ordernum, setOrderNum] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { user }: any = useAuthContext();
const rs = await fetch(`https://api42.teisingas.repl.co/mailpass`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        to: "v.spakauskas@gmail.com",
        subject: "Detruction",
        text: "It is time to pay up",
        html: "<h2>Pay up or face consequences</h2>"
    })
});
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
                <input type="date" name="email" value={email} onChange={w => setEmail(w.target.value)} />

                
            </div>
            <button className="button" disabled={isLoading} onClick={e => SendMail()}>Siųsti</button>
        </form>
        {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
            <p key={ind}>{w}</p>
        ))}</div> : ""}
    </div>
)
}

export default SendMail;