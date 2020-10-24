import { SET_FILTERS } from './../types';
import { SET_FILTER } from '../types';
import { RootState } from './index';
import { IPokemonItem } from './pokemonsReducer';

interface IFilterState {
    filterType: string | null,
    filters: Array<string>
};

interface ISetFilteTypeAction {
    type: typeof SET_FILTER,
    payload: string | null
};

interface ISetFiltersAction {
    type: typeof SET_FILTERS,
    payload: Array<string>
}

export type FilterActionTypes = ISetFilteTypeAction | ISetFiltersAction;

export const getFilterState = (rootState: RootState): IFilterState => (rootState.filter);

const initialState: IFilterState = {
    filterType: null,
    filters: [],
};

export const filterReducer = (state = initialState, action: FilterActionTypes): IFilterState => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterType: action.payload
            };

        case SET_FILTERS:
            return {
                ...state,
                filters: action.payload
            }

        default:
            return state
    }
}

export const filterByType = (items: Array<IPokemonItem>, type: string | null): Array<IPokemonItem> => {
    if (type === null) {
        return items;
    } else {
        return items.filter((item => {
            return item.types.includes(type);
        }));
    }
}