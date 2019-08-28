export const updateKeyword = (event) => ({
    type: 'updateKeyword',
    value: event.target.value
})

export const search = (keywords) => ({
    type: 'search',
    keywords
})

export const getJobResult = () => ({
    type: 'getJobResult'
})

export const getJobDetail = (jobDID) => ({
    type: 'getJobDetail',
    jobDID
})

export const setJobDetail = () => ({
    type: 'setJobDetail'
})

export const getDirection = (origin, dest, transType) => ({
    type: 'getDirection',
    origin,
    dest,
    transType
})

export const setDirection = () => ({
    type: 'setDirection'
})

export const getHomeLocation = (homeAddress) => ({
    type: 'getHomeLocation',
    homeAddress
})

export const setHomeLocation = () => ({
    type: 'setHomeLocation'
})
