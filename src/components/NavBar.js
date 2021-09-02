import CartWidget from "./CartWidget";

function NavBar () {
    return (
       
            <nav className="navbar navbar-dark bg-secondary navbar-expand-md">
               
               <div className="container">
               
                    <a className="navbar-brand">
                       <img src="images/logo.png" alt="logo del sitio" width="130"></img> Auto Sell
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-menu" 
                            aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                            
                            <div className="collapse navbar-collapse" id="main-menu">
                                <ul className="navbar-nav me-auto ms-auto">
                                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Vehiculos</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link" href="#">Registrate</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                                </ul>
                            </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
                
            </nav>
    )       
}

export default NavBar;