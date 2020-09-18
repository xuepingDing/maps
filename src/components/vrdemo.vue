<template>
    <div class="test_two_box">
       {{vr}}
       <vrbox></vrbox>
    </div>
</template>

<script>
import vrbox from './publicbox/index.vue'	    	
export default {
    name: "vr",
    data() {
        return {
        	vr : "VR"
        };
    },
    components:{
 	vrbox,
    },
    mounted() { 
        
    },
    
    methods: {
        
    }
};
</script>

<style >
</style>