// 定义一个混入对象
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
const myMixin = {
    data() {
        return {
            isNoData: false,
            isShowLoding: true
        }
    }
}
export default myMixin;