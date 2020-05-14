import {combineReducers} from 'redux';

import savedPost from './savedPost';
import posts from './posts';
import authUser from './authUser';

const rootReducer = combineReducers({
    savedPost,
    posts,
    authUser,
})

export default rootReducer;
