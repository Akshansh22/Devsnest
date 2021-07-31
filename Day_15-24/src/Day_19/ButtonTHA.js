import {useState} from "react";
import "./ButtonTHA.css"

function App19() {

  const [count,setCount]= useState(0);//different counts for
  const [count1,setCount1]= useState(0);//different buttons
  const [count2,setCount2]= useState(0);

  return (
    <div className="content">
      <p style={{color:"red"}}>Hello Senpai! Did you like my THA 19?</p>
      <button onClick={()=>setCount(count+1)}>{count}</button>
      <button onClick={()=>setCount1(count1+1)}>{count1}</button>
      <button onClick={()=>setCount2(count2+1)}>{count2}</button>
    </div>
  );
}
export default App19;
