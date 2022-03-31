import styled from 'styled-components'
import { colors } from "../styles/"

export const Head = styled.div`

`;

export const HeaderContainer = styled.div`
    z-index: 99;
    height: 600px;
    background-color: ${colors.lightRed};
    border-radius: 0 0 0 100px;
`;

export const HeaderTitle = styled.h1`
    font-size: 25px;
    color: ${colors.white};
`;

export const HeaderMenu = styled.ul`

`;

export const HeaderItem = styled.li`
    font-size: 20px;
    color: var(--white);
`;
