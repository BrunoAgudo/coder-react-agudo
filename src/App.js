
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/Items/ItemListContainer'
import ItemDetailContainer from './Components/Items/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

   
  return (
    
    <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element = {<ItemListContainer/>} />
          <Route path="/productos/:cat/" element = {<ItemListContainer/>} />
          <Route path="/detail/:prodId" element = {<ItemDetailContainer/>} /> 
          <Route path="*" element = {<ItemListContainer/>} />
        </Routes>
     
     
    
   </BrowserRouter>
  );
}

export default App;
