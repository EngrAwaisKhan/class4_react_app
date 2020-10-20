import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js';
function App(){
  let [count, setcount] = useState(0);
  let [time, settime] = useState(true);
  return (
    <div className='container'>
      <div className={`box ${time ? 'day' : ''}`}>
        <Message timer={time}/>
        <h3>counter value is: {count}</h3>
        <button onClick={()=>setcount(0)}>Reset Value</button>
        <button onClick={()=>setcount(++count)}>Increment Value</button>
        <button onClick={()=>setcount(count >0 ? --count : 0)}>Decrement Value</button><br/><br/>
        <button onClick={()=>settime(!time)}>Change Time</button>
      </div>
    </div>
  );
}

export default App;
