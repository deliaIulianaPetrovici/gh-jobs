import SearchOptionsTypes from './searchOptions.types';

const INITIAL_STATE = {
    pageNumber: 1,
    searchOptionsUrl:""
};

const searchOptionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SearchOptionsTypes.UPDATE_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
            };
        case SearchOptionsTypes.UPDATE_SEARCH_OPTIONS:
            return {
                ...state,
                searchOptionsUrl: action.payload
            };

        default:
            return state;
    }
}

export default searchOptionsReducer;