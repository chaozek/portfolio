import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
const NotFound = () => {
  return (
    <LostWrapper>
      <H1>NOT FOUND</H1>
      <Link to='/'>Back home</Link>
    </LostWrapper>
  )
}

export default NotFound

const H1 = styled.h1`
  font-size: 5rem;
`
const LostWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
