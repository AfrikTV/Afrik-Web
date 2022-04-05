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
    default:
      return state;
  }
};

export default sectionReducer;
