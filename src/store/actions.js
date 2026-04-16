export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => (dispatch) => {
  dispatch({ type: FETCH_LOREM_REQUEST });

  fetch("https://api.lorem.com/ipsum")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: FETCH_LOREM_SUCCESS,
        payload: data || {
          title: "Fallback Title",
          body: "Fallback Body",
        },
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_LOREM_SUCCESS,
        payload: {
          title: "Fallback Title",
          body: "Fallback Body",
        },
      });
    });
};