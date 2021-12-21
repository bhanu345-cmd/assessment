import React from 'react';
import './Carousel.css';
let img=require('./images/globe.jpg')
const Carousel=(props)=>{
    return(
    <div className="carousel">
            <div className="carouselInner" style={props.style}>
                {props.data.map((dataItem,index)=>{
                    console.log(props.focusedIndex===index);
                    return(<div className="carouselItem">
                    <div className={`card ${props.focusedIndex===index?"focused":""}`} style={{"width": "16rem"}}>
                        <div className="card-body">
                            <div className="card-body-subject-flex-column">
                                    <div className="card-body-subject-flex-row mb-2">
                                        <div className="logoImg"></div>
                                        <div className="card-body-subject-flex-column flexItem">
                                            <p className="level">{dataItem.level}</p>
                                            <h4 className="SubjectName">{dataItem.subjectName}</h4>
                                        </div>
                                    </div>
                                    <div className="card-body-subject-flex-row mt-2">
                                        <span className="by">by</span>
                                        <span className="authorImg flexItem"><i className="fa fa-user-circle" style={{fontSize:'x-large'}}></i></span>
                                        <span className="authorName flexItem">{dataItem.author}</span>
                                    </div>   
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="carouselItem-footer">
                                <span className="flexItem">{dataItem.progress}</span>
                                <div className="flexItem"><div className="range"></div></div>
                                <span className="flexItem">{dataItem.modulesCompleted}</span>
                                <span className="flexItem"><img className="country" src={img} alt=" "/></span>
                            </div>
                        </div>
                    </div>
                </div>
                )
                })}
            </div>
            {props.transistion!==0 &&<span onClick={props.onPrevClick}><i className="fa fa-chevron-circle-left prev" style={{color:'whitesmoke',fontSize:'xxx-large',borderRadius:"50%"}}></i></span>}
            {!((props.currentSlide*props.noOfCardsPerSlide)>=props.data.length) && <span onClick={props.onNextClick}><i className="fa fa-chevron-circle-right next" style={{color:'whitesmoke',fontSize:'xxx-large',borderRadius:"50%"}}></i></span>}
         </div>
    );
}
export default Carousel;