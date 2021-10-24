import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { collection, addDoc, getDoc, doc, Timestamp, writeBatch } from 'firebase/firestore'
import { db } from '../services/firebase/firebase'
import { Link } from 'react-router-dom';



function Cart () {
  const { products, removeProduct, clear, getTotal} = useContext(CartContext)

  const confirmOrder = () => {
  
    const newOrder = {
        buyer: "Juan Perez",
        items: products,
        total: getTotal(),
        date: Timestamp.fromDate(new Date())
    }
                
    const batch = writeBatch(db)
    const outOfStock = []
        
    newOrder.items.forEach((prod, i) => {
        getDoc(doc(db, 'products', prod.id)).then(DocumentSnapshot => {
            if(DocumentSnapshot.data().stock >= newOrder.items[i].quantity) {
                batch.update(doc(db, 'products', DocumentSnapshot.id), {
                    stock: DocumentSnapshot.data().stock - newOrder.items[i].quantity
                })
            } else {
                outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
            }

        })
    })

    if(outOfStock.length === 0) {
        addDoc(collection(db, 'orders'), newOrder).then(() => {
            batch.commit().then(() => {
                console.log('status 200, orden procesada')
            })
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            clear()
        })
    }
}

  if (!products) {
      <h6> No hay productos</h6>
  } else {
      return (
        
        <div className= "text-center">  <h5>TOTAL COMPRA: ${ getTotal() }</h5>
        
        <Link to="/"><button onClick={() => clear()} type="button" className="btn btn-secondary btn-sm">Vaciar carrito</button></Link>
        <Link to="/"><button onClick={() => confirmOrder()} type="button" className="btn btn-secondary btn-sm">Confirmar Compra</button></Link>
            {products.map (prod => 
          
              <div className="col-3 text-center" >
                  <img src={`../../`+ prod.pictureUrl} className="card-img-top"  alt={prod.pictureUrl}></img>
                  <div className="card-body">
                      <h5 className="card-title">{prod.name}</h5>
                      <p className="card-text">{'$'+ prod.price}</p> 
                      <p className="card-text">{"cantidad: " + prod.quantity}</p>
                    
                      <button onClick={() => removeProduct(prod.id)} type="button" className="btn btn-secondary btn-sm">Eliminar</button>
                      
                  </div>
              </div>
            )}
        </div>
      )
    }
    
}

export default Cart;