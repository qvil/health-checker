export const ADD_SERVER_LIST = "ADD_SERVER_LIST";
export const SET_SERVER_LIST = "SET_SERVER_LIST";

export const addServerList = serverList => ({
  type: ADD_SERVER_LIST,
  serverList
});
export const setServerList = serverList => ({
  type: SET_SERVER_LIST,
  serverList
});

export const initialState = {
  // serverList: [
  //   { url: "https://www.naver.com", live: false },
  //   { url: "https://www.op.gg", live: false },
  //   { url: "https://www.daum.net", live: false }
  // ]
  serverList: []
};

export default (state = initialState, action) => {
  const { type, serverList } = action;
  switch (type) {
    case ADD_SERVER_LIST:
      return {
        ...state,
        serverList: [...state.serverList, { url: serverList, live: false }]
      };
    case SET_SERVER_LIST:
      return {
        ...state,
        serverList
      };
    default:
      return state;
  }
};
