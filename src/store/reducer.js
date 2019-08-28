let defaultState = {
    keywords: '', // the word used to filter jobs
    userhome:'No 500, South Pudong Rd', //The location user provide (the start location)
    userhome_lat:0.00,
    userhome_long:0.00,
    joblist: [],
    currentjob: {}, //current JDP job data
    directions: [], // the direction results we got from google
    suggestions: {}, // the preferred plan we suggest (by car, by train etc.)
    direction: {}
};
export default (state = defaultState, action) => {
    if (action.type === 'updateKeyword') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.keywords = action.value;
        return newState;
    }

    if (action.type === 'search') {
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }

    if (action.type === 'getJobResult') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.joblist = action.payload;
        return newState;
    }

    if (action.type === 'setJobDetail') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.currentjob = action.payload;
        return newState;
    }

    if (action.type === 'setDirection') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.direction = action.payload;
        newState.loading = false;
        return newState;
    }

    return state;
}
