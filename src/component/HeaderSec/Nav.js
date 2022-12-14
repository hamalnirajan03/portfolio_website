import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <Wrapper>
            <div className="navbar">
                <ul className="navbar-list">
                    <li>
                        <NavLink to="/" className="navbar-links">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/portfolio" className="navbar-links">
                            Portfolio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className="navbar-links">
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/aboutMe" className="navbar-links">
                            AboutMe
                        </NavLink>
                    </li>
                </ul>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.section`
    

    .navbar-list{
        display: flex;
        gap: 4.8rem;
        align-items: center;

        li{
            list-style-type: none;
        }
    }

    .active .navbar-list{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
    }

    .navbar-links{
        text-decoration: none;
        list-style: none;
        font-size: 20px;
        &:visited {
            text-decoration: none;
            list-style: none;
            display: inline-block;
            font-size: 20px;
            font-weight: 500;
            text-transform: uppercase;
            transition: color 0.3s linear;
        }

        &:hover,
        &:active{
            color: red;
        }
       
        

    }
`;

export default Nav;