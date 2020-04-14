import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import "normalize.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Quixote } from "./views/quixote";
import { Fatura } from "./views/fatura";

ReactDOM.render(
  <React.StrictMode>
    <PDFViewer width="100%" height="100%">
      <Fatura />
    </PDFViewer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
