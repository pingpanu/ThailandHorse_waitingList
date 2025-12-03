<script>
import searchIcon from '../../assets/search-svg.svg'

export default {
    name: 'SearchBar',
    props: {
        searchMessage: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            searchIcon,
            iconSize: 45
        };
    }
}

</script>

<template>
    <div class="search-bar">
        <form>
            <input type="text" :placeholder="searchMessage" name="search"/>
            <button type="submit">
                <i class="fa fa-search"></i>
            </button>
        </form>
    </div>
</template>

<style scoped>

.search-bar{
    width:500px;
    height: 50px;
    border: none;
    border-radius: 25px;
    background-color: #d9d9d9;
    margin-top: 30px;
}

input[type=text] {
    width: 75%;
    padding: 6px;
    margin-top: 8px;
    margin-left: 16px;
    color: #7b7a7a;
    font-size: 17px;
    background-color: transparent;
    border: none;
}

.search-bar button {
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 17px;
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
}

</style>