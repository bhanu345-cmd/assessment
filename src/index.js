import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
const initialState={fileName:"",actionName:"",form1OpinionContent:"",checkbox:0};
const FormReducer=(state=initialState,action)=>{
  switch(action.type){
    case "file":
       return{...state,fileName:action.payload};
    case "removeFile":
       return{...state,fileName:""};
    case "form1OpinionContent":
      return{...state,form1OpinionContent:action.payload};
    case "checkbox":
         return {...state,checkbox:action.payload}
    default:
      return state;
  }
}
const store=createStore(FormReducer);
store.subscribe(()=>{
  console.log(store.getState());
})
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/Form" element={<App/>}/>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://urldefense.com/v3/__https://bit.ly/CRA-vitals__;!!H9nueQsQ!qDgXU0y4VWgAy97aO1L-z3g1TzwF4Ex9HLDGtn_xJAfIniXxj5KIJbe9fPE2iNH8ONuJj-LmM2xE$ 
reportWebVitals();
