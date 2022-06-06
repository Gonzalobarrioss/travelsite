import React, {useState} from 'react'
import { AsideContainer, AsideList, AsideItem, AsideLink } from './AsideElements'

import { store } from '../../redux/store'
import { useSelector } from 'react-redux'
import { toggle } from '../../redux/actions/ToggleAction'

function Aside() {

    const toggleStatus = useSelector(state => state.toggleReducer.status)
    

    return (
    <AsideContainer className={ toggleStatus ? 'active' : null}>
        <AsideList >
         {/*   <AsideItem var={1}>
                <AsideLink 
                    to='about'                    
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={0}
                    onClick={() =>store.dispatch(toggle(!toggleStatus))}
                >Inicio</AsideLink>
                </AsideItem>  */}
            <AsideItem 
                var={1}>
                <AsideLink 
                    to='about'                     
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={0}
                    onClick={() => store.dispatch(toggle(!toggleStatus))}
                >
                    Principal
                </AsideLink>
            </AsideItem>
            <AsideItem var={2}>
                <AsideLink
                    to='servicios'                   
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={0}
                    onClick={() => store.dispatch(toggle(!toggleStatus))}
                >Servicios</AsideLink>
            </AsideItem>
            <AsideItem var={3}>
                <AsideLink
                    to='contacto'                 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={0}
                    onClick={() => store.dispatch(toggle(!toggleStatus))}
                >Contacto</AsideLink>
            </AsideItem>
        </AsideList>
    </AsideContainer>
  )
}

export default Aside