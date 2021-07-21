import {useState} from "react";
import "./Hello.css"

function App() {

  const [count,setCount]= useState(0);

  return (
    <div className="content">
      <p style={{color:"red"}}>You got {count} likes!</p>
      <button onClick={()=>setCount(count+1)}>Like</button>
    </div>
  );
}

export default App;
