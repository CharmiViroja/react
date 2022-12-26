import React, { Component } from 'react';

class reuse extends Component {
    render() {
        return (
            <>
                <div className="card">
                <img src={this.props.imgSrc} alt="Card image" className="card-img-top" />
                <div className="card-body">
                    <div className="col">
                            <p>{this.props.Description}</p>
                        </div>
                    </div>
                    
                </div>
        
            </>
        );
    }
}

export default reuse;