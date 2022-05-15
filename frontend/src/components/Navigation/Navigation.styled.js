import styled from 'styled-components'

const StyledNav = styled.nav`

    .heading-bar {
        width: 100%;
        background-color: var(--violet);
        color: var(--white);

        .heading-container {
            padding: 13px 20% 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            svg {
                width: 1rem;
            }

            .heading-item {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .left-aligned-heading {
                display: flex;
                flex-direction: row;
                justify-content: center;

                .heading-item {
                    padding-right: 48px;
                }

                svg {
                    padding-right: 10px;
                }
            }

            .right-aligned-heading {
                display: flex;
                flex-direction: row;
                align-items: center;

                .heading-item {
                    padding-left: 26px;
                    span {
                        padding-right: 3px;
                    }
                }
            }
        }
        
        
        
    }

    .nav-bar {
        padding: 19px 20%;

        .nav-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .logo {
                color: var(--text-primary);
                font-size: 2rem;
                font-family: 'DM Serif Display', serif;
            }

            .menu {
                display: flex;
                flex-direction: row;
                align-items: center;

                a {
                    text-decoration: none;
                    color: var(--text-primary);
                    padding-right: 36px;
                    transition: 500ms;

                    &:hover {
                        color: var(--red);
                    }
                }
            }
        }
    }
`

export default StyledNav