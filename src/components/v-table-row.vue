<template>
    <div class="v-table-row">
        <div class="row row__date">{{row_data.birthDate}}</div>
        <div class="row row__name">{{row_data.lastName}}</div>
        <div class="row row__amount">{{row_data.height}}</div>
        <div class="row row__distance">{{row_data.weight}}</div>
    </div>
</template>

<script>
export default {
    name: 'v-table-row-vue',
    props: {
        row_data: {
            type: Object,
            default: () => {}
        },
    }   
}
</script>

<style>
    .v-table-row{
        display: flex;
        justify-content: space-around;
        text-align: left;
    }
    .v-table-row:nth-child(even){
        background-color: #c1c1c1;
    }
    .row{
        text-align: left;
        flex-basis: 25%;
        padding: 5px 10px;
    }
    
</style>