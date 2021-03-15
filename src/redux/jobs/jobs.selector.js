import {createSelector} from 'reselect';

const selectJobs=(state)=>state.jobs;

export const selectCollections=createSelector(
    [selectJobs],
    (jobs)=>jobs.jobCollections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (jobCollections) =>
    jobCollections ? Object.keys(jobCollections).map((key) => jobCollections[key]) : []
  );

  export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (jobCollections) =>
  jobCollections ? jobCollections.find(collection=>collection.id===collectionUrlParam) : null
  );

