import { createWebHistory, createRouter} from 'vue-router';
import AskView from "@/views/AskView";
import jobsView from "@/views/JobsView";
import newsView from "@/views/NewsView";
import userView from "@/views/UserView";
import ItemView from "@/views/ItemView";

const routes = [
    {
        path: '/',
        component: AskView
    },
    {
        path: '/ask',
        component: AskView,
    },
    {
        path: '/jobs',
        component: jobsView,
    },
    {
        path: '/news',
        component: newsView,
    },
    {
        path: '/item',
        component: userView,
    },
    {
        path: '/user',
        component: ItemView,
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});