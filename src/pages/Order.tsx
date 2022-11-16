import './Order.css';

type ItemObject = {
    Name: string;
    Quantity: number;
}

type OrderObject = {
    Id: number;
    Date: string;
    Items: ItemObject[];
    Total: number;
}

var MyItems: ItemObject[] = [
    {Name: "Rožė", Quantity: 5},
    {Name: "Orchidėja", Quantity: 1},
    {Name: "Tulpė", Quantity: 5},
    {Name: "Kardelis", Quantity: 5}
]

var MyOrders: OrderObject[] = [
    {Id: 123456787, Date: '2022-12-01', Items: [{Name:"Tulpė", Quantity:2}, {Name:"Rožė", Quantity:2}, {Name:"Gvazdikas", Quantity:2}], Total: 9.30},
    {Id: 123456788, Date: '2022-12-01', Items: [{Name:"Rožė", Quantity:2}, {Name:"Gvazdikas", Quantity:1}], Total: 4.65},
    {Id: 123456789, Date: '2022-12-01', Items: [{Name:"Tulpė", Quantity:2}], Total: 3.10}
]

const OrderBasket = MyItems.map((ItemObject) => (
    <div className="basketCard" key={ItemObject.Name}>
        <div className="basketCardBody">
            <div className="basketCardName">
                <b>Prekės pavadinimas</b>
                <div>{ItemObject.Name}</div> 
            </div>
            <div className="basketCardQuantity">   
                <label>Kiekis</label>
                <div className="QuantityDropdown">
                    <input type="number" defaultValue={ItemObject.Quantity} min='1' required></input>
                </div>
            </div>
            <div className="basketCardButton">
                <button>Pašalinti</button>
            </div>
        </div>
    </div>
))

const OrderHistory = MyOrders.map((OrderObject) => (
    <div className="orderCard" key={OrderObject.Id}>
        <div className="orderCardBody">
            <div className="orderCardId">
                <b>Užsakymo numeris</b>
                <div>{OrderObject.Id}</div> 
            </div>
            <div className="orderCardDate">
                <b>Užsakymo data</b>
                <div>{OrderObject.Date}</div> 
            </div>
            <div className="orderCardItem">
                <b>Pirkiniai</b>
                <div>{OrderObject.Items.map((ItemObject) => (<div key={ItemObject.Name}>{ItemObject.Name} x{ItemObject.Quantity}</div>))}</div>
            </div>
            <div className="orderCardTotal">
                <b>Suma</b>
                <div>{OrderObject.Total}</div>
            </div>
            <div className="orderCardButton">
                <button>Tvarkyti</button>
                <button>Atšaukti</button>
            </div>
        </div>
    </div>
))

const Order = () => {
    
    return (
        <div>
            <h1>Peržiūrėkite ir tvarkykite savo užsakymus</h1>
            <hr></hr>
            <div>
                <div>
                    <h2>Krepšelis</h2>
                    <div>{OrderBasket}</div>
                    <div className="confirm">
                        <button type="button">Tvirtinti užsakymą {">>"}</button>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h2>Užsakymo sekimas</h2>
                    <div className="confirm">
                        <button type="button">Sekti užsakymą {">>"}</button>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h2>Užsakymų istorija</h2>
                    <div>{OrderHistory}</div>
                </div>
            </div>
        </div>
    )
}
export default Order;