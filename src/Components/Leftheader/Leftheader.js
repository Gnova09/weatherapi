import React from "react";

const leftheader = ({handleOnclick}) =>{
    return(
        <div className="leftheader">
            <button onClick={handleOnclick} className="btn_search">Search for places</button>
            <span>i</span>
        </div>
    );
}
export default leftheader;