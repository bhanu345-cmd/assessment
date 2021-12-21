import React, { useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useSelector,useDispatch} from 'react-redux';
const Form3=(props)=>{
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    const onCheckBoxClick=(id,e)=>{
        console.log(e,id);
        dispatch({type:"checkbox",payload:id});
    }
    const style1={'color':'white','border':'1px solid rgb(223, 220, 220)','borderRadius':'50%','cursor':'pointer'};
    const style2={'color':'green','border':'1px solid rgb(223, 220, 220)','borderRadius':'50%','cursor':'pointer'};
    return<div className="jumbotron">
            <div className="row">
                <div className="introduction">
                    <div className="headLine">
                        <h4>Lets select subject areas</h4>
                    </div>
                    <p>Which subject areas are you reporting for?<a>Learn more</a></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-spacing">
                    <div className="courseList">
                        <div className="course">
                            <CheckCircleIcon style={state.checkbox==1?style2:style1} onClick={onCheckBoxClick.bind(this,1)}/>
                            <label id="1">Medical errors approved by board</label>
                        </div>
                        <div className="course">
                            <CheckCircleIcon style={state.checkbox==2?style2:style1} onClick={onCheckBoxClick.bind(this,2)}/>
                            <label id="2">Domestic violence approved by board</label>
                        </div>
                        <div className="course">
                            <CheckCircleIcon style={state.checkbox==3?style2:style1} onClick={onCheckBoxClick.bind(this,3)}/>
                            <label id="3">HIV/AIDS</label>
                        </div>
                        <div className="course">
                            <CheckCircleIcon style={state.checkbox==4?style2:style1} onClick={onCheckBoxClick.bind(this,4)}/>
                            <label id="4">GeneralCE Course approved by national nursing organization or another state of board nursing</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <hr width="100%"/>
            </div>
            <div className="row">
                <div className="actionButtons">
                    <button className="btn float-left" onClick={props.onPrev}>&lt;Back</button>
                    <button className="btn btn-primary float-right" onClick={props.onContinue}>continue</button>
                </div>
            </div>
        </div>
}
export default Form3;