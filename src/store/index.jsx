import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import persistedReducers from "./modules/reduxPersist";

const sagaMiddleware = createSagaMiddleware();
// Estado inicial da aplicação
// Define que o botão começa como não clicado (false)

// Configura e cria a store do Redux
// O reducer é passado dentro de um objeto para criar um "slice" do estado
const store = configureStore({
  reducer: persistedReducers(rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
