import React from "react";

const leftCountrys = ({handleOnclick,countryname}) =>{
    return(
        <div className="LeftCountrys">
            <button onClick={handleOnclick} className="country_button">London</button>
            <button onClick={handleOnclick} className="country_button">London</button>
            <button onClick={handleOnclick} className="country_button">London</button>
            <button onClick={handleOnclick} className="country_button">London</button>
        </div>
    );
}
export default leftCountrys;