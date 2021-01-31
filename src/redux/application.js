const initialState = {
  loading: false,

  launches: [],

  selectedLaunchSite: "",
  selectedRocketType: "",
};

function application(state = initialState, action) {
  switch (action.type) {
    case "launches/load/start":
      return {
        ...state,
        loading: true,
      };
    case "launches/load/succeed":
      return {
        ...state,
        launches: action.payload,
        loading: false,
      };
    case "launchSite/set":
      return {
        ...state,
        selectedLaunchSite: action.payload,
      };
    case "rocketType/set":
      return {
        ...state,
        selectedRocketType: action.payload,
      };
    default:
      return state;
  }
}

export default application;
