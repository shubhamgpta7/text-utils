  import React , { useState } from 'react'


export default function TextForm(props) {
    const onChangeHandler = (event) =>{
        setText(event.target.value);
    }

    const toUpperCase = () =>{
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }

    const toLowerCase = () =>{
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }

    const clearText = () =>{
        let newTxt = "";
        setText(newTxt);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
    }

    const [ text , setText ] = useState('updated initial value');
    return (
        <>                
            <div className='container' style={{ color : props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChangeHandler} style={{ backgroundColor : props.mode==='dark'?'grey':'white',  color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={toUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={toLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color : props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length } Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
  )
}
