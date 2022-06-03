import React from 'react'
import { GlassContainer } from './GlassElements'

import { useSelector } from 'react-redux'

function Glass() {

  const toggleStatus = useSelector(state => state.toggleReducer.status)

  return (
    <GlassContainer className={toggleStatus ? 'active' : null}/>
  )
}

export default Glass