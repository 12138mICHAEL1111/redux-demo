const addFoodReducer = (state = [],action) => {
    switch(action.type){
        case 'addFood':{  
            const [...tempSate] = state
            tempSate.push(action.foodName)
            state = tempSate
            return state
        }
        default: return state
    }
}

export {addFoodReducer}