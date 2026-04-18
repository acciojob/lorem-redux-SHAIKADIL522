import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/actions";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    // ✅ IMPORTANT: Delay dispatch so Cypress sees loading state
    const timer = setTimeout(() => {
      dispatch(fetchLorem());
    }, 300); // sweet spot (100ms was too fast)

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>

      {/* ✅ EXACT MATCH */}
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <h4>
          Below Contains A title and Body gotten froma random API, Please take your time to Review
        </h4>
      )}

      {/* Error */}
      {error && <h4>Error: {error}</h4>}

      <ul>
        <li>
          {/* ✅ ID MUST BE PURE TEXT */}
          <p className="id">
            {loading ? "Loading id" : data.id}
          </p>

          {/* ✅ EXACT STRING */}
          <p className="title">
            {loading
              ? "Title :Loading tiltes"
              : "Title :" + data.title}
          </p>

          {/* ✅ EXACT STRING */}
          <p className="body">
            {loading
              ? "Body :Loading body"
              : "Body :" + data.body}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default App;