import { useState } from 'react';
import './App.css';
import ClassList from './components/ClassList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Tibia Encyclopedia</h1>
      <div className='listas'>
        <ClassList classList={'creatures'}/>
        <ClassList classList={'worlds'}/>
      </div>
    </div>
  );
}

export default App
