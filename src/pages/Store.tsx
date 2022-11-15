const Store = () => {
    return (
        <div>
            <h2>Parduotuvių valdymo skydas</h2>
            <div className= "container">
                <table id = "table">
                    <tr>
                        <th>Nr</th>
                        <th>Parduotuvės pavadinimas</th>
                        <th>Parduotuvės adresas</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Centrinė</td> 
                        <td>Gričiupio g. 1</td> 
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Vakarinė</td> 
                        <td>Karaliaus Mindaugo pr. 1</td> 
                    </tr>
                </table>
                <nav className="button-group">
                  <button>One</button>
                  <button>Two</button>
                  <button>Three is really long</button>
                  <button>Four</button>
                </nav>
            </div>
            
            
            
        </div>
        
    )
    
}
export default Store;