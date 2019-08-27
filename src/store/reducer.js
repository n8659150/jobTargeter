let defaultState = {
    keywords: '', // the word used to filter jobs
    userhome:'No 500, South Pudong Rd', //The location user provide (the start location)
    userhome_lat:0.00,
    userhome_long:0.00,
    joblist: [{id:1,jobTitle:'Software Engineer1'},{id:2,jobTitle:'Software Engineer2'},{id:3,jobTitle:'Software Engineer3'}],
    currentjob: {}, //current JDP job data
    directions: [], // the direction results we got from google
    suggestions: {} // the preferred plan we suggest (by car, by train etc.)
};
export default (state = defaultState, action) => {
    if (action.type === 'updateKeyword') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.keywords = action.value;
        return newState;
    }

    if (action.type === 'search') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.keywords = '';
        return newState;
    }

    if (action.type === 'getJobDetail') {
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }

    if (action.type === 'setJobDetail') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.currentjob = action.payload;
        console.log(newState)
        return newState;
    }

    return state;
}
