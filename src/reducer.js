export const ADD_SERVER_LIST = "ADD_SERVER_LIST";
export const SET_SERVER_LIST = "SET_SERVER_LIST";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";

export const addServerList = (serverList, seq) => ({
  type: ADD_SERVER_LIST,
  serverList,
  seq
});
export const setServerList = serverList => ({
  type: SET_SERVER_LIST,
  serverList
});
export const setLoginStatus = isLogged => ({
  type: SET_LOGIN_STATUS,
  isLogged
});

export const initialState = {
  isLogged: localStorage.email ? true : false,
  // serverList: [
  //   { url: "https://www.naver.com", live: false },
  //   { url: "https://www.op.gg", live: false },
  //   { url: "https://www.daum.net", live: false }
  // ]
  serverList: []
};

export default (state = initialState, action) => {
  const { type, serverList, seq, isLogged } = action;
  switch (type) {
    case ADD_SERVER_LIST:
      return {
        ...state,
        serverList: [...state.serverList, { url: serverList, seq }]
      };
    case SET_SERVER_LIST:
      return {
        ...state,
        serverList
      };
    case SET_LOGIN_STATUS:
      return {
        ...state,
        isLogged
      };
    default:
      return state;
  }
};
