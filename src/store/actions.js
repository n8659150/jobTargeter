export const updateKeyword = (event) => ({
    type: 'updateKeyword',
    value: event.target.value
})

export const search = () => ({
    type: 'search'
})
