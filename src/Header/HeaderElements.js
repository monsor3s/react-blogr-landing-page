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
    width: 300px;
    height: 100px;
    font-size: 45px;
    color: var(--white);
    padding: 40px 0 0 40px;
    display: inline-block;
`;

export const HeaderMenu = styled.ul`
    width: 600px;
    height: 100px;
    padding: 50px 0 0 50px;
    display: flex;
    justify-content: center;
    align-items: space-between;
    list-style: none;
`;

export const HeaderItem = styled.li`
    width: 150px;
    height: 100px;
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
