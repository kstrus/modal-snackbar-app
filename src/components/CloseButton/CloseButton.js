import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { StyledIconButton } from './stylecComponents';

const CloseButton = ({ color, onClick }) => {
    return <StyledIconButton onClick={onClick}>
        <FontAwesomeIcon icon={faTimes} color={color} />
    </StyledIconButton>
};

export default CloseButton;
