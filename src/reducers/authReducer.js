// import { data } from "react-router-dom";

export const initialState = {
    data: {
        username: "",
        password: "",
        email: ""
    },
    error: "",
    submitting: false,
    successMessage: "",
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: {...action.payload.data, [action.payload.field]: action.payload.value}
            };
        case "SET_SUBMITTING":
            return {
                ...state,
                submitting: action.payload
            };
        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload,
                page: 1
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: {
                    username: "",
                    password: "",
                    email: ""
                },
                error: "",
                successMessage: action.payload
            };
        case "FETCH_FAIL":
            return {
                ...state,
                error: action.payload,
                successMessage: ""
            };
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload
            };
        default:
            return state
    }
}