<template  style="height: 100%; margin: 0">
   <div id="container2" style="height: 100%"></div>
</template>

<script>
import initmul from '@/assets/js/multiple-x-axis'

export default {
    name:'multipleXAxis',
    mounted(){
        initmul.initmul();
    }

}
</script>

<style scoped>

</style>


