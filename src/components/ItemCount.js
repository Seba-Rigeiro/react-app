import { useState } from 'react';

function ItemCount () {
    const stock = 20;
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
           {/*  <img src="" className="" /> */}
            <div className="card-body">
                <h5 className="card-subtitle">Toyota</h5>
                <div className="d-inline-flex p-2 bd-highlight">                
                    <button type="button" className="btn btn-secondary btn-sm" onClick={addItem}>+</button>
                    <p className="card-text m-2">{count}</p>
                    <button type="button" className="btn btn-secondary btn-sm "onClick={removeItem}>-</button>
                </div>
                <p>stock: {stock}</p>
                <button type="button" className="btn btn-secondary btn-sm">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;