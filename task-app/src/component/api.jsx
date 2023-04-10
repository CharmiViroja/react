import React, { Component } from 'react';

class api extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            UserData:'',
            status: 'Pending'
        }
        console.log("Constructor called");
    }
    componentDidMount()
    {
        console.log("componentDidMount called");
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((Response)=>{
                console.log(Response);
                this.setState({UserData: Response,status:'Completed'})
                
            })
        },2000);
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {this.state.status}
                            <br />
                            {this.state.status!='Completed'?'Loading...':'will be print'}
                            {this.state.Response}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default api;