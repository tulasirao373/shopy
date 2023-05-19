import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Products from './component/Products';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
    <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Products />
    </Switch>
 
    </>
  );
}

export default App;
