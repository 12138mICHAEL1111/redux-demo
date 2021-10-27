const addInputFoodAction = (foodName)=>{
    return{
        type:'addFood',
        foodName
    }
}

const addRandomFoodAction = ()=>{
    return(dispatch) =>{
        fetch('https://random-data-api.com/api/food/random_food').then((res)=>{
            return res.json() 
          }).then((res)=>{    
            dispatch({
                type:'addFood',
                foodName:res.dish
            })
          }).catch((error)=>{console.log(error)})
    }
}

export {
    addInputFoodAction,
    addRandomFoodAction
}