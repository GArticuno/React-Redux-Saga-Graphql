import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 0.5rem 0;
  text-align: center;
  width:100%;
  
  color: var(--text);
  background-color: var(--card-bg);
  font-family: 'Oxanium', sans-serif;
  
  border-radius: 0 0 20px 20px;
`
export function Header() {
  return (
    <StyledHeader>
      <h1>Rick and Morty Characters</h1>
    </StyledHeader>
  )
}
