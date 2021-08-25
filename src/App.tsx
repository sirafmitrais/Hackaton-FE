import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, reducers } from './store';

function App() {

  const dispatch = useDispatch();
  type State = ReturnType<typeof reducers>
  const {withdrawMoney, depositMoney, bankruptMoney} = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
}

export default App;
