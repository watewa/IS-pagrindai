import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const EditStore = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<any>>([]);
    const { user }: any = useAuthContext();
    const [isFetching, setIsFetching] = useState(true);
    const { id } = useParams();
    
    const CreateStore = async (vnt: any) => {
        vnt.preventDefault();
        let errs: Array<string> = [];
        setErrors([]);
        if (name.length === 0) {
            errs.push("Vardas nenustatytas");
        }
        if (address.length === 0) {
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
                        vardas: name,
                        adresas: address
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

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/workers/users`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if (!res.ok) {
                    throw Error(json.error);
                }
                setUsers(json.users);
            } catch (err: any) {
                setErrors(w => [...w, err.message]);
            }
        }
        const fetchStore = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/api/store/worker/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await res.json();
                if (!res.ok) {
                    throw Error(json.error);
                }
                setName(json.worker.vardas);
                setAddress(json.worker.adresas);
                
            } catch (err: any) {
                setErrors(w => [...w, err.message]);
            } finally {
                setIsFetching(false);
            }
        }
        fetchStore();
        fetchUsers();
    }, [user, id]);

    return (
        <div className="box">
            <h2>Nauja parduotuvė</h2>
            <form method="post">
                <div className="grid form center">
                    <label htmlFor="name">Vadovas</label>
                    <input type="text" name="name" value={name} onChange={w => setName(w.target.value)} />

                    <label htmlFor="address">Adresas</label>
                    <input type="text" name="address" value={address} onChange={w => setAddress(w.target.value)} />

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