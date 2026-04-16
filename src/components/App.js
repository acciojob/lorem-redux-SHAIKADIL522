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

      {/* Loading / Description */}
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <h4>
          Below Contains A title and Body gotten froma random API, Please take your time to Review
        </h4>
      )}

      {/* Error */}
      {error && <h4>Error: {error}</h4>}

      {/* ✅ IMPORTANT: Structured Output for Cypress */}
      <ul>
        <li>
          {/* ID */}
          <p className="id">
            {loading ? "Loading id" : data && data.id}
          </p>

          {/* Title */}
          <p className="title">
            {loading
              ? "Title :Loading tiltes"
              : data && `Title :${data.title}`}
          </p>

          {/* Body */}
          <p className="body">
            {loading
              ? "Body :Loading body"
              : data && `Body :${data.body}`}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default App;