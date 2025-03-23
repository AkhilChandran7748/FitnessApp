import { httpCall } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";


export const dailyUpdate = params => {
    return httpCall({
        url: API_URL.DAILY_UPADTE,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const weeklyUpdate = params => {
    return httpCall({
        url: API_URL.WEEKLY_UPDATES,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const getDailyUpdate = params => {
    return httpCall({
        url: API_URL.GET_SINGLE_DAY,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};


