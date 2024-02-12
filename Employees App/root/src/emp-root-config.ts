import { registerApplication, start, LifeCycles } from "single-spa";
import * as isActive from './activity.functions'

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication(
  "@emp/navbar",
  () => System.import<LifeCycles>("@emp/navbar"),
  isActive.navbar
);

registerApplication(
  "@emp/home",
  () => System.import<LifeCycles>("@emp/home"),
  isActive.home
);

registerApplication(
  "@emp/employees",
  () => System.import<LifeCycles>("@emp/employees"),
  isActive.employees
);

start({
  urlRerouteOnly: true,
});
