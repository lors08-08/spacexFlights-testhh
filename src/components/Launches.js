import React from "react";
import { useSelector } from "react-redux";
import LaunchCard from "./LaunchCard";
import EmptyList from "./EmptyList";

function Launches() {
  const launchSiteSelected = useSelector((state) => state.selectedLaunchSite);
  const rocketTypeSelected = useSelector((state) => state.selectedRocketType);

  const launchesList = useSelector((state) =>
    state.launches.filter((l) => {
      return (
        l.launch_site.site_name.indexOf(launchSiteSelected) !== -1 &&
        l.rocket.rocket_name.indexOf(rocketTypeSelected) !== -1
      );
    })
  );

  if (!launchesList.length) {
    return <EmptyList />;
  }
  return (
    <>
      {launchesList.map((launch) => {
        return <LaunchCard key={launch.mission_name} launch={launch} />;
      })}
    </>
  );
}

export default Launches;
