import React, { useState } from 'react';

import Button from './components/Button';
import ModalWindow from './components/ModalWindow';
import Snackbar from './components/Snackbar';
import { GlobalStyle, StyledButtonsRow } from './styledComponents';
import { modalContent, snackbarButtons, snackbarTimeout } from './config';

function App() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isSnackbarOpen, setIsSnackbarOpen ] = useState(null);
    const [ snackbarProps, setSnackbarProps ] = useState({});

    const toggleModal = open => setIsModalOpen(open);

    const openSnackbar = (position, type, message) => {
        setSnackbarProps({ position, type, message });
        setIsSnackbarOpen(true);
    };

    const closeSnackbar = () => setIsSnackbarOpen(false);

    const handleModalConfirm = () => {
        console.log('Confirm');
        toggleModal(false);
    };

    const handleModalCancel = () => {
        console.log('Cancel');
        toggleModal(false);
    };

    const renderSnackbarButtons = () => snackbarButtons.map((item, index) => {
        const { position, type, message } = item;
        return <Button
            key={`snackbar_button_${index}`}
            isDisabled={isSnackbarOpen}
            label={item.label}
            onClick={() => openSnackbar(position, type, message)}
        />
    });

    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledButtonsRow>
                <Button label="Open modal" onClick={() => toggleModal(true)} />
            </StyledButtonsRow>
            <StyledButtonsRow>
                {renderSnackbarButtons()}
            </StyledButtonsRow>
            {isModalOpen && <ModalWindow
                title="Modal title"
                content={modalContent}
                onConfirm={handleModalConfirm}
                onCancel={handleModalCancel}
            />}
            {isSnackbarOpen && <Snackbar
                message={snackbarProps.message}
                position={snackbarProps.position}
                type={snackbarProps.type}
                onClose={closeSnackbar}
                timeout={snackbarTimeout}
            />}
        </React.Fragment>
    );
}

export default App;
