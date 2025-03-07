import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: "REACT-BASE", //nome da aplicação
      storage,
      whitelist: ["example"], //modulos que eu quero salvar, no caso estou salvando o modulo/chave example que vem do rootReducer
    },
    reducers
  );
  return persistedReducers;
};
