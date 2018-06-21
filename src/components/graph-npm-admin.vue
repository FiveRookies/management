<template style="height: 100%; margin: 0 ;background-color: transparent;border-radius: 15px;" >
        <div style="background-color: #fff;height: 100%;border-radius: 15px;">
            <div id="container3" style="height: 100%; background-color: #fff;"></div>
        </div>
</template>

<script>
import initgra from '@/assets/js/graph-npm-admin'
export default {
    name:'graphNpmAdmin',
    mounted(){
        initgra.initgra();
    }

}
</script>

<style scoped>

</style>


