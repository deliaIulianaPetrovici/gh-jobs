import JobsActionTypes from './jobs.types';


export const updateJobCollections=(jobCollections)=>({
    type: JobsActionTypes.UPDATE_JOB_COLLECTION,
    payload:jobCollections,
});

export const loadMoreJobs=(newJobCollection)=>({
    type: JobsActionTypes.LOAD_MORE_JOBS,
    payload:newJobCollection,
});