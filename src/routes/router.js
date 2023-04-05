import { createWebHistory, createRouter} from 'vue-router';
import AskView from "@/views/AskView";
import jobsView from "@/views/JobsView";
import newsView from "@/views/NewsView";
import userView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import chartView from "@/views/ChartView";

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
        path: '/item/:id',
        component: ItemView,
    },
    {
        path: '/user/:id',
        component: userView,
    },
    {
        path: '/chart',
        component: chartView,
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});