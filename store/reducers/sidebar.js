const sidebarReducer = (state = "close", action) => {
    switch (action.type) {
        case "OPEN":
            return "open";
        case "CLOSE":
            return "close";
        default:
            return state;
    }
};

export default sidebarReducer;
