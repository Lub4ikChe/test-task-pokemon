import { filterReducer } from './filterReducer';
import { pokemonsReducer } from './pokemonsReducer';
import { appReducer } from './appReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    app: appReducer,
    pokemons: pokemonsReducer,
    filter: filterReducer
});

export type RootState = ReturnType<typeof rootReducer>