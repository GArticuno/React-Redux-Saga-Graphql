import React, {ReactNode} from 'react'
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Warp = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
export default function Warpper({children}: Props) {
  return (
    <Warp>
      {children}
    </Warp>
  )
}
