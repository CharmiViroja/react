import React, { Component } from 'react';
import Reuse from './reuse';

class gallary extends Component {
    render() {
        return (
            <>
              <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <Reuse imgSrc="images/lights.jpg" Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc="images/nature.jpg" Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
                    </div>

                    <div className="col-3">
                    <Reuse imgSrc="images/fjords.jpg" Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
                    </div>

                    
                </div>
            </div>
  
            </>
        );
    }
}

export default gallary;