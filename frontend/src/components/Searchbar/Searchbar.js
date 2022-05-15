import React from 'react'
import StyledSearch from './Searchbar.styled'
import { Search } from 'styled-icons/boxicons-regular'

const Searchbar = () => {
    return(
        <StyledSearch>
            <form action="/" method="get">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search..."
                    name="s" 
                />
                <button type="submit">
                    <Search/>
                </button>
            </form>
        </StyledSearch>
    )
}

export default Searchbar