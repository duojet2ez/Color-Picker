import React from 'react';
import {useState} from 'react'; 

export default function Button(){
    const [color, setColor] = useState("#ffffff");
    function click(){
        const colorsArr = [];
        for(let i = 0; i < 10; i++){
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            colorsArr.push(randomColor);
        }
        let colorIndex = Math.floor(Math.random() * 10);
        setColor(prev => colorsArr[colorIndex]); 
    }
    document.body.style.backgroundColor = color;
    return(
        <>
            <main>
                <div className="container">
                    <h2> Background Color <span className="color"></span></h2>
                    <button onClick={click} className="btn btn-hero" id="btn"> Click Me </button>
                </div>
            </main>
        </>
    )
}