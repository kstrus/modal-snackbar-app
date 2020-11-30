import React from 'react';

import Button from '../Button';
import { StyledOverlay, StyledWindow, StyledTitle, StyledContent, StyledButtonsWrapper } from './styledComponents';

const ModalWindow = ({ title, content, onConfirm, onCancel }) => {
    return (
        <StyledOverlay>
            <StyledWindow>
                <StyledTitle>{title}</StyledTitle>
                <StyledContent>{content}</StyledContent>
                <StyledButtonsWrapper>
                    <Button label="Cancel" withBorder={false} onClick={onCancel} />
                    <Button label="Confirm" withBorder={false} onClick={onConfirm} />
                </StyledButtonsWrapper>
            </StyledWindow>
        </StyledOverlay>
    );
};

export default ModalWindow;
