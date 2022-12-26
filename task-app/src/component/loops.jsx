import React, { Component } from 'react';

class ContactUs extends Component {
    render() {

        const Numbers =['test',1,2,3,4];
        console.log(Numbers);
        //for with array
        // for (let index = 0; index<Numbers.length;index++)
        // {
        //     const element = Numbers[index];
        //     console.log(element);
        // }

        //for in
        // for(const data in Numbers)
        // {
        //     if(Numbers.hasOwnProperty.call(Numbers,data))
        //     {
        //         const ele =Numbers[data];
        //         console.log(ele);
        //     }
        // }

        // for of
        // for (const newdata of Numbers)
        // {
        //     console.log(newdata);
        // }


        // for each
        // Numbers.forEach(element =>{
        //     console.log(element);
        // });
        

        // map
        const data =Numbers.map((res,i)=>{
            return <p key={i}>{res}</p>
        })
        return (
            <>
               <h1> Welcome to Loops </h1>   
               {data} 
            </>
        );
    }
}

export default ContactUs;