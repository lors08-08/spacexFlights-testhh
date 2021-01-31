import React, { useEffect } from "react";
import styles from "./App.module.css";
import Filters from "./components/Filters";
import Launches from "./components/Launches";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { loadLaunches } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(loadLaunches());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.mainBox}>
      <Filters />
      <Launches />
    </div>
  );
}

export default App;
