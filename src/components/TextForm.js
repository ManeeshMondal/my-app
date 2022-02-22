import React, { useState } from 'react';

export default function TextForm(props) {
    // click of button for uppercase
    const handelupclick=()=>{
        //  console.log("Clicked"+Text);
          let newtext= Text.toUpperCase();
         setText(newtext);
         props.showAlert("converted to uppercase","success");
    }
    // click of button for lowercase
    const handelloclick=()=>{
        //  console.log("Clicked"+Text);
          let newtext= Text.toLowerCase();
         setText(newtext);
         props.showAlert("converted to lowercase","success");
    }
    // button for clrear text 
    const handelclrealick=()=>{
        let newtext=' ';
        setText(newtext);
        props.showAlert("text cleared","success");
    }
    // update the form / taking input 
    const handelonchange=(event)=>{
        // console.log("on change"); 
        setText(event.target.value)
    }
    // Declare a new state variable, which we'll call "count";
    const [Text, setText] = useState('')

    // button for copy text 
    const handelCopy=()=>{
       var box=document.getElementById("mybox");
       box.select();
       navigator.clipboard.writeText(box.value);
       props.showAlert("copied to clipboard","success");
    }
  return (
<>
<div>
    <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={Text} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handelonchange} id="mybox" rows="8" ></textarea>
    </div>
    <button type="button" className="btn btn-primary my-2 mx-1" onClick={handelupclick}>Change to UpperCase</button>
    <button type="button" className="btn btn-primary my-2 mx-1" onClick={handelloclick}>Change to LowerCase</button>
    <button type="button" className="btn btn-primary my-2 mx-1" onClick={handelclrealick}>Clear Text</button>
    <button type="button" className="btn btn-primary my-2 mx-1" onClick={handelCopy}>Copy Text</button>
</div>
<div className="containe my-5" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary </h2>
    <p> {Text.split(" ").length} Words ,{Text.length} characters <br /> 
        {.0008*Text.split(" ").length} Minutes to Read..
     </p>
     <h2>Preview</h2>
     <p>{Text.length>0?Text:"Enter something in the textbox to preview it here"}</p>   
</div>
</>
  )
}

