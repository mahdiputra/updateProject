import {combineReducers} from  'redux'
import Login from './login'
import Nama from './userName'
export default combineReducers({ // bakal ngecek state yang ada di combine reducer
    login : Login,
    NamaUser : Nama
})