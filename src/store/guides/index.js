import * as types from './actionTypes';

const initialState = {
    loaded: false,
    list: [],
    selected: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GUIDES_LOAD: {
            const { guides } = action;

            return {
                ...state,
                loaded: true,
                list: guides,
            };
        }

        case types.GUIDES_CREATE: {
            const { guide } = action;

            return {
                ...state,
                list: [
                    ...state.list,
                    guide,
                ],
            };
        }

        case types.GUIDES_SELECT: {
            const { guide } = action;

            return {
                ...state,
                selected: guide,
            };
        }

        case types.GUIDES_EDIT: {
            const { id, guide } = action;

            return {
                ...state,
                list: state.list.map((x) => x.id === id ? guide : x),
            };
        }

        case types.GUIDES_DELETE: {
            const { id } = action;

            return {
                ...state,
                list: state.list.filter((x) => x.id !== id),
            }
        }

        default: return state;
    }
}