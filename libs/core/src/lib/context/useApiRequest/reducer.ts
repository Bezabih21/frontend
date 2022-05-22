import { Types } from "./types";

export const initialState = {
  status: null,
  response: null
};

const reducer = (state = initialState, { type , response }: { type: Types,  response?: any }) => {
  switch (type) {
    case Types.FETCHING:
      return { ...initialState, status: Types.FETCHING };
    case Types.SUCCESS:
      return { ...state, status: Types.SUCCESS, response };
    case Types.ERROR:
      return { ...state, status: Types.ERROR, response };
    default:
      return state;
  }
};

export default reducer;
