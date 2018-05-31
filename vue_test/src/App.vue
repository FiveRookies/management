<template>
		<div id="app">
	
			<!-- <img src="./assets/logo.png"> -->
			<!--<router-view/> -->
			<div id="menubar">
				<!-- <a v-bind:herf="herf[0]" >Gmail</a>
	            <a v-bind:herf="herf[1]"  >图片</a>
	            <a v-bind:herf="herf[2]"  >管理</a>
	            <button>{{btn}}</button> -->
				<a href="" v-for="herf in herfs">{{herf.message}}</a>
				<button>{{btnMes}}</button>
			</div>
            <div id="img-box">
                <img id='search-img' src="./assets/googlelogo.png" alt="">
            </div>
			<div id="search">
				<input type="text" name="" id="search-input">
                <div id="search-btn">
                    <button>Google搜索</button>
                    <button>試試手氣</button>
                </div>
            </div>     
		</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return{
				herfs:[
					{message:'Gmail'},
					{message:'圖片'},
					{message:'管理'}
				],
				btnMes:'登錄'
			}
		}
	} //导入包的名称
</script>


<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
        display: block;

	}
	
	
</style>
<style >
    @import "css/vue_text.css";
</style>
