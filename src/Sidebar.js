import { PinDropSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
let img=require('./images/globe.jpg');
const SideBar=(props)=>{
    const [state,setState]=useState({data:[]});
    useEffect(()=>{
        fetch("https://randomuser.me/api?results=10").then((response)=>{
            return response.json();
        }).then((data)=>{
            setState({data:data.results});
        })
    },[])
    return <div className="sidebar">
                <div className="mainLogo">
                    <img  src={img} width="150px" height="100px" alt=".."/>
                    <h4>Orizon academy</h4>
                    <p>Learning with Fun</p>
                </div>
                <hr width="100%"/>
                <div className="sidebarConfig">
                    <a className="sideBarConfigItem"><span><i className="fa fa-layer-group"></i></span><span>Mycourses</span></a>
                    <a className="sideBarConfigItem"><span><i className="far fa-bookmark"></i></span><span>Bookmarks</span></a>
                    <a className="sideBarConfigItem"><span><i className="fa fa-bolt"></i></span><span>Trending courses</span></a>
                    <a className="sideBarConfigItem"><span><i className="fa fa-trophy"></i></span><span>Completed courses</span></a>
                </div>
                <hr width="100%"></hr>
                <div className="mytutors">
                    <div className="header">
                        <h4>My Tutors</h4>
                        <span className="badge">14</span>
                    </div>
                    {state.data.map((dataItem,index)=>{
                        if(index<4){
                            return <div className="tutorDetails" onClick={props.onTutorClick.bind(this,index)} key={dataItem.name.first}>
                                <img src={`${dataItem.picture.medium}`} alt=".." className="tutorImg"/>
                                <div className="tutorSubject">
                                    <h4>{`${dataItem.name.first} ${dataItem.name.last}`}</h4>
                                    <p>PHP Developer</p>
                                </div>
                                <span><i className="far fa-comment" style={{fontSize:"20px"}}></i></span>
                            </div>
                        }
                        return null;
                        
                    })}
                </div>
            </div>
}
export default SideBar;