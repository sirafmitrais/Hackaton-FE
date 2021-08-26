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

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(listName.trim() === ''){
            return alert('List Name is required')
        }
        const newList: List = {
            id: `list-${new Date().getTime()}`,
            name: listName,
            title: listName,
            tasks: [],
        }

        dispatch(addList(listName));
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
              <label className="label">List Name</label>
              <div className="control">
                <input 
                  type="text" 
                  className="input"
                  placeholder="List Name"
                  name="listName"
                  value={listName}
                  onChange={inputChangeHandler}
                />
              </div>
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