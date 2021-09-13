import { useEffect, useState } from "react";
import Item from './Item';

const products = [
    {id: "1", name: "Toyota Corolla", description:"", price:"2.000.000" , pictureUrl: "images/products/corolla.jpg"},
    {id: "2", name: "Ford Fiesta", description:"", price:"1.500.000" , pictureUrl: "images/products/fiesta.jpg"},
    {id: "3", name: "Chevrolet Cruze", description:"", price:"1.800.000" , pictureUrl: "images/products/cruze.jpg"},
    {id: "4", name: "Fiat Cronos", description:"", price:"1.700.000" , pictureUrl: "images/products/cronos.jpg"},
]

function getProduct () {
    return new Promise ( (res, rej) => {
        setTimeout(() => res (products), 2000);
    })
}

function ItemList () {
    const [listProduct, setListProduct] = useState([])
    useEffect (() => {
        const product = getProduct()
        product.then(product => setListProduct (product))
    }, [])
    
    return (
        listProduct.map (prod => <Item key={prod.id} prod={prod} />)
        
        )
}

export default ItemList;