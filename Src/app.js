import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Message text='Hello!'/>
        <Message text='This Is Homework 1'/>
      </div>
      
    </div>
  );
}

export default App;
