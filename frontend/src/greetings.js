import React from "react";

function Greetings(props){
    return(
        <div>
            <h1>Welcome to React properties</h1>
            <h1>{props.Name}</h1>
            <h1>{props.Organization}</h1>
            <h1>{props.Department}</h1>


        </div>
    )
}
export default Greetings;