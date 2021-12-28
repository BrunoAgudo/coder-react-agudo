
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/Items/ItemListContainer'
import ItemDetailContainer from './Components/Items/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartView } from './Components/Cart/CartView';
import { CartProvider } from './Components/Cart/CartContext';
import CartWidget from './Components/Cart/CartWidget';




function App() {


   
  return (
  

  <CartProvider>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<ItemListContainer/>} />
          <Route path="/category/:cat/" element = {<ItemListContainer/>} />
          <Route path="/detail/:prodId" element = {<ItemDetailContainer/>} /> 
          <Route path="*" element = {<ItemListContainer/>} />
          <Route path="/cart" element = {<CartView/>}/>
          <Route path="/pago" element = {<CartWidget/>}/>
        </Routes>
       
    </BrowserRouter>
  </CartProvider>
  
  );
}

export default App;
