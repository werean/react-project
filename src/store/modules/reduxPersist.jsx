import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: "Consumo-api", //nome da aplicação
      storage,
      whitelist: ["auth"], //modulos que eu quero salvar, no caso estou salvando o modulo/chave auth que vem do rootReducer
    },
    reducers
  );
  return persistedReducers;
};
