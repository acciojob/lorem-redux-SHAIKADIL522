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
      {/* ✅ Intro text (MANDATORY) */}
      <h4>A short Naration of Lorem Ipsum</h4>

      {/* ✅ Loading */}
      {loading && <h4>Loading...</h4>}

      {/* ✅ Error */}
      {error && <h4>Error: {error}</h4>}

      {/* ✅ Data */}
      {data && (
        <ul>
          <li>
            <p className="title">Title :{data.title}</p>
            <p className="body">Body :{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;