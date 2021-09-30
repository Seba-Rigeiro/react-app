import { createContext, useState } from 'react'

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [products, setCartProducts] = useState([])
    console.log(products)
    const addProduct = (prod, count) => {
        const newProduct = {
            ...prod,
            quantity: count
        }

        if(!isInCart(prod.id)) {
            setCartProducts([...products, newProduct])
        } else {
            const newProducts = products.map(product => {
                if(product.id == prod.id) {
                    const newProduct = {
                        ...product,
                        quantity: product.quantity + count
                    }
                    return newProduct
                } else {
                    return product
                }
            })
            setCartProducts(newProducts)
        }
    }

    const removeProduct = (id) => {
        const newProducts = products.filter(prod => prod.id !== id)
        setCartProducts(newProducts)
    }

    const clear = () => {
        setCartProducts ([]);
    }

    const isInCart = (id) => {
     /*   products.find(prod => {
           if (prod.id == id) {
               return true
           }
        })
    } */
    return products.some(prod => prod.id === id)
    }
    
    return (
        <CartContext.Provider  value={{ addProduct, removeProduct, clear, products }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;