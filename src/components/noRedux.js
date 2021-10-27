import React, { useState,useCallback} from 'react';
const  NoRedux=()=>{
  const [food,setFood] = useState({})
  const [inputValue,setInputValue] = useState('')

  const setFoodObj = useCallback((name)=>{
    const tempfood = {...food} 
    const key = Object.keys(tempfood).length
    tempfood[key] = name
    // 这边不太确定您说的map是否是这种形式
    // 我写成了{1:'foodName',2:'foodName}的形式不知道符不符合您的要求
    //如果food还是array数组的话，那直接写成food.map((item,index)=><li key={item+index}>{item}</li>)就行了
    setFood(tempfood)
  },[food])

  const addFood = useCallback(()=>{   
    inputValue!=='' && setFoodObj(inputValue)
    setInputValue('')
  },[setFoodObj,inputValue]) //加入了eslint hooks检查，没有添加全部依赖会显示黄线
  
  const addRandomFood = useCallback(()=>{
    fetch('https://random-data-api.com/api/food/random_food').then((res)=>{
      return res.json() // return一个promise给下个then,下个then里的第一个参数即为resolve的值
    }).then((res)=>{
      setFoodObj(res.dish)
    }).catch((error)=>{console.log(error)}) //catch可以捕获前面所有then里抛出的异常
  },[setFoodObj])

  return (
    <div >
      <ul >
      {Object.keys(food).map((item)=>(<li key = {item}>{food[item]}</li>))}
      </ul>
      <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
      <button onClick={addFood}>添加</button>
      <button onClick={addRandomFood}>添加随机食物</button>
    </div>
  );
}

export default NoRedux;



