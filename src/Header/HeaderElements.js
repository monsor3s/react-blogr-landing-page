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

export const HeaderMenu = styled.ul`
    width: 700px;
    height: 100px;
    padding: 50px 0 0 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;

export const HeaderTitle = styled.h1`
    width: 200px;
    height: 100px;
    font-size: 45px;
    color: var(--white);
    padding: 0 0 0 50px;
    display: flex;
    align-items: center;
`;

export const HeaderItem = styled.li`
    width: 120px;
    height: 100px;
    font-size: 20px;
    font-weight: bold;
    color: var(--white);
    display: flex;
    align-items: center;
`;

export const HeaderLogin = styled.div`
    width: 600px;
    height: 100px;
    padding: 50px 0 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ButtonLogin = styled.a`
    font-size: 14px;
    color: var(--white);
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonSignUp = styled.button`
    font-size: 14px;
    width: 100px;
    height: 30px;
    color: var(--light-red);
    font-weight: bold;
    border-radius: 15px;
    border: 0;
    justify-content: center;
    align-items: center;
`;

