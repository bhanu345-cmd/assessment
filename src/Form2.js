import React from 'react';
const Form2=(props)=>{
    return <div className="jumbotron">
                <div className="row">
                    <div className="introduction">
                        <div className="headLine">
                            <h4>Lets get started</h4>
                        </div>
                        <p>What would you like to report?<a>Learn more</a></p>
                    </div>
                </div>
                    <div className="row opinion">
                        <div className="col-md-5 col-lg-5 col-xl-5 col-spacing">
                            <div className="opinionContent">
                                <p><strong>CE Credits</strong></p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-5 col-spacing">
                            <div className="opinionContent">
                                <p><strong>Somethingelse</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <hr width="100%"/>
                    </div>
                    <div className="row">
                        <div className="actionbuttons">
                            <button className="btn btn-outline-primary float-left" onClick={props.onPrev}>&lt;Back</button>
                        </div>
                    </div>
                </div>
        
}
export default Form2;