<template>
    <form class="v-table__form">
        <select class="v-table__select" v-model="column">
            <option class="v-table__option" disabled value="">Choose column</option>
            <option class="v-table__option">Date</option>
            <option class="v-table__option">Name</option>
            <option class="v-table__option">Amount</option>
            <option class="v-table__option">Distance</option>
        </select>
        <select class="v-table__select" v-model="condition">
            <option class="v-table__option" disabled value="">Choose condition</option>
            <option class="v-table__option">&#61;</option>
            <option class="v-table__option">&#60;</option>
            <option class="v-table__option">&#62;</option>
        </select>
        <input v-model="text" class="v-table__input" type="text">
        <button class="v-table__btn" type="button" @click="filter(column, condition, text)">filter</button>
    </form>

    <div class="v-table">
       <div class="v-table__header">
        <p :class="{'column--active': column === 'Date'}">Date</p>
        <p :class="{'column--active': column === 'Name'}">Name</p>
        <p :class="{'column--active': column === 'Amount'}">Amount</p>
        <p :class="{'column--active': column === 'Distance'}">Distance</p>
       </div>
       <div class="v-table__body">
        <v-table-row-vue
        v-for="row in paginatedData"
        :key="row.id"
        :row_data="row"
        />
       </div>
       
       <div class="v-table__pagination">
        <div class="page"
        v-for="page in pages"
        :key="page"
        :class="{'page--active': page === pageNumber}"
        @click="pageClick(page)"
        >{{page}}</div>
        <span class="page-counter">page #{{this.pageNumber}}</span>
       </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import vTableRowVue from './v-table-row.vue';

export default {
    name: 'v-table-vue',
    components: {vTableRowVue},
    props: {
        table_data: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            userPerPage: 6,
            pageNumber: 1,
            column: '',
            condition: '',
            text: '',
            filteredArr: []
        }
    },
    methods: {
        ...mapActions(['GET_FILTERED_DATA']),

        pageClick(page){
            this.pageNumber = page
        }, 
        filter(column, condition, text){
           this.GET_FILTERED_DATA({column, condition, text})
        }
    },
    computed: {
       
        pages(){
            return Math.ceil(this.table_data.length / this.userPerPage)
        },
        paginatedData(){
            let from = (this.pageNumber - 1) * this.userPerPage;
            let to = from + this.userPerPage;
            return this.table_data.slice(from, to);
        },
     
    }
    
}
</script>

<style>
    .v-table{
        max-width: 800px;
        margin: 0 auto;
    }
    .v-table__form{}
    .v-table__select{
        padding: 5px;
        border-radius: 8px;
        color: #0c0c0c;
        margin-right: 15px;
    }
    .v-table__option{}
    .v-table__input{
        padding: 5px;
        border-radius: 8px 0 0 8px;
        color: #0c0c0c;
        outline: none;
        border: 1px solid;
    }
    .v-table__btn{
        border: none;
        border-radius: 0 8px 8px 0;
        color: #f1f1f1;
        background-color: #0c0c0c;
        padding: 6px;
        cursor: pointer;
        transition: all 250ms linear;
    }
    .v-table__btn:hover{
        opacity: 0.5;
        transition: all 250ms linear;
    }
    .v-table__header{
        display: flex;
        justify-content: space-around;
        font-weight: bold;
        padding-bottom: 5px;
        border-bottom: 2px solid gray;
    }
    .v-table__header p{
        flex-basis: 25%;
        text-align: left;
        padding: 5px 10px;
    }
    .v-table__pagination{
        display: flex;
        justify-content: center;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 2px solid gray;
    }
    .page{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #0c0c0c;
        color: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        cursor: pointer;
        transition: all 250ms linear;
    }
    .page:hover{
        opacity: 0.5;
        transition: all 250ms linear;
    }
    .page-counter{
        display: flex;
        align-items: center;
        margin-right: 20px;
        border: 2px solid #0c0c0c;
        border-radius: 20px;
        padding: 0 8px;
    }
    .page--active{
        opacity: 0.5; 
    }
    .column--active{
        -webkit-box-shadow: 0px 0px 8px 14px rgba(56, 242, 69, 0.2);
-moz-box-shadow: 0px 0px 8px 14px rgba(56, 242, 69, 0.2);
box-shadow: 0px 0px 2px 4px rgba(56, 242, 69, 0.2);
    }
</style>