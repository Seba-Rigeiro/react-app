import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";


const products = [
    {id: "1", name: "Toyota Corolla", description:"Toyota Corolla 1.8 Xei Mt Pack 140cv", price:"2.000.000" , pictureUrl: "images/products/corolla.jpg"},
    {id: "2", name: "Ford Fiesta", description:"Ford Fiesta Kinetic Design 1.6 Titanium 120cv", price:"1.500.000" , pictureUrl: "images/products/fiesta.jpg"},
    {id: "3", name: "Chevrolet Cruze", description:"Chevrolet Cruze II 1.4 Ltz At 153cv", price:"1.800.000" , pictureUrl: "images/products/cruze.jpg"},
    {id: "4", name: "Fiat Cronos", description:"", price:"1.700.000" , pictureUrl: "images/products/cronos.jpg"},
]

function getProduct () {
    return new Promise ( (res, rej) => {
        setTimeout(() => res (products), 2000);
    })
}


function ItemDetailContainer()  {
    const [product, setProduct] = useState([])
    useEffect (() => {
        const products = getProduct()
        products.then(listproduct => {
            const product = listproduct.find(prod => prod.id == 3)
            setProduct(product)
        })
        
    }, [])

    return (
        
        <ItemDetail prod={product} />
        
    )
}

export default ItemDetailContainer;