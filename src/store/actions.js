export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => (dispatch) => {
  dispatch({ type: FETCH_LOREM_REQUEST });

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      // 🔥 Delay ONLY state update
      setTimeout(() => {
        dispatch({ type: FETCH_LOREM_SUCCESS, payload: data });
      }, 1500);
    })
    .catch((err) => {
      dispatch({ type: FETCH_LOREM_FAILURE, payload: err.message });
    });
};