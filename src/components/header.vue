<script>
import LogoHeader from './header/web.logo.vue';
import SearchBar  from './header/searchbar.vue';
import LanguageSelector from './header/language.selector.vue';
import { useLanguage } from '@/composable/useLangauge';

export default {
    name: 'HeaderItem',
    components: {
        LogoHeader,
        SearchBar,
        LanguageSelector
    },
    setup() {
        const { currentLanguage, setLangauge } = useLanguage();
        return {
            currentLanguage,
            setLangauge
        }
    },
    computed: {
        searchMessage() {
            const messages = {
                THA: 'ค้นหาด้วยคีย์เวิร์ด',
                ENG: 'Search by Keyword',
                JAP: 'キーワードで検索する'
            };
            return messages[this.currentLanguage] || messages.THA;
        }
    },
    methods: {
        handleLanguageChange(language) {
            this.currentLanguage = language;
        }
    }
};
</script>

<template>
    <div class="main_header">
        <div>
            <LogoHeader :description="welcome" />
        </div>
        <div>
            <SearchBar :searchMessage="searchMessage" />
        </div>
        <div>
            <LanguageSelector @language-changed="handleLanguageChange" />
        </div>
    </div>
</template>

<style scoped>
.main_header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1vw;
}

@media (min-width: 1024px) {
    .main_header { flex-direction: row; }
}
</style>