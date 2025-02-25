import axios from "../utils/axios-customize";

//auth

export const callLogin = (email, password) => {
    return axios.post("/api/auth/login", {
        email,
        password,
    });
};
export const callLogout = () => {
    return axios.post("/api/auth/logout");
};
