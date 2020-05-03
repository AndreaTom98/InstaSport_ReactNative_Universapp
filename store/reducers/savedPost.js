import {SAVE_POST} from '../actions/savePost';

const initialState = {
    savedItems: {
    
    }
}

const savedPost = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_POST:
        const savedPost = action.post;
        return {
            ...state,
            savedItems: {...state.savedItems, [savedPost.id]: savedPost}
        }
        default:
            return state;
    }
}



export default savedPost;