import './App.css';
import image from './List.png';
import imageTwo from './Man.png';
import { GroceryList } from './GroceryList.js';

function App() {
  return (
    <div className='App'>
    <div className='container'>
      <img src= { image } width='250px' alt='shopping' />
    </div>
    <div className='container'>
      <h1>Grocery List</h1>
    </div>
    <GroceryList />
    <div className='container'>
      <img src= { imageTwo } width='200px' alt='manshopping' />
    </div>
    </div>
  );
}

export default App;
