import JobsActionTypes from './jobs.types';

const INITIAL_STATE={
    jobCollections:null,
};

// const loadJobs=(initialCollection, newCollecction)=>{
//     console.log(initialCollection);
//     console.log(newCollecction);
//     let x= initialCollection.concat(newCollecction);
//     console.log('x: '+ x);
//    return x;
// }

const jobsReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case JobsActionTypes.UPDATE_JOB_COLLECTION:
            return{
                ...state,
                jobCollections:  action.payload 
            };
            case JobsActionTypes.LOAD_MORE_JOBS:
            return{
                ...state,
                jobCollections: [...state.jobCollections,...action.payload]
            };
            default:
                return state;

    }
};

export default jobsReducer;