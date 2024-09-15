import React  from "react";

export default function About(props) {

    // const [mySytle, setmySytle] = useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })


    let mySytle = {
        color:props.mode === 'dark'?'white':'#042743',
        backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white',
        border:'2px solid',
        borderColor:props.mode === 'dark'?'white':'#042743'
    }




    // const [btnText, setbtnText] = useState('Enable dark mode')
    // const toggle=()=>{
    //     if (mySytle.color === 'white') {
    //         setmySytle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'1px solid white'
    //         })
    //         setbtnText('enable dark mode')
    //     }else{
    //         setmySytle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtnText('enable light mode')
    //     }
    // }
    
  return (
    <>
      <div className="container" style={ {color:props.mode === 'dark'?'white':'#042743'}}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={ mySytle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={ mySytle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={ mySytle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={ mySytle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={ mySytle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={ mySytle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            
            {/* <button onClick={toggle} type="button"  className="btn btn-primary mx-2 my-2">{btnText}</button> */}

      </div>
    </>
  );
}
