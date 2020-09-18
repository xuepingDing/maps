<!--父组件（父子传值，子父传值）**插槽（子组件传值到父组件）**-->
<template>
	<div style="padding-left: 50px;">		
		<p>
			父组件：{{msg}}
		</p>
		<div style="width: 0;
			height: 0;
			border-top: 40px solid transparent;
			border-left: 40px solid transparent;
			border-right: 40px solid transparent;
			border-bottom: 40px solid #ff0000;">
			<!--这是一个三角形-->
		</div>
		<hr />
		接收a组件的数据：
		<!--<div v-html="titlea"></div>-->
		<p>{{titlea}}</p>
		<br />
		<div>
			接收b组件的数据：{{contentb}}
		</div>
		<br />
		<hr />
		子组件B：
		<vbrotherto :cont='txta' @childb='getchildb'>
			<p>这是插槽slot得内容</p>
			<!--作用域插槽-- 父组件访问子组件的数据-->
			<!--<template v-slot="slotProps">
	      		{{ slotProps.userData.name }}/{{ slotProps.userData.age }}
	      		<p>main main main main</p>
	      	</template>-->
	      	<!--<template v-slot="{userData}" >
	      		{{ userData.name }}/{{ userData.age }}	      		
	      	</template>-->
			<template scope="val"  >
				<!--//传值（自定义属性）-->
				<!--scope="val"-->
				<!--{{val.msg.cont}}-->
				{{val.userData}}
				<p>concosnofnasdfkljnlasn</p>
			</template>
			<p> you can you up</p>
			<p>no can no bibi</p>
			<!--2、下面是具名插槽 v-slot：(简写#) -->
			<!--v-slot 只能添加在 <template> 上-->
			<template #header>  
				<h1>title**这里是herder</h1>
    		</template>	
    		<!--3、作用域插槽(这里主要解决的是父组件在向子组件插槽传递模板内容时存在访问子组件数据的问题)-->
    		<!--写法1 -->
    		<!--<template  v-slot:footer="slotProps">  
    			
				<h2>footer footer footer footer footer</h2>
				<p>{{ slotProps.footdata.a }}</p>
    		</template>	-->
    		<!--写法2-->
    		<!--<template  v-slot:footer="{footdata}">  
    			
				<h2>footer footer footer footer footer</h2>
				<p>{{ footdata.c *footdata.d}}</p>
    		</template>-->
    		<!--写法2(简写，v-slot:/#)-->
    		<template  #footer="{footdata}">  
    			
				<h2>footer footer footer footer footer</h2>
				<p>{{ footdata.c *footdata.d}}</p>
    		</template>
		</vbrotherto>
		
		
		<hr />
		<br />
		子组件A：
		<vbrother :txt='txta' @childa='getchilda'>
			<p>测试一下吧内容写在这里了能否显示</p>	
			<button type="submit">
				
				<slot>Submit000</slot>
			</button>
			
			
		</vbrother>		
		<br />
		<hr />
	</div>
</template>

<script>
import vbrother from './brother/index.vue';
import vbrotherto from './brotherto/index.vue'
export default{
	name: 'home',
	data(){
		return{
			msg : '这个是home----' ,
			txta : '我是father' ,
			titlea : '永恒钻石中最靓的仔' ,//永恒钻石中最靓的仔
			contentb : '',

		}
	},
	components:{
		vbrother,
		vbrotherto
	},
	computed:{
		
	},
	methods:{
		getchilda(dates){
			
			if( dates != null || dates != ''  ){
				this.titlea = dates;
			}
//			console.log( this.title );
			console.log( dates );
		},
		getchildb(dat){
			console.log(dat);
			this.contentb = dat;
		}
	},
	mounted(){
		
	},
}
</script>

<style>
</style>