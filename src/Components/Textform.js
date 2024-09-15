import React,{useState} from 'react'


export default function Textform(props) {

    const handleUpClick = ()=>{
        // setText('you have clicked on handleUpClick')
        let convert = text.toUpperCase();
        setText(convert)
        props.showAlert("Converted in UpperCase", "success")
    }

    const handleLoClick = ()=>{
        // setText('you have clicked on handleUpClick')
        let convert = text.toLowerCase();
        setText(convert)
        props.showAlert("Converted in LowerCase", "success")
    }

    const handleClearClick = ()=>{
        // setText('you have clicked on handleUpClick')
        let convert = "";
        setText(convert)
        props.showAlert("All texts cleared", "success")
    }
     
    const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("All text copied", "success")
    }
    const removeSpaces = ()=>{
        let text1 =  text.split(/[ ]+/)
        setText(text1.join(" "))
        props.showAlert("Removed extra Spaces", "success")
    }

    const handleOnChange = (e)=>{
        setText(e.target.value)
    }

    const [text, setText] = useState("")
    
    // text = 'new text'  // wrong way to change the state
    // setText('new state')  // correct way to change the state

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>

            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2 my-1" onClick={removeSpaces}>Remove Extra Spaces Text</button>
            </div>
        </div>

        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summery</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
            <p>{0.008*text.split("").filter((a)=>{return a.length!==0}).length} mintes/Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview!'}</p>
            <p>{text}</p>
        </div>
        </>
    )
}


