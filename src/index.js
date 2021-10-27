import React from 'react';
import ReactDOM from 'react-dom';
import NoRedux from './components/noRedux';
import UseRedux from './components/useRedux'
import {Provider} from 'react-redux'
import foodStore from './store/foodStore'
ReactDOM.render(
  <React.StrictMode>
    <span >这里没用redux</span>
    <NoRedux />
    <hr></hr>
    <span>这里用了redux</span>
{/* 通过provide把store传递给子组件 */}
    <Provider store={foodStore}>
    <UseRedux/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
