import React from 'react';
import {useRef} from 'react';

function Useref(props) {
    const data = useRef(null);
    const btnClick=()=>{
        data.current.focus();
        console.log("btn called");
        console.log(data.current.value);
        if(data.current.value=="")
        {
            alert("Please Enter Data")
        }
    }
    
    return (
        <>
           <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    Name: <input type="text" id='txt'className='form-control' ref={data} />
                    Password: <input type="password" id='txt'className='form-control' ref={data} />
                    Email: <input type="email" id='txt'className='form-control' ref={data} />
                    <button className='btn btn-primary' onClick={btnClick}> Click </button>
                </div>
            </div>
            </div> 
        </>
    );
}

export default Useref;