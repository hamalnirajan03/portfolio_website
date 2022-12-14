import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <MainHeader>
            <div className="header">
                <NavLink to="/" className="logo">
                    Nirajan Hamal
                </NavLink>

            </div>

            <Nav />
        </MainHeader>
    )
};

const MainHeader = styled.section`
padding: 4 1rem;
height: 5rem;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
/* background-color: aliceblue; */
box-shadow: rgba(50,50,93,0.23) 0 30px 30px -20px ;

.header{
    text-decoration: none;
    font-size: 2rem;

    .logo{
        text-decoration: none;
        top: ;
    }

    p{
        font-size: 20px
    }
}

`;

export default Header;