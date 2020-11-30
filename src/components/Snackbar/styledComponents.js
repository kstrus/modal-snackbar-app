import styled from 'styled-components';

export const StyledSnackbarWrapper = styled.div`
    position: fixed;
    ${props => props.horizontal === 'center' && 'left: 50%;'}
    ${props => props.horizontal === 'center' && 'transform: translateX(-50%);'}
    ${props => props.horizontal === 'left' && 'left: 20px;'}
    ${props => props.horizontal === 'right' && 'right: 20px;'}
    ${props => props.vertical === 'top' && 'top: 10px;'}
    ${props => props.vertical === 'bottom' && 'bottom: 10px;'}
    
    @media (max-width: 420px) {
        width: 100%;
        left: 0;
        right: 0;
        transform: translateX(0);
    }
`;

export const StyledSnackbar = styled.div`
    padding: 10px 10px 10px 15px;
    ${props => props.type === 'success' && 'background-color: #4caf50;'}
    ${props => props.type === 'warning' && 'background-color: #ff9800;'}
    ${props => props.type === 'info' && 'background-color: #2196f3;'}
    ${props => props.type === 'error' && 'background-color: #f44336;'}
    border-radius: 4px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 600px) {
        margin: 0 10px;
    }
`;

export const StyledMessage = styled.div`
    padding-right: 20px;
    max-width: 400px;
    
    @media (max-width: 600px) {
        max-width: unset;
    }
`;
