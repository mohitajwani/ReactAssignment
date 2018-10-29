const reducer = (
    state = {
        email: "",
        password: "",
    },
    action
) => {
    switch (action.type) {
        case "LOGIN_EMPLOYEE":
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
        default:
            return state
    }
}

export default reducer;