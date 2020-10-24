import { SHOW_LOADER } from './../types';
import { AppActionTypes } from './../reducers/appReducer';

export const showLoader = (show: boolean): AppActionTypes => {
    return {
        type: SHOW_LOADER,
        payload: show
    }
}