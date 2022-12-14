import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from "ityped";


const Intro = () => {
    const textref = useRef(null);

    useEffect(() => {
         init(textref.current, {
             showCursor: false,
             strings: ["Computer Engineer","React Developer"]
        });

    }, []);

    return (
        <Wrapper>
            <div className="intro" id="intro">
                <div className="left">
                    <div className="imgContainer">
                        <img src="Images/trpic.png" alt='niraj' />
                    </div>
                </div>

                <div className="right">
                    <div className="intro-about">
                        <h2>Hi There, I'm</h2>
                        <h1>Nirajan Hamal</h1>
                        <h3><span ref={textref} ></span></h3>
                    </div>

                    <NavLink className="arrow-down" to="/portfolio">
                        <KeyboardArrowDownIcon />
                    </NavLink>
                </div>
            </div>
        </Wrapper>


    )
};

const Wrapper = styled.section`
    .intro{
        height: 100vh;
        background-color: white;
        display: flex;

        .left{
            flex: 0.5;
            overflow: hidden;

            .imgContainer{
                width: 700px;
                height: 700px;
                background-color: red;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                float: right;
                


                img{
                    height: 90%;
                    border-radius: 40%;
                  
                }
            }
        }

        .right{
            flex:0.5;

            .intro-about{
                width: auto;
                height: 100%;
                padding-left: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;

                h1{
                    font-size: 60px;
                    margin: 10px 0;
                }

                h2{
                    font-size: 35px;
                }

                h3{
                    font-size: 30px;

                    
                }
            }

            .arrow-down{
                position: absolute;
                bottom: 5px;
                
                animation: arrowBlink 2s infinite;
                
            }
            @keyframes identifier {
                100%{
                    opacity: 0;
                }
            }
        }
    }

`;

export default Intro;