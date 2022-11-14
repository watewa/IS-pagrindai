const ListPage = () => {

    return (
        <div>
            <h2 className="center">Darbuotojų sąrašas:</h2>
            <table id="table">
                <tr>
                    <th>Nr.</th>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>Gimimo data</th>
                    <th>El. paštas</th>
                    <th>Ištrinti</th>
                    <th>Redaguoti</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Jonas</td>
                    <td>Petraitis</td>
                    <td>1989-07-16</td>
                    <td>jonas@gmail.com</td>
                    <td><button>Trinti</button></td>
                    <td><button>Redaguoti</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jonas</td>
                    <td>Petraitis</td>
                    <td>1989-07-16</td>
                    <td>jonas@gmail.com</td>
                    <td><button>Trinti</button></td>
                    <td><button>Redaguoti</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jonas</td>
                    <td>Petraitis</td>
                    <td>1989-07-16</td>
                    <td>jonas@gmail.com</td>
                    <td><button>Trinti</button></td>
                    <td><button>Redaguoti</button></td>
                </tr>
            </table>
        </div>
    )
}
export default ListPage;