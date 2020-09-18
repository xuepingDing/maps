<template>
	<div>
		<h2>这里是子组件two的内容部分</h2>
		<div>
			{{dat}}
		</div>
		<!--<slot></slot>-->
		<slot name='main' :datas="slotdata"></slot>	
	</div>
</template>

<script>
import agent from '../publicbox/agent.js'	
export default {
	data(){
		return{
			dat : '1',
			slotdata : {
				a : '小明',
				b : 'b'
			}
		}
	},
	created(){
		console.log('2');
		let that = this;
		agent.$on('childdata',(data)=>{
			console.log(data);
			that.dat = data;
		})
//		that.dat = '2.0'
	},
	mounted(){
		
	}
}
</script>

<style>
</style>