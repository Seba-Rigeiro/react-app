import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer.js';




function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <section>  
      <ItemListContainer />
      <ItemCount />
      </section>
    
    </div>

  );
}

export default App;
