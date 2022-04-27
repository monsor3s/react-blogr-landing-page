import styled from 'styled-components'
import bgDesk from '../images/bg-pattern-intro-desktop.svg'


export const Head = styled.div`
`;

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    z-index: 99;
    height: 600px;
    background: linear-gradient(90deg, rgba(255,131,109,1) 0%, rgba(255,67,89,1) 57%, rgba(254,78,91,1) 100%);
    border-radius: 0 0 0 100px;
    overflow: hidden;
`;

export const ImageBackgroundDesk = styled.div`
    z-index: 0;
    background-image: url(${bgDesk});
    background-size: cover;
    background-size: 210% 44%;
    background-position: center;
    position: absolute;
`;

export const HeaderMenu = styled.ul`
    z-index: 99;
    width: 700px;
    height: 100px;
    padding: 50px 0 0 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;

export const HeaderTitle = styled.h1`
    z-index: 99;
    width: 200px;
    height: 100px;
    font-size: 45px;
    color: var(--white);
    padding: 0 0 0 50px;
    display: flex;
    align-items: center;
`;

export const HeaderItem = styled.li`
    z-index: 99;
    width: 120px;
    height: 100px;
    font-size: 20px;
    font-weight: bold;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        text-decoration: underline;
    }
`;

export const DropDownListContainer = styled.div`
    z-index: 99;
    width: 120px;
    height: 100px;
    background-color: red;
`;

export const DropDownList = styled.ul`

`;

export const ListItem = styled.li`

`;

export const HeaderLogin = styled.div`
    z-index: 99;
    width: 600px;
    height: 100px;
    padding: 50px 0 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ButtonLogin = styled.a`
    z-index: 99;
    font-size: 14px;
    color: var(--white);
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonSignUp = styled.button`
    z-index: 99;
    font-size: 14px;
    width: 100px;
    height: 30px;
    color: var(--light-red);
    font-weight: bold;
    border-radius: 15px;
    border: 0;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #fe7c86;
        color: var(--white);
    }
`;

export const HeaderBody = styled.div`
    z-index: 99;
    width: 620px;
    height: 200px;
    margin: 200px 0 0 400px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const HeaderBodyTitle = styled.h1`
    z-index: 99;
    width: 700px;
    height: 50px;
    font-size: 45px;
    position: relative;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderBodySpan = styled.span`
    z-index: 99;
    width: 700px;
    height: 50px;
    font-size: 20px;
    position: relative;
    color: var(--gray-blue);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonStart = styled(ButtonSignUp)`
    position: absolute;
    left: 200px;
    bottom: 0;

    &:hover {
        background-color: #fe7c86;
        color: var(--white);
    }
`;

export const ButtonLearn = styled(ButtonSignUp)`
    position: absolute;
    right: 200px;
    bottom: 0;
    border: 1px solid var(--white);
    background-color: #ff585e;
    color: var(--white);

    &:hover {
        background-color: var(--white);
        color: var(--light-red);
    }
`;
