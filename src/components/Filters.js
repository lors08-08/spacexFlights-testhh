import React, { memo } from "react";
import styles from "./Filters.module.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setLaunchSite, setRocketType } from "../redux/actions";

function Filters() {
  const dispatch = useDispatch();

  const launchSites = useSelector((state) =>
    state.launches.map((launch) => {
      return launch.launch_site.site_name;
    })
  );
  const sitesOptions = [...new Set(launchSites)].map((launch) => {
    return {
      label: `${launch}`,
      value: `${launch}`,
    };
  });

  const rockets = useSelector((state) =>
    state.launches.map((item) => {
      return item.rocket.rocket_name;
    })
  );
  const rocketOptions = [...new Set(rockets)].map((rocket) => {
    return {
      label: `${rocket}`,
      value: `${rocket}`,
    };
  });

  const handleLaunchSites = (e) => {
    dispatch(setLaunchSite(e.value.toString()));
  };
  const handleRocketType = (e) => {
    dispatch(setRocketType(e.value.toString()));
  };

  return (
    <div>
      <h1>Launches</h1>
      <div className={styles.header}>
        <div>
          <h3>Launch Site</h3>
          <Select
            placeholder=""
            className={styles.selector}
            options={sitesOptions}
            onChange={handleLaunchSites}
          />
        </div>
        <div className={styles.launchCite}>
          <h3>Rocket</h3>
          <Select
            placeholder=""
            className={styles.selector}
            options={rocketOptions}
            onChange={handleRocketType}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Filters);
