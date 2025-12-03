<script>
export default {
    name: 'LanguageSelector',
    data() {
        return {
            selectedLanguage: 'THA',
            isOpen: false,
            languages: [
                { code: 'THA', flagUrl: 'https://flagcdn.com/w40/th.png', label: 'ไทย', shortCode: 'TH' },
                { code: 'ENG', flagUrl: 'https://flagcdn.com/w40/gb.png', label: 'English', shortCode: 'GB' },
                { code: 'JAP', flagUrl: 'https://flagcdn.com/w40/jp.png', label: '日本語', shortCode: 'JP' }
            ]
        };
    },
    computed: {
        selectedLanguageObj() {
            return this.languages.find(lang => lang.code === this.selectedLanguage);
        }
    },
    mounted() {
        this.$emit('language-changed', this.selectedLanguage);
        // Close dropdown when clicking outside
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    watch: {
        selectedLanguage(newValue) {
            this.$emit('language-changed', newValue);
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectLanguage(code) {
            this.selectedLanguage = code;
            this.isOpen = false;
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isOpen = false;
            }
        }
    }
};
</script>

<template>
    <div class="language-select" ref="dropdown">
        <div class="select-button" @click="toggleDropdown">
            <span class="selected-text">
                <img :src="selectedLanguageObj.flagUrl" :alt="selectedLanguageObj.shortCode" class="flag-img" />
                <span class="label">{{ selectedLanguageObj.label }}</span>
            </span>
            <span class="arrow" :class="{ open: isOpen }">▼</span>
        </div>
        
        <div v-if="isOpen" class="dropdown-menu">
            <div 
                v-for="lang in languages" 
                :key="lang.code"
                class="dropdown-item"
                :class="{ selected: lang.code === selectedLanguage }"
                @click="selectLanguage(lang.code)"
            >
                <img :src="lang.flagUrl" :alt="lang.shortCode" class="flag-img" />
                <span class="label">{{ lang.label }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.language-select {
    position: relative;
    width: 200px;
    user-select: none;
    margin-top: 30px;
}

.select-button {
    width: 100%;
    height: 50px;
    border: 5px solid #7b7a7a;
    background-color: #d9d9d9;
    padding: 8px 12px;
    color: black;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Noto Sans Thai', 'Noto Sans JP', 'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
}

.select-button:hover {
    background-color: #eeeeee;
    border: 5px solid #b8b8b8;
}

.selected-text {
    display: flex;
    align-items: center;
    gap: 10px;
}

.flag-img {
    width: 24px;
    height: auto;
    border-radius: 2px;
}

.label {
    font-size: 18px;
}

.arrow {
    font-size: 12px;
    transition: transform 0.3s ease;
}

.arrow.open {
    transform: rotate(180deg);
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #d9d9d9;
    border: 5px solid #7b7a7a;
    border-top: none;
    box-sizing: border-box;
    z-index: 1000;
    margin-top: -5px;
}

.dropdown-item {
    padding: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Noto Sans Thai', 'Noto Sans JP', 'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}

.dropdown-item:hover {
    background-color: #eeeeee;
}

.dropdown-item.selected {
    background-color: #c0c0c0;
    font-weight: bold;
}
</style>