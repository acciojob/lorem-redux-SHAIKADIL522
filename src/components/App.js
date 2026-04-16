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
      {/* ✅ EXACT TEXT REQUIRED */}
      <h1>A short Naration of Lorem Ipsum</h1>

      {/* ✅ ALWAYS SHOW INITIALLY */}
      {loading && <h4>Loading...</h4>}

      {error && <p>{error}</p>}

      {/* ✅ REQUIRED STRUCTURE + CLASSES */}
      {data && (
        <ul>
          <li>
            <p className="title">{data.title}</p>
            <p className="body">{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;