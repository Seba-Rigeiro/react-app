import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail ({prod}) {
    const [quantity, setQuantity] = useState(0)
       
       
    return (
        <div className="d-flex justify-content-center">
            <div className="col-6 text-center" >
                <img src={`../../`+ prod?.pictureUrl} className="card-img-top"  alt={prod?.pictureUrl}></img>
                <div className="card-body">
                    <h3 className="card-title">{prod?.name}</h3>
                    <p className="card-text">{prod?.description}</p>
                    <h5 className="card-text">$ {prod?.price}</h5>
                    <div><ItemCount prod={prod} setQuantity={setQuantity}/></div>
                    <Link to="/cart"><a> <button  type="button" className="btn btn-secondary btn-sm">ir al Carrito</button></a></Link>
                </div>
            </div>
        </div>
       
    )
}

export default ItemDetail;