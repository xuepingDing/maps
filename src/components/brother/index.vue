<template>
	<div class="boxo">
		<div >
			接收父组件的传值：{{txt}}
		</div>
		<p>你好，欢迎来到射手后裔专场</p>
		<input type="text" v-model="id" />  
			
		<button @click="btn">发送到父组件</button>
		
		<br /><br />
		<div>
			接收B组件的传值：{{getnum}}
			<button @click="modifybtn">操作</button>
		</div>
		<p>现在测试一下slot</p>  
		<slot></slot>
	</div>
</template>

<script>
import bus from '../publicbox/bus.js';	
export default{
	name : 'homea',
	data(){
		return{
			id : '你追我就跑，你跑我就追' ,
			getnum : 0,
//			conts : 12356, 
		}
	},
	props:['txt'],
	methods:{
		btn(){
//			console.log('发送')
//			if( this.id.length > 0 && this.id.length < 13 ){
				this.$emit('childa',this.id);
				
//			}else{
//				alert('id的长度限制为0~12');
//			}
			
		},
		modifybtn(){
			this.getnum++;
		}
	},
	mounted(){
		let that = this;
		bus.$on('val',(data)=>{
			console.log(data);
			that.getnum = data ;
		})
	}
}	
</script>

<style>
</style>