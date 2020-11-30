import styled from 'styled-components';

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
`;

export const StyledWindow = styled.div`
    border-radius: 4px;
    background: #fff;
    margin: 0 auto;
    width: 600px;
`;

export const StyledTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    padding: 15px;
`;

export const StyledContent = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 15px;
    line-height: 20px;
    color: #666;
`;

export const StyledButtonsWrapper = styled.div`
    padding: 10px;
    text-align: right;
`;
