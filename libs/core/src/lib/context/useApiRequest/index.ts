import { useCallback, useReducer } from "react";
import { httpService } from "../../services/http.service";
import reducer, { initialState } from "./reducer";
import { Types } from "./types";


export default  (endpoint, { verb = "get", params = {} } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(async () => {
    dispatch({type: Types.FETCHING});
    try {
      const response = await httpService(endpoint, params);
      dispatch({type: Types.SUCCESS, response});
    } catch (e) {
      dispatch({type: Types.ERROR, response:e});
    }
  }, [endpoint, verb, params]);

  return [state, makeRequest];
};
