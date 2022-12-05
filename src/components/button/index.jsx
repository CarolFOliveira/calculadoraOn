import React from 'react';
import {ButtonContainer} from './style';

const Buttons = ({label,variant="primary",onClick}) => {
    
    return (
        
        <ButtonContainer variant={variant} onClick={onClick}>{label}</ButtonContainer>
    )
}

export {Buttons}
