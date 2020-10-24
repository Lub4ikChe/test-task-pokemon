import { SHOW_LOADER } from './../types';
import { RootState } from './index';

interface IAppState {
    showLoader: boolean
};

interface IAppAction {
    type: typeof SHOW_LOADER,
    payload: boolean
};

export type AppActionTypes = IAppAction;

export const getAppState = (rootState: RootState): IAppState => (rootState.app);

const initialState: IAppState = {
    showLoader: false
};

export const appReducer = (state = initialState, action: AppActionTypes): IAppState => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                showLoader: action.payload
            }

        default:
            return state
    }
}