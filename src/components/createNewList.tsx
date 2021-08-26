import React, {FC, useState, FormEvent} from 'react'
import { addList, getList } from '../store/action-creators/listActions'
import { List } from '../store/action-types/types'
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../store/action-creators';

import { RootState } from '../store/store'

const CreateNewList: FC = () => {

   const dispatch = useDispatch()
   const [listName, setListName] = useState('')
   const successAddList = useSelector((state: RootState) => state.list.successAddList);
   
    const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setListName(e.currentTarget.value)
    }
    const initialState = {

          first_name: "",
          last_name: "",
          password_hash: "",
          role: "",
          users: ""

    }

    const [user, setUser] = useState(initialState)

  
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if(listName.trim() === ''){
        //     return alert('List Name is required')
        // }
        const newList: List = {
            id: `list-${new Date().getTime()}`,
            name: listName,
            title: listName,
            first_name: listName,
            tasks: [],
        }

        dispatch(addList({
          users: user
        
        }));
        dispatch(getList());
        if(successAddList){
          dispatch(setNotification(successAddList))
        }
        setListName('')
    }
    return (
        <div className="card mb-5">
        <div className="card-header">
          <p className="card-header-title">Create New List</p>
        </div>
        <div className="card-content">
          <form onSubmit={submitHandler}>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input 
                  type="text" 
                  className="input"
                  placeholder="List Name"
                  name="first_name"
                  value={user.first_name}
                  onChange={(e) => setUser((prev) => ({
                    ...prev,
                    first_name: e.target.value
                  }))}
                />
              </div>
              <label className="label">last Name</label>
              <div className="control">
                <input 
                  type="text" 
                  className="input"
                  placeholder="List Name"
                  name="last_name"
                  value={user.last_name}
                  onChange={(e) => setUser((prev) => ({
                    ...prev,
                    last_name: e.target.value
                  }))}
                />
              </div>
              <label className="label">password</label>
              <div className="control">
                <input 
                  type="text" 
                  className="input"
                  placeholder="List Name"
                  name="password_hash"
                  value={user.password_hash}
                  onChange={(e) => setUser((prev) => ({
                    ...prev,
                    password_hash: e.target.value
                  }))}
                />
              </div>
            </div>
            <label className="label">role</label>
              <div className="control">
                <input 
                  type="text" 
                  className="input"
                  placeholder="List Name"
                  name="role"
                  value={user.role}
                  onChange={(e) => setUser((prev) => ({
                    ...prev,
                    role: e.target.value
                  }))}
                />
              </div>
              <label className="label">users</label>
              <div className="control">
                <input 
                  type="text" 
                  className="input"
                  placeholder="List Name"
                  name="users"
                  value={user.users}
                  onChange={(e) => setUser((prev) => ({
                    ...prev,
                    users: e.target.value
                  }))}
                />
              </div>
            <div className="control">
              <button type="submit" className="button is-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default CreateNewList;