import { NotificationAction, NotificationState, SET_NOTIFICATION } from "../action-types/types"

const initialState: NotificationState = {
    message: '',
    type: 'success'
}
const reducer =  (state = initialState, action: NotificationAction): NotificationState => {
    switch(action.type) {

        case SET_NOTIFICATION:
            return {
                message: action.payload.msg,
                type: action.payload.type
            }
        default:
            return state;
    }
}

export {
    reducer as notificationReducer
}