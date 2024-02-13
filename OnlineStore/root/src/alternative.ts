import { start , registerApplication, LifeCycles } from "single-spa";

const apps = [
    {
        name : "@os/app-header" ,
        package: "@os/app-header",
        activeWhen : (location) => !location.pathname.startsWith('/blank')
    },
    {
        name : "@os/app-footer" ,
        package: "@os/app-footer",
        activeWhen : ['/'],
    },
]

apps.forEach((app) => {
    registerApplication({
        name : app.package,
        app : () => System.import<LifeCycles>(app.package),
        activeWhen: app.activeWhen
    })
})

start({
    urlRerouteOnly : true,
})