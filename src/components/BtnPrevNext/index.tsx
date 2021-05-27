import React from 'react';
import styled from 'styled-components';
import {IoCaretBack, IoPlayBack, IoCaretForward, IoPlayForward} from 'react-icons/all';


interface Props {
  indexPage: number;
  length: number;
  eventPrev: () => void;
  eventNext: () => void;
  eventHead: () => void;
  eventTail: () => void;
}

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  font-family: 'Oxanium', sans-serif;

  button{
    margin: 0.3rem;
    padding: 0.3rem;
    cursor: pointer;
    
    background-color: var(--button);
    border: none;
    border-radius: 5px;
  
    color: var(--text);

    transition: background-color 0.2s;
    .icon {   
      font-size: 1.5rem;
      
    }
    
    &:hover:not(:disabled){
       background-color: var(--button-hover);
    }

    &:disabled{
      cursor: default;
      opacity: 0.4;
    }

  }

  .index {
    margin: 0 0.3rem;
    cursor: default;

    color: var(--text);
    font-size: 2rem;

    p {
      background-color: var(--button);
      padding: 0.3rem 1rem;
      border-radius: 5px;
    }
  }
`


export function BtnPrevNext({
  indexPage,
  length,
  eventPrev, 
  eventNext, 
  eventHead, 
  eventTail, 
  }: Props) {
  
  return (
    <Buttons>
      <button title='Page 1' onClick={eventHead} disabled={indexPage === 0}>
        <IoPlayBack className='icon'/>
      </button>
      <button title='Previous page' onClick={eventPrev} disabled={indexPage === 0}>
        <IoCaretBack className='icon'/>
      </button>
      <div title='Current page' className='index'>
        <p>{indexPage +1}</p>
      </div>
      <button title='Next page' onClick={eventNext} disabled={indexPage + 1 === length}>
        <IoCaretForward className='icon'/>
      </button>
      <button title='Page 34' onClick={eventTail} disabled={indexPage + 1 === length}>
        <IoPlayForward className='icon'/>
      </button>
    </Buttons>
  )
}