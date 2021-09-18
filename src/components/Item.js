import { Link } from "react-router-dom";

function Item ({prod}) {
    
    return (
        <div className="col-3 text-center" >
            <img src={`../../`+ prod.pictureUrl} className="card-img-top"  alt={prod.pictureUrl}></img>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{'$'+ prod.price}</p>
                <Link to={`/item/${prod.id}`} > <a className="btn btn-secondary btn-sm">Ver Detalle</a></Link>
            </div>
        </div>
    )
}

export default Item;