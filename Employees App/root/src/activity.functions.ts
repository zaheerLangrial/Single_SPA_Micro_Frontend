export function navbar (location) {
    return true;
}
export function home (location) {
    return location.pathname === '/';
}
export function employees (location) {
    return location.pathname === '/employees'
}