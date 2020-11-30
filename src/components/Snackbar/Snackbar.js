import React, { useEffect } from 'react';

import { StyledSnackbarWrapper, StyledSnackbar, StyledMessage } from './styledComponents';
import CloseButton from'../CloseButton';

const getHorizontalPosition = position => {
    if (position === 'topLeft' || position === 'bottomLeft') return 'left';
    if (position === 'topRight' || position === 'bottomRight') return 'right';
    return 'center';
};

const getVerticalPosition = position => {
    if (position === 'bottomLeft' || position === 'bottomCenter' || position === 'bottomRight') return 'bottom';
    return 'top';
};

const Snackbar = ({ position = 'topCenter', message, type = 'info', timeout = 1000, onClose }) => {
    useEffect(() => {
        const snackbarTimeout = setTimeout(onClose, timeout);

        return () => clearTimeout(snackbarTimeout);
    }, []);

    return <StyledSnackbarWrapper horizontal={getHorizontalPosition(position)} vertical={getVerticalPosition(position)}>
        <StyledSnackbar type={type}>
            <StyledMessage>{message}</StyledMessage>
            <CloseButton color="#fff" onClick={onClose} />
        </StyledSnackbar>
    </StyledSnackbarWrapper>;
};

export default Snackbar;
