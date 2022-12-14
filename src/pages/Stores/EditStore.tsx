import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const EditStore = () => {
    const navigate = useNavigate();
    const [vadovas, setName] = useState("");
    const [adresas, setAddress] = useState("");
    const [errors, setErrors] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { user }: any = useAuthContext();
    const { id } = useParams();
    
    const CreateStore = async (vnt: any) => {
        vnt.preventDefault();
        let errs: Array<string> = [];
        setErrors([]);
        if (vadovas.length === 0) {
            errs.push("Vardas nenustatytas");
        }
        if (adresas.length === 0) {
            errs.push("Adresas nenustatytas");
        }
        setErrors(w => [...w, ...errs]);

        if (errs.length === 0 && !isLoading) {
            setIsLoading(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/store/edit`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        uid: id,
                        vadovas: vadovas,
                        adresas: adresas
                    })
                });
                const json = await res.json();
                if (res.ok) {
                    navigate("/store");
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
            <h2>Nauja parduotuvės informacija</h2>
            <form method="post">
                <div className="grid form center">
                    <label htmlFor="vadovas">Vadovas</label>
                    <input type="text" name="vadovas" value={vadovas} onChange={w => setName(w.target.value)} />

                    <label htmlFor="adresas">Adresas</label>
                    <input type="text" name="adresas" value={adresas} onChange={w => setAddress(w.target.value)} />

                </div>
                <button className="button" disabled={isLoading} onClick={e => CreateStore(e)}>Pateikti</button>
            </form>
            {errors.length > 0 ? <div className="error">{errors.map((w, ind) => (
                <p key={ind}>{w}</p>
            ))}</div> : ""}
        </div>
    )
}
export default EditStore;