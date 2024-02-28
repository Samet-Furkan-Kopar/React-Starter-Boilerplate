import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import App from "./App.jsx";
// import Modals from "./modals/Index";
export const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   <BrowserRouter>
        <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
);
