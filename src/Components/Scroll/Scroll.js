import React from "react";

const styles = { 
    overflowX: 'scroll',
    overflowY: 'hidden',
    height: 'auto', 
    display: 'flex',
    marginRight:'25px',
    marginLeft:'25px'

}
const Scroll = (props) => {
    return(
        <div className="scroll" style={styles}>
            {props.children}
        </div>
    )
}   
export default Scroll;