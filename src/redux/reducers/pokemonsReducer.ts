import { SELECT_POKEMON, SET_POKEMONS } from './../types';
import { RootState } from './index';

export interface IPokemonItem {
    name: string,
    types: Array<string>,
    imgUrl: string,
    attack: number,
    defense: number,
    hp: number,
    spAttack: number,
    spDefense: number,
    speed: number,
    weight: number,
    totalMoves: number
};

interface IPokenosState {
    pokemons: Array<IPokemonItem>,
    selectedPokemon: null | IPokemonItem
};

interface ISetPokemonsAction {
    type: typeof SET_POKEMONS,
    payload: Array<IPokemonItem>
};

interface ISetSelectedPokemonAction {
    type: typeof SELECT_POKEMON,
    payload: IPokemonItem
};

export type PokemonsActionTypes = ISetPokemonsAction | ISetSelectedPokemonAction;

export const getPokemonsState = (rootState: RootState): IPokenosState => (rootState.pokemons);

const initialState: IPokenosState = {
    pokemons: [],
    selectedPokemon: null

};

export const pokemonsReducer = (state = initialState, action: PokemonsActionTypes): IPokenosState => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload]
            };

        case SELECT_POKEMON:
            return {
                ...state,
                selectedPokemon: action.payload
            }

        default:
            return state
    }
}
