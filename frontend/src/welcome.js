import React from 'react';
function welcome(props){
    const {firstname,lastname,email}=this.props;
    return(
        <>
        <h1>This is from welcome component</h1>
        <h1>Hello {firstname} {lastname}</h1>
        </>
    );
}export default welcome;