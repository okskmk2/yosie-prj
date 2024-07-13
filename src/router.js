import { createWebHashHistory, createRouter } from 'vue-router'
import DefaultLayout from "./components/DefaultLayout.vue";
import HomeView from './HomeView.vue'
import StartView from './StartView.vue'
import ExamLobbyView from './ExamLobbyView.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', component: HomeView },
            { path: '/start', component: StartView },
        ],
    },
    {
        path: '/examLobby',
        component: ExamLobbyView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;