const loggedReducer = (
  state = {
    isLoggedIn: false,
    user: {
      name: "",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1064.jpg",
    },
  },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.data;
    case "SIGN_OUT":
      return false;
    default:
      return state;
  }
};

export default loggedReducer;
