import NavBar from './Navbar';
import Carousel from './Carousel';
import './Dashboard.css';
import SideBar from './Sidebar';
import React,{useState} from 'react';
const Dashboard=()=>{
    const data=[{level:"Beginners",author:"Darrell Steward",subjectName:"Fun with php", progress:"68%", modulesCompleted:"1/2"},
    {level:"Advanced",author:"John Daneal",subjectName:"Figma Workshop", progress:"50%", modulesCompleted:"2/4"},
    {level:"Advanced",author:"Maxivilliam",subjectName:"Python development", progress:"80%", modulesCompleted:"3/4"},
    {level:"Intermediate",author:"Darrell Steward",subjectName:"Fun with php", progress:"68%", modulesCompleted:"3/5"}
]; 
    const [state,setState]=useState({transistion:0,currentSlide:1,focusedIndex:""});
    const style={'transform': `translate3d(${state.transistion}px, 0px, 0px)`};
    const noOfCardsPerSlide=3;
    const onPrevClick=()=>{
        setState((prevState)=>{return{...prevState,currentSlide:state.currentSlide-1,transistion:prevState.transistion+333}});
    }
    const onNextClick=()=>{
        setState((prevState)=>
            {
                return{...prevState,
                    currentSlide:state.currentSlide+1,
                    transistion:prevState.transistion-333
                }
            });
    }
    const onTutorClick=(id)=>{
        const index=id+1;
        let endIndex=noOfCardsPerSlide;
        let startIndex=1;
        let noOfSlides=Math.ceil(data.length/noOfCardsPerSlide);
        let slide=1;
        for(let i=1; i<=noOfSlides; i++){
            endIndex=i+noOfCardsPerSlide;
            startIndex=endIndex-noOfCardsPerSlide;
            if(index>=startIndex && index<=endIndex){
                slide=i;
                break;
            }
        }
         if(state.currentSlide<slide){
            const transistion=state.transistion-((slide-state.currentSlide)*333);
            setState((prevState)=>{return{...prevState,transistion:transistion,focusedIndex:id,currentSlide:state.currentSlide+1}});
        }else if(state.currentSlide>slide){
            const transistion=state.transistion+((state.currentSlide-slide)*333);
            setState((prevState)=>{return{...prevState,transistion:transistion,focusedIndex:id,currentSlide:state.currentSlide-1}});
        }else{
            setState((prevState)=>{return{...prevState,focusedIndex:id}});
        }
        
    }
    return <div className="dashboardContainer">
        <div className="row dashboard">
        <div className="col-md-3">
            <SideBar onTutorClick={onTutorClick}/>
        </div>
        <div className="col-md-9">
            <div className="row">
                <NavBar/>
                <hr width="100%"></hr>
                <div className="yourCourses">
                    <div className="yourCourses-sub">
                        <div className="yourCourses-sub-sub">
                            <h4 className="yoursCourses-FlexItem">YourCourses</h4>
                            <button className="btn-sm btn-primary yoursCourses-FlexItem" style={{marginLeft:"15px"}}>Premium</button>
                        </div>
                        <div className="yourCourses-sub-sub">
                            <h4 className="yoursCourses-FlexItem"><i className="fa fa-user-circle"></i></h4>
                            <p className="yoursCourses-FlexItem" style={{marginLeft:"15px"}}>26 courses</p>
                        </div>
                    </div>
                    <div className="yourCoursesIcons">
                        <span style={{marginLeft:"15px"}}><i className="fa fa-bookmark" aria-hidden="true"></i></span>
                        <span style={{marginLeft:"15px"}}><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    
                </div>
                <Carousel 
                style={style} 
                data={data}
                noOfCardsPerSlide={noOfCardsPerSlide} 
                currentSlide={state.currentSlide}
                focusedIndex={state.focusedIndex}
                transistion={state.transistion} 
                onPrevClick={onPrevClick} 
                onNextClick={onNextClick}
                />
            </div>
        </div>
    </div>
    </div>
}
export default Dashboard;