import React from "react";
const Sqaure=(props)=>{
return(
    <div 
    className="square"
    onClick={props.onClick}
    >
        <h5>{props.value}</h5>
    </div>
);
}
export default Sqaure;