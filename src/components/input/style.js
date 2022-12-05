import styled from "styled-components";

export const InputContainer = styled.div`
    width:100%;
    height: 75px;
    background-color:#080121cf;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    
    label{
        float:left;
        font-size:20px;
        color:#d3d3d3;
        opacity:0.4;
        padding-left:5px;
        width:100%;
        
    }
    

    input{
        width:80%;
        height: 55px;
        background-color:transparent;
        border: 0;
        text-align:right;
        font-size:30px;
        color:#fff;
        padding:10px;
        
    }
   
`
