import React, { FC } from "react";
import logo from "./logo.svg";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, reducers } from "../store";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Notification from "../components/Notification";
import { RootState } from "../store/store";
import DeleteListModal from "../components/DeleteListModal";
import EditListModal from "../components/EditListModal";
import MainContent from "../components/MainContent";
import EditTaskModal from "../components/editTaskModal";
import DeleteTaskModal from "../components/deleteTaskModal";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import About from "../views/About";
import Users from "../views/Users";

const Home: FC = () => {
  const dispatch = useDispatch();
  type State = ReturnType<typeof reducers>;
  const { withdrawMoney, depositMoney, bankruptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  const notificationmsg = useSelector(
    (state: RootState) => state.notification.message
  );
  const listIdToDelete = useSelector(
    (state: RootState) => state.list.listIdToDelete
  );

  const listToEdit = useSelector((state: RootState) => state.list.listToEdit);
  const taskToEdit = useSelector((state: RootState) => state.list.taskToEdit);
  const taskToDelete = useSelector(
    (state: RootState) => state.list.taskToDelete
  );

  return (
    <div className="App">
      <Header
        title="Task List App"
        subtitle="Create some list and add some task"
      />
      <div className="container px-5">
        <div className="columns">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      <Notification msg={notificationmsg} />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
      {listToEdit && <EditListModal list={listToEdit} />}\
      {taskToEdit && <EditTaskModal taskToEdit={taskToEdit} />}
      {taskToDelete && <DeleteTaskModal taskToDelete={taskToDelete} />}
     
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
};

export default Home;
