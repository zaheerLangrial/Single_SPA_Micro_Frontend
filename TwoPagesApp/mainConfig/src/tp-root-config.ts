import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication(
  "@tp/nav",
  () => System.import<LifeCycles>('@tp/nav'),
  () => true,
  // (location) => location.pathname === '/',
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@tp/page1",
  () => System.import<LifeCycles>('@tp/page1'),
  (location) => location.pathname === "/page1",
  { domElement: document.getElementById("page1-container") }
);

registerApplication(
  "@tp/page2",
  () => System.import<LifeCycles>('@tp/page2'),
  (location) => location.pathname === "/page2",
  { domElement: document.getElementById("page2-container") }
);
start({
  urlRerouteOnly: true,
});
