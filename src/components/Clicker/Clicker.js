import React, { useState } from "react";

export const Clicker = () => {
    const[clicks, setClicks] = useState(0)
     
    const addClick = () => {
         setClicks(clicks +1)
     }

     return(
         <div onClick={addClick}>
            <p> Clicks: {clicks} </p>
            <p>Fecha y Hora : {new Date().toLocaleString()}</p>
         </div>
     )
}