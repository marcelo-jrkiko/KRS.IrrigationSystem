import { createI18n } from "vue-i18n";

import PTBR_TEXTS from '@/assets/locale/pt-br';
import EN_TEXTS from '@/assets/locale/en-us';
import { getCookie } from "typescript-cookie";

const userLang =  getCookie('user_lang');
const i18n = createI18n({
    locale: (userLang !== undefined ? userLang : 'pt-br'),
    fallbackLocale: 'en-us',
    messages: {
        "en-us": EN_TEXTS, // Inglês Americano
        "pt-br": PTBR_TEXTS // Português Brasil
    }
});

export default i18n;