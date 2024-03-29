export function getChatList(roomId, user_id, page, limit = 30, token) {
  return async (dispatch, getState) => {
    dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: true});
    try {
      let json = await RestClient.getCall(
        `${URL.BASE_URL}${URL.GET_CHAT_LIST}${roomId}&limit=${limit}&page=${page}}`,
        token,
      );
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.SET_CHATLIST_LENGTH,
          payload: json?.result?.totalDocs,
        });
        let data = json.result.docs;
        data.forEach(element => {
          element.text = element.message;
          if (user_id === element.senderID) {
            element.user = {_id: 1};
          } else {
            element.user = {_id: 2};
          }
          return element;
        });

        dispatch({
          type: ACTION_TYPE.GET_CHAT,
          payload: data,
        });
      } else {
        /**Handle error data */
        console.log('failed');
        dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
        Alert.alert('Something went Wrong!');
      }
    } catch (error) {
      Alert.alert(JSON.stringify(error));
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
    }
  };
}
export function getRoomId(data, token) {
  return async (dispatch, getState) => {
    dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: true});
    try {
      let json = await RestClient.postCall(
        `${URL.BASE_URL}${URL.CREATE_CHAT}`,
        data,
        token,
      );
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
      /**Handle success data */
      if (json.status) {
        dispatch({
          type: ACTION_TYPE.ADD_ROOM_ID,
          payload: json?.result?._id,
        });
        let data = {
          _id: json?.result?._id,
        };
        Socket.joinRoom(data);
      } else {
        /**Handle error data */
        console.log('failed');
        dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
        Alert.alert('Something went Wrong!');
      }
    } catch (error) {
      Alert.alert(JSON.stringify(error));
      dispatch({type: ACTION_TYPE.TOGGLE_LOADER, payload: false});
    }
  };
}
