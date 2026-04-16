import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/actions";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      {/* ✅ Required heading */}
      <h1>Lorem Redux App</h1>

      {/* ✅ Required loading format */}
      {loading && <h4>Loading...</h4>}

      {/* Optional error */}
      {error && <p>{error}</p>}

      {/* ✅ Required structure */}
      {data && (
        <ul>
          <li>
            <p>{data.title}</p>
            <p>{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;