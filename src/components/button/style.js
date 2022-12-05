import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    width: 60px;
    height: 60px;
    background:#1a1814;
    color:#fff;
    border: 1px solid #363636;
    border-radius:10px;
    margin-right:0;
    font-size:24px;


    ${({variant})=> variant !== "primary" && css`
    min-width:60px;
    height: 60px;
    background:#080121cf;
    color:#fff;

    `      
    }
   
   
    &:hover{
        cursor: pointer;
        opacity:0.8;
        background-color:#d66801;
    }
`

