import * as types from './actionTypes';

export const loadGuides = (guides = []) => {
    return {
        type: types.GUIDES_LOAD,
        guides,
    };
}

export const createGuide = (guide = {}) => {
    return {
        type: types.GUIDES_CREATE,
        guide
    };
}

export const selectGuide = (guide = null) => {
    return {
        type: types.GUIDES_SELECT,
        guide
    };
}

export const editGuide = (id = '', guide = {}) => {
    return {
        type: types.GUIDES_EDIT,
        id,
        guide,
    };
}

export const deleteGuide = (id = '') => {
    return {
        type: types.GUIDES_DELETE,
        id,
    }
}