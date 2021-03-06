import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

export const LogoCont = styled.div`
    margin: 1rem 0.5rem;
`
export const Title = styled.h1`
    color: ${theme.headingFontColor};
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    font-weight: 800;
`

const Logo = () => {
    return (
        <LogoCont>
            <Title>cost buddy</Title>
        </LogoCont>
    )
}

export default Logo;