import { createRoot } from "react-dom/client";
// step 1
import { Provider } from "react-redux";
// step 2
import { store } from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// step 3
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
