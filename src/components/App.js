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

      {!loading ? (
        <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
      ) : (
        <h4>Loading...</h4>
      )}

      {error && <h4>Error: {error}</h4>}

      <ul>
        <li>
          {data && data.id}
          <p className="title">Title :{loading ? "Loading tiltes" : data && data.title}</p>
          <p className="body">Body :{loading ? "Loading body" : data && data.body}</p>
        </li>
      </ul>
    </div>
  );
};

export default App;