import React from 'react';

import { StyledButton } from './styledComponents';

const Button = ({ label, withBorder = true, isDisabled, onClick }) => {
    return <StyledButton disabled={isDisabled} onClick={onClick} withBorder={withBorder}>{label}</StyledButton>;
};

export default Button;
