import {useState,useEffect} from 'react';
import React from 'react';

const Clock = (props) => {

    const [date,setdate] = useState(new Date());
    const [textInput,setTextInput] = useState(React.createRef);

    useEffect(() =>{
        setInterval(() => tick(),1000);
    })

    function tick(){
        setdate(new Date())
    }
     
    const focusInput =() =>{
        setTextInput(textInput?.current.focus())
    }


    return (
        <div>
            <h1>Hello World!</h1>
            <h2>{date.toLocaleTimeString()}</h2>
            <input type = "text" ref = {textInput} onClick = {focusInput}></input>
        </div>
    );
}

export default Clock;