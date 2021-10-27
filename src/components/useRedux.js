import React,{useCallback, useState} from 'react';
import {addInputFoodAction,addRandomFoodAction} from '../actions/actions'
import {connect} from 'react-redux'

import {} from 'react-redux'
const UseRedux = (props)=>{
   const [inputValue,setInputValue] = useState('')
   const {foodArray,dispatch} = props
   const addFood= useCallback(()=>{ 
       if(inputValue!==''){
       dispatch(addInputFoodAction(inputValue))
       setInputValue('')
       }
   },[dispatch,inputValue])
   const addRandomFood=()=>{
        dispatch(addRandomFoodAction()) //redux-thunk的使用使得dispatch可以执行一个函数
   }
    return(
        <div>
            <ul>
            {foodArray.map((item,index)=>(<li key={item+index}>{item}</li>))}
            </ul>
            <input value ={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
            <button onClick={addFood}>添加</button>
            <button onClick={addRandomFood}>添加随机食物</button>
        </div>
    )
}


export default connect((state)=>({foodArray:state}) //通过connect的方式获取props
)(UseRedux)