export const updateKeyword = (event) => ({
    type: 'updateKeyword',
    value: event.target.value
})

export const search = () => ({
    type: 'search'
})

export const getJobDetail = () => ({
    type: 'getJobDetail'
})

export const setJobDetail = () => ({
    type: 'setJobDetail'
})
