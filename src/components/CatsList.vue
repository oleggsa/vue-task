<template>
    <div class="wrapper">
        <div class="search__wrapper">
            <div class='search__filters'>
                <label class="search__filters-item">
                    <input type="radio" value="default" name="filterCh" id="default" v-model="filter" checked>
                    <span>Default</span>
                </label>
                <label class="search__filters-item">
                    <input type="radio" value="likes" name="filterCh" id="likes" v-model="filter">
                    <span>Likes</span>
                </label>
                <label class="search__filters-item">
                    <input type="radio" value="comments" name="filterCh" id="comments" v-model="filter">
                    <span>Comments</span>
                </label>
            </div>
            <div class="search__input">
                <input type="text" class="findTags" placeholder="filter" v-model="searchText" @input="searchTags">
            </div>
        </div>
        <div class="card__wrapper">
            <div class="card"
            v-for="item in sortItems"
            :key='item.id'>
                <a :href="item.pageURL" target="_blank" class="card__image">
                    <img :src="item.previewURL" alt="cat">
                </a>
                <div class="card__descr">
                    <div class='card__tags' 
                    v-for="tag in item.tags.split(',')"
                    :key='tag'>{{tag}}</div>
                    <div class="card__likes-comments">
                        <div class='card__likes'>Liked {{item.likes}} users</div>
                        <div class='card__comments'>{{item.comments}} comment</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'CatsList',
    data() {
        return {
            filter: 'default',
            searchText: ''
        }
    },
    components: {

    },
    methods: {
        ...mapGetters([
        'getStateItems'
      ]),
      ...mapActions([
        'getItemsAPI'
      ])
    },
    
    computed: {
        // searchTags() {
        //     let newArr = [];
        //     this.$store.getters.getStateItems.forEach(el => {
        //         if (el.tags.split(',').find(this.searchText)) newArr.push(el);
        //     }
        //     return newArr;
        // },
        sortItems(){
        if (this.filter === 'comments') {
            return [...this.$store.getters.getStateItems].sort((a, b) => b.comments - a.comments);
        }
        if (this.filter === 'likes') {
            return [...this.$store.getters.getStateItems].sort((a, b) => b.likes - a.likes);
        }
        return this.$store.getters.getStateItems;
        }
    },
    mounted(){
        this.getItemsAPI;
    }
}

</script>