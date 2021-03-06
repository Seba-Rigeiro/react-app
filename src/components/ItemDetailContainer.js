import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from '../services/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'


/* const products = [
    {id: "1", name: "Toyota Corolla", category: "autos", description:"Toyota Corolla 1.8 Xei Mt Pack 140cv", price:"2.000.000" , pictureUrl: "images/products/corolla.jpg", stock: "10"},
    {id: "2", name: "Ford Fiesta", category: "autos", description:"Ford Fiesta Kinetic Design 1.6 Titanium 120cv", price:"1.500.000" , pictureUrl: "images/products/fiesta.jpg", stock: "20"},
    {id: "3", name: "Chevrolet Cruze", category: "autos", description:"Chevrolet Cruze II 1.4 Ltz At 153cv", price:"1.800.000" , pictureUrl: "images/products/cruze.jpg", stock: "18"},
    {id: "4", name: "Fiat Cronos", category: "autos", description:"Fiat Cronos 1.3 Gse Drive Pack Conectividad", price:"1.700.000" , pictureUrl: "images/products/cronos.jpg", stock: "24"},
    {id: "5", name: "Ford Ecosport", category: "camionetas", description:"Ford Ecosport 1.5 Titanium 123cv 4x2 Manual", price:"2.500.000" , pictureUrl: "images/products/ecosport.jpg", stock: "16"},
    {id: "6", name: "Chevrolet Tracker", category: "camionetas", description:"Chevrolet Tracker 1.2 Premier Turbo At", price:"2.800.000" , pictureUrl: "images/products/tracker.jpg", stock: "26"},
    {id: "7", name: "Honda HRV", category: "camionetas", description:"Honda HR-V 1.8 Ex-l 2wd Cvt l20", price:"3.200.000" , pictureUrl: "images/products/hrv.jpg", stock: "22"},
  ]

function getProduct () {
    return new Promise ( (res, rej) => {
        setTimeout(() => res (products), 2000);
    })
} */

function ItemDetailContainer()  {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
            getDoc(doc(db, 'products' , id))
            .then((querySnapshot) => {
                const product = { id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(product)
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
            return (() => {
                setLoading(true)
                setProduct([])
            })
        },[id])

    /*  if (product.length == 0) {
            return (<img src="../images/spinning-loading.gif"></img>
            )
        } */

        return (
            <div>
            { loading ? <img src="../images/spinning-loading.gif"></img> : <ItemDetail prod={product} />}
            </div>
        )
}

export default ItemDetailContainer;