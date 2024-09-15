import React from 'react'

function Alert(props) {
    const capitalised = (word)=>{
        const hello = word.toLowerCase();
        return hello.charAt(0).toUpperCase() + hello.slice(1);
    }
     
  return (
       <div style={{height:'50px'}}>
        { props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalised(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
       </div>
  )
}

export default Alert
