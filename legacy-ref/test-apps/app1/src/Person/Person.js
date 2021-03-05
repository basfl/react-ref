import React from 'react'
const person = (props) => {
    return (
        <div>
            <p onClick={props.myFunc}>This is a {props.name}  and {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.tochange} value={props.name} />
        </div>

    )

}
export default person