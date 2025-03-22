import { httpCall } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";

export const getClientList = params => {
    return httpCall({
        url: API_URL.USERLIST,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const approveUser = params => {
    return httpCall({
        url: API_URL.APPROVE_USER,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

