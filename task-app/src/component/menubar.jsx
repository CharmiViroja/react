import React, { Component } from 'react';

class menubar extends Component {
    constructor(props){
        super(props)
        this.state ={
            imgSrc : "",
            
        }
    }
    changeImg=()=>{
        
        this.setState({imgSrc : "images/Breakfast.jpg"})
        
    }
    changeJmg=()=>{
        this.setState({imgSrc : "images/Lunch.jpg" })
    }
    changeKmg=()=>{
        this.setState({imgSrc : "images/Dinner.jpg" })
    }
    render() {
        return (
            <>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="btn-group-vertical">
                            <button className="btn btn-outline-primary mt-3 ms-3 me-3 btn-lg " onClick={this.changeImg} >Breakfast</button>
                            <button className="btn btn-outline-danger mt-3 ms-3 me-3 btn-lg " onClick={this.changeJmg} >Lunch</button>
                            <button className="btn btn-outline-success mt-3 ms-3 me-3 btn-lg " onClick={this.changeKmg}>Dinner</button>    
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                    <img src={this.state.imgSrc} className="card-img-top rounded" />
                    </div>
                </div>
              </div>
              
            
 
  




            </>
        );
    }
}

export default menubar;