import { SAVE_POST } from "../actions/savePost";
import { REMOVE_POST } from "../actions/removePost";

const initialState = {
  savedItems: {}
};

const savedPost = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST:
      const savedPost = action.post;
      return {
        ...state,
        savedItems: { ...state.savedItems, [savedPost.id]: savedPost }
      };
    case REMOVE_POST:
      const newSavedItems = {...state.savedItems};
      delete newSavedItems[action.id];
      return {
        ...state,
        savedItems: newSavedItems,
      }

    default:
      return state;
  }
};

export default savedPost;
