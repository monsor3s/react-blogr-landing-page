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

export const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
`;

export const NavContainer = styled.div`
    z-index: 99;
    position: absolute;
    width: 1132px;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerTitle = styled.div`
    z-index: 99;
    position: relative;
    width: 126px;
    height: 61px;
    display: flex;
`;

export const HeaderTitle = styled.h1`
    position: absolute;
    z-index: 99;
    width: 126px;
    height: 61px;
    font-size: 30px;
    color: var(--white);
    display: flex;
    align-items: center;
`;

export const HeaderMenu = styled.div`
    position: relative;
    z-index: 99;
    width: 332px;
    height: 61px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderItem = styled.ul`
    z-index: 99;
    width: 332px;
    height: 61px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    &:last-child {
        &:hover {
            z-index: 2;
        }
    }
`;

export const HeaderLinks = styled.li`
    position: absolute;
    width: 110px;
    height: 61px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
`;

export const HeaderArrow = styled.img`
    width: 8px;
    height: 6px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 99;
`;

export const DropDownListContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 30px;
    top: 100px;
    right: 120px;
    z-index: 99;
    width: 160px;
    height: 140px;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const DropDownList = styled.ul`
    position: absolute;
    padding: 0;
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
`;

export const ListItem = styled.li`
    width: auto;
    height: 100px;
    font-size: 15px;
    list-style: none;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }
`;

export const HeaderLogin = styled.div`
    position: relative;
    z-index: 99;
    width: 230px;
    height: 61px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonLogin = styled.a`
    position: relative;
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
    position: relative;
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
