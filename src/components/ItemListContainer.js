import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { db } from '../services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const { id } = useParams()
    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect (() => {
        setLoading(true)
        if (id) {
            getDocs(query(collection(db, 'products'), where('category', '==', id)))
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setListProduct(products)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })

        } else {
            getDocs(collection(db, 'products'))
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setListProduct(products)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [id])

    return (
        <div className="container">
            <div className="row align-items-start py-4">
             {loading ? <img src="../images/spinning-loading.gif"></img> : <ItemList products={listProduct}/>}
           </div> 
       </div>             
    )
}

export default ItemListContainer;