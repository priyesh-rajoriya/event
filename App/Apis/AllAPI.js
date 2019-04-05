
var baseUrl = "http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/";
module.exports = {

    userLogin: baseUrl + 'login',

    checkEmail: baseUrl + 'checkEmail',

    registration: baseUrl + 'registration',

    setUserProfileDetails : baseUrl + 'setUserProfileDetails',

    updateUserProfile: baseUrl + 'updateUserProfile',

    getNotificationSetting: baseUrl + 'getNotificationSetting',

    updatePushNotificationSetting: baseUrl + 'updatePushNotificationSetting',

    searchEvent: baseUrl + 'searchEvent',

    eventCategory: baseUrl + 'getEventCategory',

    event: baseUrl + 'getEvents?user_id=',

    like: baseUrl + 'like',

    addTicket: baseUrl + 'addTicket',

    getNotificationSetting: baseUrl + 'getNotificationSetting',

    volunteerSignup: baseUrl + 'volunteerSignup',

    volunteerAvailability: baseUrl + 'volunteerAvailability',

    searchEvent: baseUrl + 'searchEvent',

    getBookedTicketList: baseUrl + 'getBookedTicketList',

    volunteerSignup: baseUrl + 'volunteerSignup',

    follow: baseUrl + 'followAndUnfollow',

};