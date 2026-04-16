export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => async (dispatch) => {
  dispatch({ type: FETCH_LOREM_REQUEST });

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();

    // ✅ Force loading state visibility
    setTimeout(() => {
      dispatch({ type: FETCH_LOREM_SUCCESS, payload: data });
    }, 1000);

  } catch (error) {
    dispatch({ type: FETCH_LOREM_FAILURE, payload: error.message });
  }
};