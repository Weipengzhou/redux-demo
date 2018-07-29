const initialState = {
    number:1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICK_ADD':
        console.log('+')
            return Object.assign({}, state, {
                number:state.number+1,
               
            });

        case 'BUTTON_CLICK_JIAN':
        console.log('-')
            return Object.assign({}, state, {
                number:state.number-1,
               
            });
       

        default:
            return state;
    }
}

export default reducer;