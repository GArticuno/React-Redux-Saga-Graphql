
export enum CharacterTypes {
  LOAD_REQUEST ='@character/LOAD_REQUEST',
  LOAD_SUCCESS ='@character/LOAD_SUCCESS',
  LOAD_FAILURE ='@character/LOAD_FAILURE',
  LOAD_NEXT = '@character/LOAD_NEXT',
  
}

export interface Location {
  id: number;
  name: string;
  dimension: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: Location;
  image: string;
}

export interface Info{
  count: number,
  pages: number,
  next: number,
  prev: number
}

export interface All {
  results: Character[];
  info: Info;
}

export interface CharacterState {
  readonly data: All[];
  readonly loading: boolean;
  readonly error: boolean;
}