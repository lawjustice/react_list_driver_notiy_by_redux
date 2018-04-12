import { SELECT_DRIVER, UPDATE_DRIVER, LOAD_DRIVER} from './types';

export const selectDriver = driverData => dispatch => {
    console.log("postAction selectDriver = " + JSON.stringify(driverData))
      dispatch({
        type: SELECT_DRIVER,
        payload: driverData
      })
};

export const updateDriver = driverData => dispatch => {
    console.log("postAction updateDriver = " + JSON.stringify(driverData))
      dispatch({
        type: UPDATE_DRIVER,
        payload: driverData
      })
};

export const loadDrivers = drivers => dispatch => {
  dispatch({
    type: LOAD_DRIVER,
    payload: drivers
  })
}

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
