import React from "react";
import styles from "./Launches.module.css";

function LaunchCard({ launch }) {
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    const d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(".");
  }

  const date = convertDate(launch.launch_date_local);

  return (
    <div className={styles.launchCard}>
      <div className={styles.img}>
        <img alt="cool pic" src={launch.links.mission_patch_small} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <div>
            <h2>{launch.mission_name}</h2>
          </div>
          <div className={styles.missionDate}>
            <h4>{date}</h4>
          </div>
        </div>
        <div>
          <p>{launch.details ? launch.details : "Upcoming"}</p>
        </div>
      </div>
    </div>
  );
}

export default LaunchCard;
