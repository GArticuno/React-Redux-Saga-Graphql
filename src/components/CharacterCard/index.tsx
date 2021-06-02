import React from 'react'
import styled from 'styled-components';
import { Character } from '../../store/ducks/Characters/types';

interface Props {
  character: Character
}

const Card = styled.li`
  display: grid;
  grid-template-columns: 1fr 1.3fr;

  margin:1rem;
  padding: 0.5rem 0;

  background: var(--card-bg);  
  font-family: sans-serif;
  border-radius: 15px;

  h2 {
    color: var(--text);
    text-align: center;
  }

  img {
    margin: 1rem;
    align-self: center;
    justify-self: center;
    height:14.5rem;
    width: 14.5rem;

    border: 3px solid white;
    border-radius: 14px;
  }

  p {
    color:var(--text);
    margin-left:0.3rem;
  }

  .info {
    
    .status {
      display: flex;

      p {
        margin: 0 0.5rem;
      }
      .status-copy{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .Alive {

        width:10px;
        height:10px;
        border-radius:50%;
        background-color: var(--alive);
        }

      .Dead {
        width:10px;
        height:10px;
        border-radius:50%;
        background-color: var(--death);
      }

      .unknown {
        width:10px;
        height:10px;
        border-radius:50%;
        background-color: var(--unknown);
      }
    }

    h3 {
      margin-left:0.3rem;
      color: #c0c0c0;
    }
  }

  @media (max-width:1100px){
    grid-template-columns: 1fr;

    img {
      height: 9rem;
      width: 9rem;
    }
    .info {
      margin-left: 0.5rem;

      h2 {
        text-align: center;
      }
    }
  }
`

export default function CharacterCard({character}: Props) {
  return (
    <Card>
      <img src={character.image} alt={character.name}/>
      <div className='info'>
        <h2>{character.name}</h2>
        <div className='status'>
            <p>Status: </p>
            <div className='status-copy'>
              <div className={character.status}/>
              <p>{character.status}</p>
            </div>
        </div>
        <p>Species: {character.species}</p>
        <h3>
          Location
        </h3>
        <div>
          <p>Home: {character.location.name}</p>
          <p>Dimension: {character.location.dimension}</p>
        </div>
      </div>     
    </Card>
  )
}
