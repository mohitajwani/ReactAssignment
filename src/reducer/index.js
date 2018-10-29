import { combineReducers } from 'redux';
import App from './App';
import Login from './Login';

const rootReducer = combineReducers({
    app: App,
    login: Login,
})

export default rootReducer;