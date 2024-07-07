import Erro500Page from '@/views/Erro500Page.vue'
import HomePage from '@/views/HomePage.vue'
import { RouteRecordRaw } from 'vue-router'

export const ROUTES : RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
          locale: "pt-br"
        }
      },         
      {
        path: "/erro-500",
        name: "Erro500",
        component: Erro500Page,
        meta: {
          locale: "pt-br"
        }
      },
];