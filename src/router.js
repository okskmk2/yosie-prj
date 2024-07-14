import { createWebHashHistory, createRouter } from 'vue-router'
import DefaultLayout from "./components/DefaultLayout.vue";
import HomeView from './HomeView.vue'
import StartView from './StartView.vue'
import FaceRecognitionView from './FaceRecognitionView.vue'
import FaceProgressView from './FaceProgressView.vue'
import FaceDoneView from './FaceDoneView.vue'
import UjianLayout from "./components/UjianLayout.vue";
import UjianLobby from './UjianLobby.vue'
import PJLUOLogin from './PJLUOLogin.vue'
import Ujian from './Ujian.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', component: HomeView },
            { path: 'start', component: StartView },
            {
                path: 'face1',
                component: FaceRecognitionView
            },
            {
                path: 'face2',
                component: FaceProgressView
            },
            {
                path: 'face3',
                component: FaceDoneView
            }
        ],
    },
    {
        path: '/ujian-lobby',
        component: UjianLayout,
        children: [
            { path: '', component: UjianLobby },
            { path: 'pjluo', component: PJLUOLogin },
        ],
    },
    {
        path: '/ujian',
        component: Ujian
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;