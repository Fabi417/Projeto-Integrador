import React, { useEffect, useState } from "react";
import axios from "axios";



function Card(){
    useEffect(() =>{
        var divId = document.getElementById("mainCard") as HTMLDivElement || null;
        console.log("divId dentro do componente: ",divId);
        getSalesperson.getSalesperson(divId);

    },[])

    return(
        <div id = "mainCard" className="mainCard">
            {/* {getDados()} */}
        </div>
    );

}

export default Card;

