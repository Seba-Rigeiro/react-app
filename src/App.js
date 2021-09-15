import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <header>
            <NavBar />
          </header>
        <Switch>
          <section>
            <Route exact path="/">  
          <ItemListContainer />
            </Route>
          <ItemDetailContainer />
         
          </section>
        </Switch>
        </div>
    </BrowserRouter>

  );
}

export default App;
