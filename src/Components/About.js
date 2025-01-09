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
                    Lorem Text #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={ mySytle}>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit maiores error minus delectus saepe minima et illum libero eum rerum odio tempore nam iure, illo quia. Neque, sapiente voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dignissimos? Ullam consequatur fugiat, quae nulla porro non quasi eveniet tempore sed laborum obcaecati tempora assumenda possimus itaque aut vel fugit.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={ mySytle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Lorem Text #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={ mySytle}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit maiores error minus delectus saepe minima et illum libero eum rerum odio tempore nam iure, illo quia. Neque, sapiente voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dignissimos? Ullam consequatur fugiat, quae nulla porro non quasi eveniet tempore sed laborum obcaecati tempora assumenda possimus itaque aut vel fugit.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={ mySytle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Lorem Text #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={ mySytle}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit maiores error minus delectus saepe minima et illum libero eum rerum odio tempore nam iure, illo quia. Neque, sapiente voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dignissimos? Ullam consequatur fugiat, quae nulla porro non quasi eveniet tempore sed laborum obcaecati tempora assumenda possimus itaque aut vel fugit.</p>
                </div>
                </div>
            </div>
            </div>
            
            {/* <button onClick={toggle} type="button"  className="btn btn-primary mx-2 my-2">{btnText}</button> */}

      </div>
    </>
  );
}
