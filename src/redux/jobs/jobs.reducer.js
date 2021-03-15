import JobsActionTypes from './jobs.types';

const INITIAL_STATE={
    jobCollections:null,
};

const jobsReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case JobsActionTypes.UPDATE_JOB_COLLECTION:
            return{
                ...state,
                jobCollections: action.payload,
            };
            default:
                return state;

    }
};

export default jobsReducer;