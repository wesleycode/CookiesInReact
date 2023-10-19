import styled from "styled-components";

export const CookieDescription = styled.p<{ FontSize?: number, TextAlign?: string }>`
    padding: 1.2vw;
    font-size: ${props => props.FontSize ? props.FontSize : 20}px;
    text-align: ${props => props.TextAlign ? props.TextAlign : "left"};
    color: ${(props) => props.color};
`;