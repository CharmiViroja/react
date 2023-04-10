import React from 'react';
import {Useform} from 'react';
import {useState} from 'react';

function useForm(props) {
    const[name,setname]=useState("")
    function namereg(event){
        const {value} = event.target;
        const regex = /^[a-zA-Z]+$/.test(value);
        if(regex){
            setname(value)
        }
    }
    return (
        <>
           <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    Name: <input type="text" id='txt'className='form-control' required="Name is required"  onChange={(event)=>namereg(event)} value={name}/>
                 </div>
            </div>
            </div> 
        </>
    );
}

export default useForm;