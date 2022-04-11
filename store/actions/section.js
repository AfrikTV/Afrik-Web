const home = () => {
  return { type: "HOME" };
};

const billing = () => {
  return { type: "BILLING" };
};

const activities = () => {
  return { type: "ACTIVITIES" };
};

const settings = () => {
  return { type: "SETTINGS" };
};
const watchLater = () => {
  return { type: "WATCH_LATER" };
};

module.exports = {
  home,
  billing,
  activities,
  settings,
  watchLater,
};
