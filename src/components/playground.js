import React, { useState } from "react";

export default function Playground(props) {
    const name = [props];


    const clickHandler = () => {

    }

    


  return (


    <div>
    <h1 className="changeMe">{name}</h1>
        <button onClick={clickHandler} className="btn btn-primary">Change</button>


    </div>
  );
}

