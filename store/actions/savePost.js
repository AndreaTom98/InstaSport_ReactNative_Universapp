export const SAVE_POST = 'SAVE_POST';


export const savePost = (post) => {
    return {
        type: SAVE_POST,
        post
    }
}