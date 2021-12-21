import Form1 from './form1';
import React,{useState} from 'react';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import './App.css';
function App() {
  const[state,setState]=useState({formNum:1});
  const onContinue=()=>{
    setState((prevState)=>{return{formNum:prevState.formNum+1}});
  }
  const onPrev=()=>{
    setState((prevState)=>{return{formNum:prevState.formNum-1}});
  }
  let form=null;
  switch(state.formNum){
    case 1:
      form=<Form1 onContinue={onContinue}/>;
      break;
    case 2:
      form=<Form3 onContinue={onContinue} onPrev={onPrev}/>;
      break;
    case 3:
      form=<Form4 onContinue={onContinue} onPrev={onPrev}/>
      break;
    case 4:
      form=<Form2 onContinue={onContinue} onPrev={onPrev}/>
      break;
    default: 
      break;
  }
  return <div className="rootContainer">{form}</div>    
}

export default App;
