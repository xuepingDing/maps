<template>
	<div >
		<p>这里是childa组件内容</p>
		{{msgobj}}<br />
		<input type="text" v-model="tsv"/>
		<input type="button" value="点击发送" @click="btnpost"/>
		<br />{{tsv}}
	</div>
</template>

<script>
import agent from '../publicbox/agent.js'	;
export default{
	data(){
		return{
			cont : '我是你兄弟child组件传来的数据',	
			tsv : 'a',
		}
	},
	props : ["msgobj"],
	created(){
		console.log( this.msgobj );
//		this.msgobj.age = "20";
		
		
		this.$emit('childapar',this.cont);

		//传给兄弟组件（childtwo）
		//***vue 父子组件传值和兄弟组件传值不能同时触发(延时可以出发)
//		agent.$emit('childdata',this.cont);//兄弟组件通信
//		setTimeout(()=>{
//			agent.$emit('childdata',this.cont)
//		},50)
	},
	mounted(){
//		agent.$emit('childdata',this.cont);//兄弟组件通信
	},
	methods:{
		btnpost(){
			this.$emit('childabtn',this.tsv);
//			agent.$emit('childdata',this.cont+'*****');
			console.log(this.tsv );
		}
	}
}
</script>

<style>
</style>