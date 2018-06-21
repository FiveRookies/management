<template>
    <div class="waitMsgWindow"></div>
</template>
<style>
    .waitMsgWindow{
        background: white;
        opacity:0.5;
        z-index: 999;
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>
<script>
export default {
    name:'waitMsgWindow',
    data(){
        return{

        }
    },
    methods:{
    },
    mounted(){
        preventDefault();
    }
}
</script>

