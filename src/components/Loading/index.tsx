import React from 'react';
import styled from 'styled-components';

const Load = styled.div`
  
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  color: var(--text);
  font-family: "Oxanium", sans-serif;
  
  .frase {
    font-size: 3rem;    
  }

  .copyright {
    font-size: 1.3rem;
    color: var(--copyright);

    a {
      color: var(--text);
      transition: color 0.2s;

      &:hover{
        color: var(--alive);
      }
    }
  }

  @media (max-width:500px){
    .frase {
      font-size: 1.5rem;
    }

    source {
      height: 80%;
      width: 80%;
    }
  }

`

export function Loading() {
  return (
    <Load>
      <video className="project-webm" autoPlay loop muted>
        <source src="giphy.webm" type="video/webm"/>
      </video>
      <p className='copyright'>Gif created by <a href="https://giphy.com/alexbradt/" target='_blank' rel='noreferrer'>Alex Bradt</a></p> 
      <p className='frase'>Consertando o carburador quântico.</p>
    </Load>
  )
}
