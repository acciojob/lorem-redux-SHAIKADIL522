import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/actions";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>

      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <h4>Below Contains A title and Body gotten from a random API</h4>
      )}

      {error && <h4>Error: {error}</h4>}

      <ul>
        <li>
          <p className="id">
            {loading ? "Loading id" : data ? data.id : ""}
          </p>

          <p className="title">
            {loading
              ? "Title :Loading tiltes"
              : data
              ? "Title :" + data.title
              : ""}
          </p>

          <p className="body">
            {loading
              ? "Body :Loading body"
              : data
              ? "Body :" + data.body
              : ""}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default App;