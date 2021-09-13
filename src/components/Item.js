import { useEffect, useState } from "react";



function Item ({prod}) {
    

    return (
        
        <div className="col-3 text-center" >
            <img src={prod.pictureUrl} className="card-img-top"  alt={prod.pictureUrl}></img>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                <p className="card-text">$ {prod.price}</p>
                <a href="#" className="btn btn-secondary btn-sm">Ver Detalle</a>
            </div>
        </div>
       
    )
}

export default Item;