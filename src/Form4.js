import React from 'react';
const Form4=(props)=>{
    return <div className="jumbotron">
            <div className="row">
                <div className="introduction">
                    <div className="headLine">
                        <h4>Lets get the details of your course</h4>
                    </div>
                    <p>Multiple subject area course approved by the Board</p>
                </div>
            </div>
        <div className="row">
            <div className="inputContent">
                <label for="date" id="date">
                    <p>Date you completed the CE</p>
                    <p>For Multiple dates use most recent</p>
                </label>
                <input type="date" className="form-control"/>
            </div>
        </div>
        <div className="row">
            <div className="inputContent">
                <label>Educational Provider</label>
                <div className="input-group">
                    <input type="text" placeholder="search providers" className="form-control"/>
                    <div className="input-group-append">
                     <span className="input-group-text">@</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="row">
            <div className="inputContent">
                <label>Course</label>
                <div className="input-group">
                    <input type="text" placeholder="Worlds best course" className="form-control"/>
                    <div className="input-group-append">
                     <span className="input-group-text">@</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="inputContent subjectarea">
                <label>Subject area</label>
                <div className="inputSubcontent">
                    <span>HIVAIDS</span>
                    <div className="input-sub-subcontent">
                            <input type="number" style={{width:'50px',borderRadius:'3px'}}/>
                            <label>Hours</label>
                    </div>
                </div>
                <hr width="100%"/>
                <div className="inputSubcontent">
                    <span>General CE Approved by the Board</span>
                    <div className="input-sub-subcontent">
                        <input type="number" style={{width:'50px',borderRadius:'3px'}}/>
                        <label>Hours</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <hr width="100%"></hr>
        </div>
        <div className="row">
            <div className="actionButtons">
                <button className="btn" onClick={props.onPrev}>&lt;Back</button>
                <button className="btn btn-primary float-right" onClick={props.onContinue}>continue</button>
            </div>
        </div>
</div>
}
export default Form4;