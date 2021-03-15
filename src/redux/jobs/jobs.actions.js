import JobsActionTypes from './jobs.types';
import JobActionTypes from './jobs.types';

export const updateJobCollections=(jobCollections)=>({
    type: JobsActionTypes.UPDATE_JOB_COLLECTION,
    payload:jobCollections,
});