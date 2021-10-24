import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import CartContext from '../context/CartContext'

function NavBar ({productsCategory}) {
    const { getQuantity } = useContext(CartContext)
    return (
       
            <nav className="navbar navbar-dark bg-secondary navbar-expand-md">
               
               <div className="container">
               
               <Link to="/"> <a className="navbar-brand">
                                <img src="images/logo.png" alt="logo del sitio" width="130"></img> Auto Sell
                            </a>  </Link>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-menu" 
                            aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                            
                            <div className="collapse navbar-collapse" id="main-menu">
                                <ul className="navbar-nav me-auto ms-auto">
                                    {productsCategory.map(category => <NavLink key={category.id} to={`/category/${category.name}`}> <li className="nav-item"><a className="nav-link">{category.name}</a></li></NavLink>)}
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link" href="#">Registrate</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                                </ul>
                            </div>
                    <div>
                       { getQuantity() >0 && <Link to="/cart"> <CartWidget /> </Link> }
                    </div>
                </div>
                
            </nav>
    )       
}

export default NavBar;