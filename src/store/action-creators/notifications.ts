import { SET_NOTIFICATION, NotificationAction } from "../action-types/types"

export const setNotification = (msg: string, type: string = 'success'): NotificationAction => {
    return {
      type: SET_NOTIFICATION,
      payload: {
        msg,
        type
      }
    }
  }