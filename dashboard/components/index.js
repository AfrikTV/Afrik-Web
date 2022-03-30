import { Home } from "./Home.js";
import { Billing } from "./Billing.js";
import { Activity } from "./Activity.js";
import { Settings } from "./Settings.js";
import { Watchlater } from "./WatchLater.js";
import { RecentlyPlayed } from "./RecentlyPlayed.js";

let routes = {
    '/dashboard/': Home,
    '/dashboard/billing': Billing,
    '/dashboard/activity': Activity,
    '/dashboard/settings': Settings,
    '/dashboard/watch-later': Watchlater,
    '/dashboard/recently-played': RecentlyPlayed
}


let links = [
    {
        path: '/dashboard/',
        component: Home,
        icon: 'las la-home'
    },
    {
        path: '/dashboard/billing',
        component: Billing,
        icon: 'las la-credit-card'
    },
    {
        path: '/dashboard/activity',
        component: Activity,
        icon: 'las la-tv'
    },
    {
        path: '/dashboard/settings',
        component: Settings,
        icon: 'las la-cog'
    }
]

const Routes = routes;
const Links = links;
export { Routes, Links };