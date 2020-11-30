import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        margin: 80px 40px 40px;
        color: #333;
        font-size: 16px;
    }
`;

export const StyledButtonsRow = styled.div`
    margin-bottom: 30px;
`;
