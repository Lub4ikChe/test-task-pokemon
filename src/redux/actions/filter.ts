import { SET_FILTERS } from './../types';
import { FilterActionTypes } from "../reducers/filterReducer"
import { SET_FILTER } from "../types"
import { ThunkAction } from 'redux-thunk';
import { RootState } from './../reducers/index';
import axios from 'axios';

export const setFilterType = (type: string | null): FilterActionTypes => {
    return {
        type: SET_FILTER,
        payload: type
    }
}

export const setFilters = (items: Array<string>): FilterActionTypes => {
    return {
        type: SET_FILTERS,
        payload: items
    }
}

export const fetchFilters = ():
    ThunkAction<
        void,
        RootState,
        undefined,
        FilterActionTypes
    > => (dispatch) => {
        type getData = { results: Array<{ name: string, url: string }> };
        const link: string = 'https://pokeapi.co/api/v2/type?limit=999';
        let parseredData: Array<string> = [];
        axios.get<getData>(link)
            .then(({ data }) => {
                parseredData = data.results.map(item => item.name);
                dispatch(setFilters(parseredData));
            }).catch(err => console.log(err));
    }

