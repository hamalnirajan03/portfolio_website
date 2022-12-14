import React from 'react';
import styled from 'styled-components';
import { Instagram, Facebook, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <Wrapper>
            <footer >
                <div className="container grid grid-three-column">
                    <div className="footer-about">
                        <h3>Nirajan Hamal</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique rhoncus molestie. </p>
                    </div>

                    <div className="footer-subscribe">

                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" placholder="e-mail" />
                            <input type="submit" value="subscribe" />
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3>follow us</h3>
                        <div className="footer-social--icons">
                            <div className="icons">
                                <a href="https://www.instagram.com/nirajanhamal33/?next=%2F"
                                >
                                    <Instagram />
                                </a>
                            </div>
                            <div className="icons">
                                <a href="https://www.facebook.com/floweroflife47/">
                                    <Facebook />
                                </a>
                            </div>
                            <div className="icons">
                                <GitHub />
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

            </footer>
        </Wrapper>
    )
};

const Wrapper = styled.section`

.container{
    max-width: 120rem;
    margin: 0 auto;
    background-color: aliceblue;
}

.grid{
    display: grid;
    gap: 9rem;
}
.grid-three-column{
    grid-template-columns: repeat(3, 1fr);
}

.footer-social--icons{
    display: flex;
    gap: 2rem;

    div{
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid black;

        .icons{
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
        }

    }
}



`;

export default Footer;