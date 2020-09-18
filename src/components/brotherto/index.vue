<template>
	<div class="tos">
		
		<p>你好，欢迎来到--战士吕布--专场</p>
		<div>
			接收父组件的传值：{{cont}}
		</div>
		<div>
			<input v-model="values" type="text"/>
			<button @click="postval">发送到A组件</button>
		</div>
		
		<header>
		    <slot  name="header"></slot>  
		    <!--v-bind:fatherData='data'-->
		</header>
		    
		<main>
			<!--<slot :msg="data"></slot>-->
			<!--作用域插槽-->
		    <!--<slot v-bind:userData='user' ></slot>-->
		    <slot :userData='values' ></slot>
		</main>
		    
		<footer>
		      <slot v-bind:footdata='footerdata' name="footer"></slot>
		</footer>
	</div>
</template>
			
<script>
import buss from '../publicbox/bus.js';

export default{
	name : 'homeb',
	props:['cont'],
	data(){
		return{
			bol : true,
			values : 5,
			user : {
				name : '小明',
				age : '18'
			},
			data : {
				cont : '微信最新版本可以修改微信号'
			},
			footerdata : {
				a : '赵子龙',
				b : '陈咬金',
				c : 5,
				d : 6
			}
		}
	},
	created(){
		this.$emit('childb',this.bol);
	},
	methods:{
		postval(){
			buss.$emit('val',this.values);
		}
	}
}
</script>

<style>
</style>