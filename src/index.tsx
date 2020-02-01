import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyle";
import Widget from "./components/pages/Widget";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Widget />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
