import React, { Children } from "react";
import Buttons from "./Buttons";


function Results(props) {
    return(
        <div className="container-fluid">
            <div className="card mb-3">
                <img className="card-img-top" src={props.imageLinks} alt="Book image"/>
                <Buttons>{Children}</Buttons>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                            <h6>Written By {props.authors}</h6>
                            <p className="card-text">{props.description}</p>
                    </div>
            </div>
        </div> 
    );
}

export default Results;