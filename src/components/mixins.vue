<!--混入-->
<template>
	<div class="mixinst">
		mixins
		(混入)
		
	</div>
</template>

<script>
//import Vue from 'vue';
import mixin from "@/components/publicbox/mixins.js";

export default{
	mixins : [mixin],
}
//// 定义一个混入对象
//var myMixin = {
//	created() {
//  	this.hello()
//	},
//	methods: {
//	    hello: function () {
//	      console.log('hello from mixin!')
//	    }
//	}
//}
//// 定义一个使用混入对象的组件
//var Component = Vue.extend({
//	mixins: [myMixin]
//})
//
//var component = new Component() // => "hello from mixin!"

</script>

<style>
</style>