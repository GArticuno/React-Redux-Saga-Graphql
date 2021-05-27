import React, { ReactNode } from 'react'
import styled from 'styled-components';

const List = styled.ul`
  list-style-type:none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: sans-serif;
  margin: 1rem;
  padding: 0;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

`

interface Props {
  children: ReactNode
}

export default function CharacterUl({children}: Props) {
  return (
    <List>
      {children}
    </List>
  )
}
