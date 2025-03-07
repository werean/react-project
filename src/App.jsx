import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Header from "./components/Header";
import Routes from "./routes";
import store, { persistor } from "./store";

function App() {
  return (
    //O provider envolvendo todo o escopo da aplicação está passando o estado do store para que toda a aplicação consiga acessa-lo sem necessidade de passar isso via props
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
