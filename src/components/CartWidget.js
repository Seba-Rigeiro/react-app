import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function CartWidget () {
    return (
        <div>
            {/* <FontAwesomeIcon icon={faCartArrowDown}/> */}
            <img src='images/cart-icon.jpg' width='30'></img>
        </div>
    )
}

export default CartWidget;