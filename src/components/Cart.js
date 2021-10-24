import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';


function Cart () {
  const { products, removeProduct, clear, getTotal} = useContext(CartContext)
  if (!products) {
      <h6> No hay productos</h6>
  } else {
      return (
        
        <div className= "text-center">  <h5>TOTAL COMPRA: ${ getTotal() }</h5>
            {products.map (prod => 
          
              <div className="col-3 text-center" >
                  <img src={`../../`+ prod.pictureUrl} className="card-img-top"  alt={prod.pictureUrl}></img>
                  <div className="card-body">
                      <h5 className="card-title">{prod.name}</h5>
                      <p className="card-text">{'$'+ prod.price}</p> 
                      <p className="card-text">{"cantidad: " + prod.quantity}</p>
                    
                      <button onClick={() => removeProduct(prod.id)} type="button" className="btn btn-secondary btn-sm">Eliminar</button>
                      <Link to="/"><button onClick={() => clear()} type="button" className="btn btn-secondary btn-sm">Vaciar carrito</button></Link>
                  </div>
              </div>
            )}
        </div>
      )
    }
    
}

export default Cart;