import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";
import Root from "./components/root";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});

export const { bootstrap, mount, unmount } = lifecycles;
