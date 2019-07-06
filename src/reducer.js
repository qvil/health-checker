export const GET_SERVER_LIST = "GET_SERVER_LIST";
export const SET_SERVER_LIST = "SET_SERVER_LIST";
export const setServerList = serverList => ({
  type: SET_SERVER_LIST,
  serverList
});

export const initialState = {
  serverList: [
    { url: "https://www.naver.com" },
    { url: "https://www.op.gg" },
    { url: "https://www.daum.net" }
  ]
};

export default (state = initialState, action) => {
  const { type, serverList } = action;
  switch (type) {
    case SET_SERVER_LIST:
      return { ...state, serverList };
    default:
      return state;
  }
};
