import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router'

// Components
import Erro404Page from '@/views/Erro404Page.vue'


// User Login and Account
import OnConstructionPage from '@/views/OnConstructionPage.vue';

import { ROUTES as PTBR_ROUTES } from './routes/routes.ptbr';
import { useGlobal } from './Store';
import { getCookie } from 'typescript-cookie';
import { setLocale } from './LocaleRoutePlugin';


/** Router Rules */
const routes: RouteRecordRaw[] = [];
const addRoutes : RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "Erro404",
    component: Erro404Page
  },
  {
    path: "/on-construction",
    name: "ErroOnConstruction",
    component: OnConstructionPage
  },
]
PTBR_ROUTES.forEach(r => routes.push(r));
addRoutes.forEach(r => routes.push(r));

/** Vue Router */
const router: Router = createRouter({
  /**
   * History Mode
   *
   * @see {@link https://router.vuejs.org/guide/essentials/history-mode.html}
   */
  history: createWebHistory(import.meta.env.BASE_URL), // createWebHashHistory(import.meta.env.BASE_URL)
  routes,
})

// Global before guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards}
router.beforeEach(async (_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  useGlobal().hideLoader();

  if(_to.meta.locale !== undefined) {
    const routeLocale = _to.meta.locale as string;
    const userLocale = getCookie("user_lang");
    if(userLocale !== routeLocale) {
        setLocale(routeLocale);      
    }
  }

  next()
})

export default router
