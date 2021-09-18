import ItemCount from "./ItemCount";

function ItemDetail ({prod}) {
        
    return (
        <div className="d-flex justify-content-center">
            <div className="col-6 text-center" >
                <img src={`../../`+ prod.pictureUrl} className="card-img-top"  alt={prod.pictureUrl}></img>
                <div className="card-body">
                    <h3 className="card-title">{prod.name}</h3>
                    <p className="card-text">{prod.description}</p>
                    <h5 className="card-text">$ {prod.price}</h5>
                    <div><ItemCount/></div>
                </div>
            </div>
        </div>
       
    )
}

export default ItemDetail;