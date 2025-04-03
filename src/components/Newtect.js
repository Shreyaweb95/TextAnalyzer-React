import React,{ useState }from 'react'

export default function Newtect(props) {
 
const upcase=()=>{
  // console.log("upcase hitted" + Text);
  let newText=Text.toUpperCase()
  setText(newText);
  props.showAlert("converted to uppercase","success")
} 
const lowcase=()=>{
  // console.log("lowcase hitted" + Text);
  let newText=Text.toLowerCase()
  setText(newText)
  props.showAlert("converted to lowercase","success")
}
const ClearText=()=>{
  // console.log("onchange hitted");
  setText(" ")
  props.showAlert("text cleared!","success")
}
const handleinverseclick = () => {
  // console.log("inverse click is triggered");
  let newtext = "";
  for (let i = Text.length - 1; i >= 0; i--) {
    newtext += Text[i];
  }
  setText(newtext);
  props.showAlert("text inversed!","success")

}
const speak = () => {
  let msg = new SpeechSynthesisUtterance(Text);
  window.speechSynthesis.speak(msg);
}
// const pause=()=>{
//   window.speechSynthesis.pause();
// }
const handlespaces =()=>{
  let newtext = Text.trim(" ");
  setText(newtext);
  props.showAlert("extra spaces removed","success")

}
const handleCopy =()=>{
  var copy=document.getElementById("floatingTextarea")
  copy.select()
  navigator.clipboard.writeText(copy.value)
  props.showAlert("copied to clipboard!","success")

}

const handleCapitalizeWordClick = () => {
    let lowercase = Text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };
const onchanging=(event)=>{
  // console.log("onchange hitted");
  setText(event.target.value)
  
} 
 
const [Text, setText] = useState("");


  return ( 
    <> 
    <div className="container "style={{color:props.mode==='dark'?'white':'black'}}>
    <label htmlFor="floatingTextarea my-6 ">{props.comment}</label> 
      <div className="form-floating">
        <div className="mb-3">
        <textarea className="form-control my-3" rows="6" value={Text} onChange={onchanging} id="floatingTextarea" style={{background:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
         <button className="btn btn-primary mx-3 " onClick={upcase}>click me for uppercase</button>
         <button className="btn btn-success mx-3" onClick={lowcase} >click me for Lowercase</button>
          <button className=" btn btn-danger mx-2" onClick={ClearText} >Clear</button>
          <button className=" btn btn-danger mx-2" onClick={handleCopy} >Copy</button>
          <button className=" btn btn-success mx-2" onClick={ handleinverseclick}  >handleinverse</button>
          <button type="submit" onClick={speak} className="btn btn-warning mx-2 ">Speak</button>
          {/* <button type="submit" onClick={pause} className="btn btn-warning mx-2 ">Pause</button> */}
          <button type="submit" onClick={handlespaces} className="btn btn-info mx-2">handlespaces</button>
          <button type="submit" onClick={handleCapitalizeWordClick} className="btn btn-info mx-2 my-2">CapitalizeWord</button>


      </div>
    </div>
   <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
   <div className="form-floating">
    <p className='my-3'>{Text.split(" ").length-1}words and {Text.length} Characters</p>
    <p>{0.008*Text.split("").length}minutes read</p>
    <p>{Text.replace(/\n$/gm, '').split(/\n/).length}Paragraphs</p>
    <p>{Text.replace(/\n$/gm, '').split(".").length}Sentences</p>
    
         <h2>Preview Text</h2>
         <p>{Text.length>0?Text:"Enter Text to Preview"}</p>
      </div>
   </div>
  </>
  )
}
