import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {All} from '../../store/ducks/Characters/types';
import { ApplicationState } from '../../store';

import * as CharactersActions from '../../store/ducks/Characters/actions';
import CharacterCard from '../CharacterCard';
import CharacterUl from '../CharacterUl';
import { Loading } from '../Loading';
import { BtnPrevNext } from '../BtnPrevNext';


interface DispatchProps {
  loadRequest(): void;
}

interface StateProps {
  data: All[]
  }

type Props = StateProps & DispatchProps

function CharacterList({ data, loadRequest}: Props) {
  const [indexPage, setIndexPage] = useState(0);

  function nextPage(){
    setIndexPage(indexPage + 1)
  }

  function prevPage(){
    setIndexPage(indexPage - 1)
  }

  function headPage(){
    setIndexPage(0)
  }

  function tailPage(){
    setIndexPage(33)
  }

  useEffect(() => {  
    loadRequest();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {data[indexPage] === undefined ? (
        <Loading/>
      ):(
        <>
          <BtnPrevNext 
            indexPage={indexPage}
            length={data.length}
            eventPrev={() => prevPage()} 
            eventNext={() => nextPage()}
            eventHead={() => headPage()}
            eventTail={() => tailPage()}
          />
          <CharacterUl>
            {data[indexPage].results.map(character => (
              <CharacterCard key={character.id} character={character}/>
            ))}
          </CharacterUl>
          <BtnPrevNext 
            indexPage={indexPage}
            length={data.length}
            eventPrev={() => prevPage()} 
            eventNext={() => nextPage()}
            eventHead={() => headPage()}
            eventTail={() => tailPage()}
          />
        </>
      )}

    </div>

  );
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.characters.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);