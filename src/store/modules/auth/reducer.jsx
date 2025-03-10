import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// Reducer: função que gerencia as mudanças no estado
// Recebe o estado atual (ou estado inicial se for primeira execução) e uma action
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log("REDUCER", action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
}
