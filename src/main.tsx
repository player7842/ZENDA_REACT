import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Conectar Redux
import { store } from "./store";        // Importar Store
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>        {/* TODA la app ve el estado */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);