export const REMOVE_POST = 'REMOVE_POST';


export const removePost = (id) => {
    return {
        type: REMOVE_POST,
        id,
    }
}