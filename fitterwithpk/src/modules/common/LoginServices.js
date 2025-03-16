import { httpCall } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";

export const login = params => {
    return httpCall({
        url: API_URL.LOGIN,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
