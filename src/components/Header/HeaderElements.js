import styled from 'styled-components'
import bgDesk from '../../images/bg-pattern-intro-desktop.svg'


export const Head = styled.div`
    
`;

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    z-index: 99;
    width: 1440px;
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
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const NavContainer = styled.div`
    z-index: 99;
    position: relative;
    width: 1132px;
    height: 61px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr; 
`;

export const ContainerTitle = styled.div`
    z-index: 99;
    position: relative;
    width: 126px;
    height: 61px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const HeaderTitle = styled.h1`
    position: relative;
    z-index: 99;
    width: 126px;
    height: 61px;
    font-size: 40px;
    color: var(--white);
    display: flex;
    align-items: center;
`;

export const HeaderMenu = styled.div`
    position: relative;
    z-index: 99;
    width: 332px;
    height: 61px;
    display: flex;
    grid-column-start: 2;
    grid-column-end: 3;
`;

export const HeaderItem = styled.ul`
    position: relative;
    z-index: 99;
    padding: 0;
    width: 110px;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const HeaderLinks = styled.li`
    position: relative;
    width: 60px;
    height: 61px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const HeaderArrow = styled.img`
    z-index: 99;
    width: 10px;
    height: 6px;
    margin-left: 1px;
    display: flex;
`;

export const DropDownListContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 62px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    width: 160px;
    height: 140px;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

`;

export const DropDownList = styled.ul`
    position: relative;
    padding: 0;
    width: 150px;
    height: 100px;
    margin: 20px 0 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ListItem = styled.li`
    width: auto;
    height: 100px;
    font-size: 16px;
    list-style: none;

    &:hover {
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const HeaderLogin = styled.div`
    position: relative;
    z-index: 99;
    width: 230px;
    height: 61px;
    grid-column-start: 6;
    grid-column-end: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
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
    width: 110px;
    height: 35px;
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
    width: 840px;
    height: 260px;
    position: absolute;
    margin: 150px 0 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const HeaderBodyTitle = styled.h1`
    z-index: 99;
    width: 840px;
    height: 60px;
    font-size: 60px;
    position: relative;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderBodySpan = styled.span`
    z-index: 99;
    width: 840px;
    height: 60px;
    font-size: 20px;
    position: relative;
    color: var(--gray-blue);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerButton = styled.div`
    z-index: 99;
    position: relative;
    width: 240px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonStart = styled(ButtonSignUp)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #fe7c86;
        color: var(--white);
    }
`;

export const ButtonLearn = styled(ButtonSignUp)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--white);
    background-color: #ff585e;
    color: var(--white);

    &:hover {
        background-color: var(--white);
        color: var(--light-red);
    }
`;
