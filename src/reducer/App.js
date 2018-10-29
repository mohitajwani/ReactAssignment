const reducer = (
    state = {
        employees: []
    },
    action
) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [
                    ...state.employees,
                    action.payload.value,
                ]
            }
        case "DELETE_EMPLOYEE":
            let newEmployees = state.employees.filter((employee, index) => {
                return index !== action.payload.value
            })
            return {
                ...state,
                employees: newEmployees,
            }
        default:
            return state
    }
}

export default reducer;