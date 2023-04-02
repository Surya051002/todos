
import './App.css';
import Header from './screen/Header';
import Body from './screen/Body';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [tasks,settasks]=useState([]);
  const [newtasks,setnewtasks]=useState("");
  const [cat,setcat]=useState( "");
  const fcall=()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{setcat(res.data.fact)});
  }
  function AddTask(){
  fcall();
  settasks([...tasks,newtasks]);
  }  
  useEffect(()=>{
    fcall();
  },[])
  function deletetask(key){
    console.log(0);
     settasks(tasks.filter((v,k)=>{return (key!==k?true:false)}));
  };
return (
    <div className="App" style={{marginTop:0}}>
    <Header />
   
    <hr></hr>
    <div className='add'>
    <input onChange={(event)=>{setnewtasks(event.target.value)}}></input>
    <button onClick={AddTask}>Add task</button>
    <hr></hr>
      {tasks.map((task,key)=>{return (<div><spam className='tasks'>{task}</spam><button onClick={()=>deletetask(key)}>X</button></div>);})}
    </div>
    </div>
  );
}

export default App;
