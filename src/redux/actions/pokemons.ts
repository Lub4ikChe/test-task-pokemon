import { showLoader } from './app';
import { AppActionTypes } from './../reducers/appReducer';
import { SELECT_POKEMON, SET_POKEMONS } from './../types';
import { PokemonsActionTypes } from './../reducers/pokemonsReducer';
import { IPokemonItem } from "../reducers/pokemonsReducer";
import { ThunkAction } from 'redux-thunk';
import { RootState } from './../reducers/index';
import axios from 'axios';

export const setPokemons = (pokemons: Array<IPokemonItem>): PokemonsActionTypes => {
    return {
        type: SET_POKEMONS,
        payload: pokemons
    }
}

export const setSelectedPokemon = (pokemon: IPokemonItem): PokemonsActionTypes => {
    return {
        type: SELECT_POKEMON,
        payload: pokemon
    }
}

export const fetchPokemons = (offset: number):
    ThunkAction<
        void,
        RootState,
        undefined,
        PokemonsActionTypes | AppActionTypes
    > => (dispatch) => {
        type getData = { results: Array<{ name: string, url: string }> };
        type getAllData = {
            types: Array<{ type: { name: string } }>,
            stats: Array<{ stat: { name: string }, base_stat: number }>,
            weight: number,
            moves: [],
            sprites: { front_default: string }
        };
        const link: string = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`;
        const parseredData: Array<IPokemonItem> = [];
        dispatch(showLoader(true));
        axios.get<getData>(link)
            .then(({ data }) => {
                const pokemonPromises = data.results.map(item => axios.get<getAllData>(item.url));
                axios.all(pokemonPromises)
                    .then((resp) => {
                        for (let i = 0; i < data.results.length; i++) {
                            const pokemonObj: IPokemonItem = {
                                name: data.results[i].name,
                                types: resp[i].data.types.map(item => item.type.name),
                                imgUrl: resp[i].data.sprites.front_default,
                                attack: resp[i].data.stats.find(item => item.stat.name === 'attack')!.base_stat,
                                defense: resp[i].data.stats.find(item => item.stat.name === 'defense')!.base_stat,
                                hp: resp[i].data.stats.find(item => item.stat.name === 'hp')!.base_stat,
                                spAttack: resp[i].data.stats.find(item => item.stat.name === 'special-attack')!.base_stat,
                                spDefense: resp[i].data.stats.find(item => item.stat.name === 'special-defense')!.base_stat,
                                speed: resp[i].data.stats.find(item => item.stat.name === 'speed')!.base_stat,
                                weight: resp[i].data.weight,
                                totalMoves: resp[i].data.moves.length,
                            };
                            parseredData.push(pokemonObj);
                        }
                        dispatch(setPokemons(parseredData));
                        dispatch(showLoader(false));
                    }).catch(err => console.log(err));
            }).catch(err => console.log(err));
    }

