import React, { Component } from 'react';

class reusable extends Component {
    render() {
        return (
            <>
            <div className="card">
                <img src={this.props.imgSrc} alt="Card image" className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <div className="row">
                    <div className="col">
                            <p>Old Price : $<del>{this.props.oldPrice}</del></p>
                    </div>
                    <div className="col">
                            <p>New Price : ${this.props.newPrice}</p>
                        </div>
                    </div>
                    <center><button className="btn btn-primary">Buy Now</button></center>
                </div>
            </div>
            </>
        );
    }
}

export default reusable;