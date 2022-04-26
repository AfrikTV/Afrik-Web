const setOpen = () => {
    return {
        type: "OPEN"
    };
};

const setClose = () => {
    return {
        type: "CLOSE"
    };
};

module.exports = { setOpen, setClose };
