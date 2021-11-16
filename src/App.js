
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/Items/ItemListContainer'
import ItemCount from './Components/Items/ItemCount'



function App() {
  return (
    <div >
     <NavBar/>
     <ItemListContainer  greeting = "Bienvenidos a Yaguaron"/>
     <br/>
     <ItemCount/>
    </div>
  );
}

export default App;
