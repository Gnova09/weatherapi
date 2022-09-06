import React from "react";

const LeftCountrys = ({setCountry, handleOnClick}) =>{

    const Btnonclick=(city)=>{
        setCountry(city);
        handleOnClick();
    }
    return(
        <div className="LeftCountrys">
            <button onClick={()=>Btnonclick("Santo Domingo")} className="country_button">Santo Domingo</button>
            <button onClick={()=>Btnonclick("Azua")} className="country_button">Azua</button>
            <button onClick={()=>Btnonclick("Punta Cana")} className="country_button">Punta Cana</button>
            <button onClick={()=>Btnonclick("La Romana")} className="country_button">La Romana</button>
            <button onClick={()=>Btnonclick("Enriquillo")} className="country_button">Enriquillo</button>
        </div>
    );
}
export default LeftCountrys;