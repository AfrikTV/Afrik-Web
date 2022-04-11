const sectionReducer = (state = "home", action) => {
  switch (action.type) {
    case "HOME":
      return "home";
    case "BILLING":
      return "billing";
    case "ACTIVITIES":
      return "activities";
    case "SETTINGS":
      return "settings";
    case "WATCH_LATER":
      return "watchlater"
    default:
      return state;
  }
};

export default sectionReducer;
