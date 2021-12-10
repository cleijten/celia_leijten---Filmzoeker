import counterReducer from './counter'
import loggedReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer

})

export default allReducers

//hier roep je alle reducers aan en zet ze in combineReducers, zodat je in de hoofdindex alleen maar de variabele allReducers hoeft aan te roepen