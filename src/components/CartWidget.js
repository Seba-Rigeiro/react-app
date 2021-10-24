import { useContext } from "react";
import CartContext from '../context/CartContext'

function CartWidget () {
    const { getQuantity } = useContext(CartContext)

    return (
        <button>
            {/* <FontAwesomeIcon icon={faCartArrowDown}/> */}
            <img src='../images/cart-icon.jpg' width='30'></img>
            { getQuantity() }
        </button>
    )
}

export default CartWidget;