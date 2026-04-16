export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => (dispatch) => {
  dispatch({ type: FETCH_LOREM_REQUEST });

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_LOREM_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_LOREM_FAILURE, payload: error.message });
      });
  }, 2000); 
};