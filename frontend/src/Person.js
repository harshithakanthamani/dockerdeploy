import React, {Component} from "react";

class Person extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Name: {this.props.firstName}</h1>
                <h1>Name: {this.props.Address}</h1>
                <h1>Name: {this.props.Gender}</h1>
            </div>
        );
    }
}

