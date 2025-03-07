import * as types from "../types";

const initialState = {
  clickedButton: false,
};

// Reducer: função que gerencia as mudanças no estado
// Recebe o estado atual (ou estado inicial se for primeira execução) e uma action
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // Quando receber uma action do tipo "clicked_button"
    case types.CLICKED_BUTTON_SUCCESS: {
      console.log("Sucesso");
      // Cria uma cópia do estado atual para não modificar o estado diretamente
      const newState = { ...state };
      // Inverte o valor atual de clickedButton (true vira false, false vira true)
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }
    case types.CLICKED_BUTTON_FAILURE: {
      console.log("Deu erro.");
      return state;
    }
    case types.CLICKED_BUTTON_REQUEST: {
      console.log("Estou fazendo a requisção");
      return state;
    }

    default: {
      return state;
    }
  }
}
