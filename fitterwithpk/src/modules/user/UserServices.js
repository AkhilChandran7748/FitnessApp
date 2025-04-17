import { httpCall, httpUpload } from "../../Services/HttpService";
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
    return httpUpload({
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


export const getWeeklyUpdate = params => {
    return httpCall({
        url: API_URL.GET_WEEKLY_UPDATES,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const getWeeklyGalleryList = params => {
    return httpCall({
        url: API_URL.GET_WEEKLY_GALLERY,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};


export const getProfileDetails = params => {
    return httpCall({
        url: API_URL.GET_PROFILE_DETAILS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};


export const getDietPlan = params => {
    return httpCall({
        url: API_URL.GET_DIET_PLAN,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};



