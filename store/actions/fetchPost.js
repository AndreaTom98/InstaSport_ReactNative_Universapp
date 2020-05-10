import axios from 'axios';
export const FETCH_POST = 'FETCH_POST';


export const fetchPost = () => {
    return async dispatch => {
        // operazioni asincrone
        const url = "https://instasport-66594.firebaseio.com/posts.json";
        const data = await axios.get(url)
        console.log('data from firebase:', data)
        dispatch({type: FETCH_POST})
    }
}