import axios from 'axios';
export const FETCH_POST = 'FETCH_POST';
import Post from '../../models/Post';


export const fetchPost = () => {
    return async dispatch => {
        // operazioni asincrone
        const url = "https://instasport-66594.firebaseio.com/posts.json";
        const data = await axios.get(url)
        console.log('data from firebase:', data)
        const myPosts = data.data;
        const loadedPosts = [];
        for (key in myPosts) {
            loadedPosts.push(
                new Post(
                    key,
                    myPosts[key].image,
                    myPosts[key].title,
                    myPosts[key].description,
                    myPosts[key].userId,
                    myPosts[key].userName,
                    myPosts[key].userImage,
                )
            )
        }
        dispatch({type: FETCH_POST, posts: loadedPosts})
    }
}