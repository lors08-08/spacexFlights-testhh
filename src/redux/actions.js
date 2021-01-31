export function loadLaunches() {
  return (dispatch) => {
    dispatch({ type: "launches/load/start" });
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "launches/load/succeed",
          payload: json,
        });
      });
  };
}

export function setLaunchSite(launchInfo) {
  return (dispatch) => {
    dispatch({
      type: "launchSite/set",
      payload: launchInfo,
    });
  };
}

export function setRocketType(rocketType) {
  return (dispatch) => {
    dispatch({
      type: "rocketType/set",
      payload: rocketType,
    });
  };
}
