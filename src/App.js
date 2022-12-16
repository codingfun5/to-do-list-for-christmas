import './App.css';

import imageOne from './gift.jpg';
import imageTwo from './santa.jpg';
import { TodoList } from './TodoList';
function App() {
  return (
    <div className='App'>
     
      <div className='container'>
<img src = {imageOne} className="gift" width="250px" alt="gift"/>
      </div>
      <div className='container'>
        <h1 className='animate__animated animate__rotateIn'>To-do list for Christmas</h1>
      </div>
      <TodoList/>
      
      <div className='container'>
<img src = {imageTwo} className="animate__animated animate__backInUp santa" width="200px" alt='santa'/>

      </div>
    </div>
  );
}

export default App;
