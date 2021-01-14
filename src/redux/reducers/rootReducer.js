import {combineReducers} from 'redux';
import GithubReducer from './GithubReducer';

const rootReducer = combineReducers({
    GithubData: GithubReducer
});

export default rootReducer;
