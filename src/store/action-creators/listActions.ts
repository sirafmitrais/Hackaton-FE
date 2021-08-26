import { ADD_LIST, ADD_LIST_FAILED, ADD_TASK, DELETE_LIST, DELETE_TASK, GET_LISTS, GET_LIST_BY_ID, List, Lists, ListsAction, SET_LISTID_TO_DELETE, SET_LIST_TO_EDIT, SET_SELECTED_LIST, SET_TASK_TO_DELETE, SET_TASK_TO_EDIT, Task, UNSET_TASK_TO_DELETE, UNSET_TASK_TO_EDIT, UPDATE_LIST, UPDATE_TASK } from "../action-types/types";
import SimpleSrv from "../../services/api/simpleService";

export type DispatchList = (args: ListsAction) => ListsAction

export const addList = (title: string) => {
    return (dispatch: DispatchList) => {
        return SimpleSrv.createTitle(title)
            .then((response) => {
                console.log("create response", response)
                dispatch({
                    type: ADD_LIST,
                    payload: response
                })
            })
            .catch((err) => {
                console.log("create error", err)
                dispatch({
                    type: ADD_LIST_FAILED,
                    payload: err
                })
            })
    }
}

export const getList = () => {
    return (dispatch: DispatchList) => {
        return SimpleSrv.getListTitle()
            .then((response)=> {
                console.log("response action",response)
                dispatch({
                    type: GET_LISTS,
                    payload: response 
                    }
                )
            })
    }
}

export const getListById = (id: string): ListsAction => {
    return {
        type: GET_LIST_BY_ID,
        payload: id
    }
}

export const SetListIdToDelete = (id: string): ListsAction => {
    return {
        type: SET_LISTID_TO_DELETE,
        payload: id
    }    
}

export const SetListToEdit = (id: string): ListsAction => {
    return {
        type: SET_LIST_TO_EDIT,
        payload: id
    }
}

export const setSelectedList = (id: string): ListsAction => {
    return {
      type: SET_SELECTED_LIST,
      payload: id
    }
  }

export const deleteList = (id: string): ListsAction => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}

export const updateList = (id: string, name: string): ListsAction => {
    return {
        type: UPDATE_LIST,
        payload: {
            id,
            name
        }
    }
}

export const addTask = (task: Task, list: List): ListsAction => {
    return {
        type: ADD_TASK,
        payload: {
            task,
            list
        }
    }
}

export const setTaskToDelete= (task: Task, list: List): ListsAction => {
    return {
        type: SET_TASK_TO_DELETE,
        payload: {
            task,
            list
        }
    }
}

export const unsetTaskToDelete = ():ListsAction => {
    return {
        type: UNSET_TASK_TO_DELETE
    }
}

export const deleteTask = (task: Task, list: List): ListsAction => {
    return {
        type: DELETE_TASK,
        payload: {
            task,
            list
        }
    }
}

export const setTaskToEdit = (task: Task, list: List): ListsAction => {
    return {
      type: SET_TASK_TO_EDIT,
      payload: {
        task,
        list
      }
    }
  }

export const unsetTaskToEdit = (): ListsAction => {
    return {
        type: UNSET_TASK_TO_EDIT
    }
}

export const updateTask = (taskId: string, taskName: string, taskState: boolean, list: List): ListsAction => {
    return {
        type: UPDATE_TASK,
        payload: {
            taskId,
            taskName,
            taskState,
            list
        }
    }
}