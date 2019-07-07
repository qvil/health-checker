export const GET_SERVER_LIST = "GET_SERVER_LIST";
export const SET_SERVER_LIST = "SET_SERVER_LIST";
export const setServerList = serverList => ({
  type: SET_SERVER_LIST,
  serverList
});

export const initialState = {
  serverList: [
    { url: "https://www.naver.com", live: false },
    { url: "https://www.op.gg", live: false },
    { url: "https://www.daum.net", live: false }
  ]
};

export default (state = initialState, action) => {
  const { type, serverList } = action;
  switch (type) {
    case SET_SERVER_LIST:
      return {
        ...state,
        serverList: [...state.serverList, { url: serverList, live: false }]
      };
    default:
      return state;
  }
};
