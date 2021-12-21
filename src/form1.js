import React, { useRef } from 'react';
import './form1.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import AvTimerSharpIcon from '@mui/icons-material/AvTimerSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import {useDispatch,useSelector} from 'react-redux';
const Form1=(props)=>{
    const inputRef=useRef();
    const dispatch=useDispatch();
    const state=useSelector((state)=>state);
    const onFileUpload=(e)=>{
        dispatch({type:"file",payload:e.target.files[0].name});
    }
    const onRemoveFileClick=()=>{
        dispatch({type:"removeFile"});
    }
    const addBackground=(e)=>{
        console.log(e.target.closest('div').id);
        dispatch({type:"form1OpinionContent",payload:{id:e.target.closest('div').id,textContent:e.target.textContent}});
    }
    return <div className="jumbotron">
                <div className="row ">
                    <div className="introduction">
                        <div className="headLine">
                            <h4>If you have your course certificate we can use it to jumpstart your CE submission</h4>
                        </div>    
                        <p>We will upload it and pull all the right information and you will have access to it anytime</p>
                        <p>What does this document look like?</p>
                    </div>
                </div> 
                <div className="row opinion">
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4">
                            <div className={`opinionContent ${state.form1OpinionContent.id==1?"bg-custom-success":""}`} id="1">
                                <CheckCircleIcon style={{'color':"green","textAlign":"center"}}/>
                                <p onClick={addBackground}><strong>Lets do it</strong></p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4">
                            <div className={`opinionContent ${state.form1OpinionContent.id==2?"bg-custom-success":""}`} id="2">
                                <LibraryBooksSharpIcon/>
                                <p onClick={addBackground}><strong>I will maintain my own documentation</strong></p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4">
                            <div className={`opinionContent ${state.form1OpinionContent.id==3?"bg-custom-success":""}`} id="3">
                                <AvTimerSharpIcon/>
                                <p onClick={addBackground}><strong>I will do it later</strong></p>
                            </div>
                        </div>
                </div>
                <div className="row">
                    <div className="status">
                        <p>What does this document look like?</p>
                    </div>
                </div>
                <div className="row inputFile">
                    <div className="fileLabel">
                        {!state.fileName && <input type="file" ref={inputRef} onChange={onFileUpload} className="form-control"/>}
                        {state.fileName && <CheckCircleIcon style={{'color':"green","textAlign":"center"}}/>}
                        <label>{state.fileName}</label>
                        {state.fileName && <CloseSharpIcon style={{'fontSize':'small','pointer':'cursor'}} onClick={onRemoveFileClick}/>}
                    </div>  
                </div>
                <div className="row">
                        <hr width="100%"/>
                </div>
                <div className="row">
                    <div className="actionButtons">
                        <button className="btn btn-primary float-right" onClick={props.onContinue}>continue</button>
                    </div>
                </div>
        </div>
            
}
export default Form1;