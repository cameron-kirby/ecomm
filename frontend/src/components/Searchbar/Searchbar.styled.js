import styled from 'styled-components'

const StyledSearch = styled.div`

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    input[type=text] {
        display:inline-block;
        padding:8px 10px;
        line-height:140%;
        font-size: 1rem;
        border: 2px solid #E7E6EF;
        border-right: 0px solid;
    }

    button {
        padding: 10px 10px;
        background: var(--red);
        border: none;
        cursor: pointer;
        color: var(--white);

        svg {
            width: 1.3rem;
        }
    }
`

export default StyledSearch