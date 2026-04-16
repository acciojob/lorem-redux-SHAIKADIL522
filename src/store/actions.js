export const fetchLorem = () => (dispatch) => {
  dispatch({ type: FETCH_LOREM_REQUEST });

  fetch("https://jsonplaceholder.typicode.com/posts/1") // ✅ USE CORRECT API
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: FETCH_LOREM_SUCCESS,
        payload: data, // ✅ NO fallback here
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_LOREM_FAILURE, // ✅ FIXED
        payload: error.message,
      });
    });
};