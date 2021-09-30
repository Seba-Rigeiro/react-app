import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

function ItemCount ({prod, setQuantity}) {
    const { addProduct } = useContext(CartContext)
    
    const [ count, setCount ] = useState (0)
    
    const addItem = () => {
        if (count < prod?.stock) {
            setCount (count + 1)
        }
    }
    const removeItem = () => {
        if (count > 0) {
            setCount (count - 1)
        }
    }
       
    return (
        <div className=" p-3 text-center">
            <div className="card-body">
                <div className="d-inline-flex p-2 bd-highlight">                
                    <button type="button" className="btn btn-secondary btn-sm "onClick={removeItem}>-</button>
                    <p className="card-text m-2">{count}</p>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={addItem}>+</button>
                </div>
                <p>stock: {prod?.stock}</p>
                <button onClick={() => addProduct(prod, count)} type="button" className="btn btn-secondary btn-sm">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;