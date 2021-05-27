import React from 'react'
import styled from 'styled-components';
import {GoCode} from 'react-icons/all';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  left: 0;
  bottom: 0;

  background-color: var(--card-bg);
  font-size: 1.2rem;
  font-family: 'Oxanium', sans-serif;
  border-radius: 20px 20px 0px 0px;

  .icon {
    color: var(--alive);
    font-size: 1.5rem;
    margin: 0 0.3rem;
  }

  p {
    color: var(--text);
    margin-left: 0.2rem;

    a {
      color: var(--text);
      transition: color 0.2s;
      &:hover{
        color: var(--alive);
      }
    }
  }
`

export function Footer() {
  return (
    <StyledFooter>
      <GoCode className='icon'/>
      <p>by <a href="https://garticuno.github.io/EcoTrip/" target='_blank' rel="noreferrer">Garticuno</a>  2021</p>
    </StyledFooter>
  )
}
