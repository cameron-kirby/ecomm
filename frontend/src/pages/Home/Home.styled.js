import styled from 'styled-components'

const StyledHome = styled.div`
    .promotion {
        display: flex;
        align-items: center;
        height: 764px;
        padding: 0 20%;
        background-color: var(--bg-accent);
        
        .promo-text {
            width: 50%;
            display: flex;
            flex-direction: column;

            .promo-head-accent {
                color: var(--red);
                font-size: 1rem;
            }
            .promo-heading {
                padding: 12px 0;
                color: var(--text-primary);
                font-size: 3.3rem;
            }
            .promo-subheading {
                color: var(--text-sub);
                font-size: 1rem;
                padding-bottom: 24px;
            }
            .promo-button {
                width: 150px;
                height: 50px;
                border: none;
                background: var(--red);
                color: var(--white);
            }
        }
    }
`

export default StyledHome