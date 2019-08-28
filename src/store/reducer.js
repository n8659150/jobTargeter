let defaultState = {
    keywords: '', // the word used to filter jobs
    userhome:'浦东南路1001号', //The location user provide (the start location)
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
        newState.transType = action.payload.transType;
        newState.formatedDuration = newState.direction.route.paths ? new Date(newState.direction.route.paths[0].duration * 1000).toISOString().substr(11, 8) : new Date(newState.direction.route.transits[0].duration * 1000).toISOString().substr(11, 8);
        newState.distance = newState.direction.route.paths ? newState.direction.route.paths[0].distance : newState.direction.route.transits[0].distance;
        return newState;
    }

    if (action.type === 'setHomeLocation') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.userhomeLocation = action.payload.geocodes[0] ? action.payload.geocodes[0].location : '';
        return newState;
    }

    if (action.type === 'updateUserHome') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.userhome = action.homeAddress;
        return newState;
    }

    return state;
}
