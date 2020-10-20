import React from 'react';


const person = (props) => {
return (    
    <div>
        <p onClick={props.click}>I am {props.name} and I am not {Math.floor(Math.random()*30)} but {props.age} Years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} ></input>
    </div>
)};
export default person;