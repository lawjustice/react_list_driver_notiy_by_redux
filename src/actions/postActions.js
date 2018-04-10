import { SELECT_DRIVER} from './types';

export const selectDriver = driverData => dispatch => {
    console.log("postAction selectDriver = " + JSON.stringify(driverData))
      dispatch({
        type: SELECT_DRIVER,
        payload: driverData
      })
};

// export const fetchPosts = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };

// export const createPost = postData => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     );
// };
