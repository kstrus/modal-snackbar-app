import styled from 'styled-components';

export const StyledButton = styled.button`
    border: ${props => props.withBorder ? '1px solid #1976d2' : 'none'};
    border-radius: 4px;
    color: #1976d2;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px 15px;
    background: #fff;
    font-size: 14px;
    margin: 6px;

    &:not([disabled]):hover {
        background: rgba(25, 118, 210, 0.1);
    }
    
    &:disabled {
        color: #bdbdbd;
        border-color: #bdbdbd;
        cursor: not-allowed;
    }
`;
