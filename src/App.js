
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/Items/ItemListContainer'




function App() {

   let greeting= "Bienvenidos a Yaguaron"
  return (
    <div >
     <NavBar/>
     <h1 className="container"> {greeting} </h1>
     <ItemListContainer/>
    
    </div>
  );
}

export default App;
