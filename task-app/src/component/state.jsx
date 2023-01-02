import React, { Component } from 'react';

class state extends Component {
    constructor(props){
        super(props)
        this.state ={
            auther : "Chetan Bhagat",
            book : "Three Idiots"
        }
    }
    changeData=()=>{
        this.setState({auther:"Someone Bhagat",book:"PK"})
        console.log("btn called");
    }
    render() {
        return (
            <>
              <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        {this.state.auther}
                        <br />
                        {this.state.book}
                        <br />
                        <button className="btn btn-primary" onClick={this.changeData}> Click Me</button>
                    </div>
                </div>
                </div>  
            </>
        );
    }
}

export default state;