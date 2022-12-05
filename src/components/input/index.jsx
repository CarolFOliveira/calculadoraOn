import React from "react";
import {InputContainer} from './style';

const Input = ({value,result})=>{
    return(
        <InputContainer>
              
           <input value={value}/>
           <label>{result}</label>     
        </InputContainer>
    )
}
export {Input}