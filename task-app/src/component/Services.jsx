import React, { Component } from 'react';
import Reusable from './reusable';

class Services extends Component {
    render() {
        return (
            <>
              <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <Reusable imgSrc="images/iphone.png" title="Iphone"oldPrice="90000" newPrice="80000"/>
                    </div>

                    <div className="col-3">
                        <Reusable imgSrc="images/vivo.png" title="Vivo"oldPrice="90000" newPrice="80000"/>
                    </div>

                    <div className="col-3">
                        <Reusable imgSrc="images/samsung.png" title="Samsung"oldPrice="90000" newPrice="80000"/>
                    </div>

                    <div className="col-3">
                        <Reusable imgSrc="images/mi.png" title="Mi"oldPrice="90000" newPrice="80000"/>
                    </div>
                </div>
            </div>
                
            </>
        );
    }
}

export default Services;