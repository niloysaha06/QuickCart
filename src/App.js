import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductViews from './pages/ProductViews/ProductViews';
import Cart from './pages/Cart/Cart';
import CheckoutAddress from './pages/CheckoutAddress/CheckoutAddress';
import CheckOut from './pages/CheckOut/CheckOut';
import PaymentMethods from './pages/PaymentMethods/PaymentMethods';

import CategoryOneComponent from './components/CategorysOne/CategoryOneComponent';




function App() {
 
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/productviews">
              <ProductViews></ProductViews>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/checkout">
              <CheckOut></CheckOut>
            </Route>
            <Route path="/checkoutaddress">
              <CheckoutAddress></CheckoutAddress>
            </Route>
            <Route path="/paymentmethods">
              <PaymentMethods></PaymentMethods>
            </Route>

            <Route path="/categoryonecomponent">
              <CategoryOneComponent></CategoryOneComponent>
            </Route>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
