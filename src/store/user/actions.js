import {store} from "../store"
import {userActions} from "./userSlice"

export const setCurrentAccount = (data) => store.dispatch(userActions._setCurrentAccount(data))
export const deleteAccount = () => store.dispatch(userActions._deleteAccount())