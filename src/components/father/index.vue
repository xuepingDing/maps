<template>
	<div id="fath">
		<childa :msgobj="fatherone"  @childabtn='getbtn' @childapar='getobjone'></childa>
		<p>这里是点击按钮后传过来的值:{{msge}}</p>
		<!--@childapar='getobjone'-->
		<div>child传来的值：</div>
		<!--<div v-for="item in gete" :key="item">{{item}}</div>-->
		
		<div>{{gete}}</div>
		
		<hr />
		<childtwo>
			<p>这是一个段落，有很多精彩的故事，就是有点费酒</p>
			<!--<template v-slot:main>
				<div>这事slot插槽的内容</div>
			</template>-->
			<!--<template #main="{datas}">
				<div>这事slot插槽的内容</div>
				{{datas.a}}***{{datas.b}}
			</template>-->
			<template >
				<div>这事slot插槽的内容</div>
				
			</template>
		</childtwo>
	</div>
</template>

<script>
import childa from '@/components/child/index';
import childtwo from '@/components/childtwo/index';
export default{
	data(){
		return{
			fatherone : {
				name : '老表',
				address : '江西'
			},
			msge : '',
			gete : '',
		}
	},
	created(){
		
	},
	components:{
		childa,
		childtwo
	},
	methods:{
		getobjone(item){
			console.log(item) ;
			this.gete = item ;
		},
		getbtn(item){
			console.log( "这里是点击按钮后传过来的值："+item );
			this.msge =item ;
		}
	}
}
</script>

<style>
</style>