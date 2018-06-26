<template>
    <transition
        name="fade"
    >
    <div v-if="show" ref='contentwraper'  @click.stop="goTop" >
       <slot></slot>
    </div>
    </transition>
</template>

<script> 

export default {
  data() {
    return {
      isTop: true,
      timer: null,
      show:false
    };
  },
  mounted() {
    this.needScroll();
  },
  methods: {
    needScroll() {
        //显示和隐藏
        let scrollElement =document.documentElement||document.body;
        window.onscroll=()=>{
            let scrolltop = scrollElement.scrollTop;
            if(scrolltop>100){
                this.show =true;
            }else{
                this.show =false
            }
        }
    },
    goTop() {
        //回到顶部
        let scrollElement =document.documentElement||document.body
        scrollTo(scrollElement,0,200)
    }
  }
};
</script>

<style scoped>
</style>