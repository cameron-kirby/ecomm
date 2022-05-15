import React from 'react'
import StyledHome from './Home.styled'

const Home = () => {

    return (
        <StyledHome>
            <section className='promotion'>
                <div className='promo-text'>
                    <div className='promo-head-accent'>Best Furniture For Your Castle....</div>
                    <div className='promo-heading'>New Furniture Collection Trends in 2020</div>
                    <div className='promo-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</div>
                    <button className='promo-button'>Shop now</button>
                </div>
            </section>
        </StyledHome>
    )
}

export default Home