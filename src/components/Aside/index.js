import React from 'react'
import { AsideContainer, AsideList, AsideItem, AsideLink } from './AsideElements'

function Aside() {
  return (
    <AsideContainer>
        <AsideList>
            <AsideItem>
                <AsideLink>Home</AsideLink>
            </AsideItem>
            <AsideItem>
                <AsideLink>About</AsideLink>
            </AsideItem>
            <AsideItem>
                <AsideLink>Tour</AsideLink>
            </AsideItem>
            <AsideItem>
                <AsideLink>Contact</AsideLink>
            </AsideItem>
        </AsideList>
    </AsideContainer>
  )
}

export default Aside