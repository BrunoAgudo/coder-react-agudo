
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer'



function App() {
  return (
    <div >
     <NavBar/>
     <ItemListContainer  greeting = "Bienvenidos a Yaguaron"/>
    </div>
  );
}

export default App;
