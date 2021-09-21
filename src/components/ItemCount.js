import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCount ({stock, click}) {
    
    const [ count, setCount ] = useState (0)
    const addItem = () => {
        if (count < stock) {
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
                <p>stock: {stock}</p>
                {/* <Link to="/cart"> */} <button onClick={() => click(count)} type="button" className="btn btn-secondary btn-sm">Agregar al Carrito</button>{/* </Link> */}
            </div>
        </div>
    )
}

export default ItemCount;