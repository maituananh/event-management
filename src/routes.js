import Dashboard from "./pages/Dashboard";

const routes = [
    {
        path: '/',
        component: Dashboard,
        name: 'Home',
        icon: 'th-large'
    },
    {
        path: '/events',
        component: Event,
        name: 'Events',
        icon: 'sticky-note'
    }
]

export default routes;