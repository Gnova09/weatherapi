import React from "react";

const leftheader = ({handleOnClick}) =>{
    return(
        <div className="leftheader">
            <button onClick={handleOnClick} className="btn_search">More City</button>
            <span>i</span>
        </div>
    );
}
export default leftheader;