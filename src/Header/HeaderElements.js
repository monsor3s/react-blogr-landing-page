import styled from 'styled-components'

export const Head = styled.div`
`;

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    z-index: 99;
    height: 600px;
    background-color: var(--light-red);
    border-radius: 0 0 0 100px;
`;

export const HeaderTitle = styled.h1`
    font-size: 25px;
    color: var(--white);
`;

export const HeaderMenu = styled.div`
    position: absolute;
`;

export const HeaderItem = styled.a`
    font-size: 20px;
    color: var(--white);
`;

export const HeaderBody = styled.div`
    display: flex;
    position: relative;
`;

export const TitleHeaderBody = styled.h1`
    font-size: 40px;
    position: absolute;
    justify-content: center;
    align-items: center;
`;

export const SubtitleHeaderBody = styled.h2`

`;

export const ButtonStart = styled.button`
    position: absolute;
    width: 50px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

export const ButtonLearn = styled(ButtonStart)`
    
`;
