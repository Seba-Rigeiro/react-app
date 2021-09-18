import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

const productsCategory = [
  {id: "1", name: "autos"},
  {id: "2", name: "camionetas"},
]


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <div className="App">
            <header>
              <NavBar productsCategory={productsCategory} />
            </header>
          
            <section>
              <Route exact path="/">  
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:id">  
                <ItemListContainer />
              </Route>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
            </section>
          </div>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
