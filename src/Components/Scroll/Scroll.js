import React from "react";

const Scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', height: 'auto', display: 'flex',margin:'25px'}}>
            {props.children}
        </div>
    )
}   
export default Scroll;