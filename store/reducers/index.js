import {combineReducers} from 'redux';

import savedPost from './savedPost';
import posts from './posts';

const rootReducer = combineReducers({
    savedPost,
    posts,
})

export default rootReducer;
