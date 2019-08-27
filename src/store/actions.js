export const updateKeyword = (event) => ({
    type: 'updateKeyword',
    value: event.target.value
})

export const search = (keywords) => ({
    type: 'search',
    keywords
})

export const getJobDetail = () => ({
    type: 'getJobDetail'
})

export const setJobDetail = () => ({
    type: 'setJobDetail'
})
