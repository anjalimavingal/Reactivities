import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/style.css";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.css";
import { store, StoreContext } from "./app/stores/Store";

// const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
// );
// root.render(
//     // <React.StrictMode>
//     <App />
//     // </React.StrictMode>
// );

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
