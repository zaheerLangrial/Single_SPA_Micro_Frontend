import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;

function domElementGetter() {
  let shouldCreateNew = false;
  let el = document.getElementById("emp-home");
  if (!el) {
    shouldCreateNew = true;
    el = document.createElement("home");
    el.id = "emp-home";
  }
  el.className = "";
  if (shouldCreateNew) {
    document.body.appendChild(el);
  }
  return el;
}

