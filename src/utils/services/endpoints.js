const URL = {
  BASE_URL: 'http://54.190.192.105:9185/angel/',
  LOGIN: 'login',
  ACTIVE_MANDATE: 'mandate/list',
  RESET_PASSWORD: 'resetlink_investor',
  REGISTER: 'register',
  REFERRAL: 'add/referral',
  SAVE_REFERRAL: 'referral/list_by_mandate?user_mandate=',
  CALENDAR: 'getEventtillDate',
  CHANGE_PASSWORD: 'update-password/investor',
  PORTFOLIO: 'portfolio/list_by_mandate',
  FORUM_CATEGORY: 'get_all_forum_Category',
  FORUM_CATEGORY_QUESTION: 'quetion_data_by_category?category_id=',
  STATE_LIST: 'get_all_state',
  MYPROFILE: 'loggedin_user_dataByid?_id=',
  UPDATE_PROFILE: 'update_Investor',
  FORUM_ADD_QUESTION: 'add_quetion',
  GET_QUESTION: 'quetion_data_by_id?_id=',
  FORUM_ADD_RESPONSE: 'update_question_data',
  //added URL for chat
  SOCKET_CHAT: 'http://54.190.192.105:9185',
  // SOCKET_CHAT:'http://172.24.0.65:9185',
  GET_CHAT_LIST: 'get_chat_byroom_id?roomId=',
  ADD_INTERESTED_MANDATE: 'add_interested/mandate',
  CREATE_CHAT: 'crete_chat/byinvestor',
  UPDATE_USER_FCM: 'update/fcm_token',
};

module.exports = URL;
