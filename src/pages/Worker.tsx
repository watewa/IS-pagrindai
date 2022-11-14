const Worker = () => {
    

    return (
        <div>
            <h2 className="center">Sveiki sugrįže Vardas Pavardė!</h2>
            <h3 className="center">Jūsų šiandienos tvarkaraštis:</h3>
            <div>
                <table id="table">
                    <tr>
                        <th>Nr.</th>
                        <th>Pavadinimas</th>
                        <th>Pradėti</th>
                        <th>Trukmė (min)</th>
                        <th>Paaiškinimas</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Vazonai</td>
                        <td>12:25</td>
                        <td>30</td>
                        <td>Paimti vazonus ir juos išvalyti.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tulpes</td>
                        <td>13:00</td>
                        <td>14</td>
                        <td>Palaistyti visas tulpes.</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Worker;