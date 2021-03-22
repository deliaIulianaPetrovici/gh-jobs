import SearchOptionsTypes from './searchOptions.types';

export const updatePageNumber=(page_number)=>({
    type: SearchOptionsTypes.UPDATE_PAGE_NUMBER,
    payload:page_number,
});

export const updateSearchOptions=(searchOptionsUrl)=>({
    type: SearchOptionsTypes.UPDATE_SEARCH_OPTIONS,
    payload:searchOptionsUrl,
});

