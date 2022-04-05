const signin = (name, avatar) => {
  return {
    type: "SIGN_IN",
    data: {
      isLoggedIn: true,
      user: {
        name: name,
        avatar: avatar,
      },
    },
  };
};

export default signin;
