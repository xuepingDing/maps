<template>
  <div class="hello">
		<div id="app" z-index="105">
			<div id="menu" style="left: 207.5px;bottom: 0;">
				<div>
					<span style="font-weight: bold; cursor: default;">风格:</span>
					<!--<span style="background: rgb(64, 158, 255);">中式</span>-->
					<!--<span>现代</span>
					<span>新古典</span>
					<span>欧式</span>
					<span>美式</span>
					<span>北欧</span>
					<span>法式</span>-->
					
					<span v-for="(item,i) in dataarr" @click="styleClick(item)" v-show="item.children.length > 0 " :style="item.styleObj">{{item.name}}</span>
				</div>
				<div>
					<span style="font-weight: bold; cursor: default;">位置:</span>
					<!--<span style="background: rgb(64, 158, 255);">客餐厅</span>-->
					<!--<span>客厅</span>
					<span>餐厨</span>
					<span>卧室</span>
					<span>卫浴</span>
					<span>书房</span>-->
					<span v-for="(item,i) in childarr" @click="posClick(item)" v-show="item.jpgNameArr.length > 0 " :style="item.styleObj">{{item.name}}</span>
				</div>
			</div>
			<div style="position: absolute; right: 5px; top: 449px;">
				<button type="button" class="el-button el-button--danger is-circle">
					<i @click="nextClick">></i><!----><!--<i class="el-icon-arrow-right"></i>--><!---->
				</button>
			</div>
			<div style="position: absolute; left: 5px; top: 449px;">
				<button type="button" class="el-button el-button--danger is-circle">
					<i @click="upClick"><</i><!----><!--<i class="el-icon-arrow-left"></i>--><!---->
				</button>
			</div>
			<div style="color: rgb(0, 255, 255); width: 60px; height: 60px; border-radius: 30px; left: 5px; top: 5px; font-size: 18px; background: rgba(0, 0, 0, 0.5); position: absolute;">
				<div style="margin-top: 17px; width: 60px; text-align: center;"> {{num}}/{{N}}</div>
			</div>
			<div style="position: absolute; right: 20px; top: 20px;">
				<button @click="audioClick" type="button" class="el-button el-button--danger is-circle">
					
					<span>
						<i>
							<img :src="musicimg" alt="" height="20" width="20">
						</i>
					</span>
				</button>
				<button @click="ScreenClick" type="button" class="el-button el-button--danger is-circle">
					
					<span>
						<i>
							<img :src="screenimg" alt="" width="18" height="18">
						</i>
					</span>
				</button>
				<button @click="rotateClick" type="button" class="el-button el-button--danger is-circle">
					
					<span>
						<i><img :src="xzimg" alt="" width="20" height="20"></i>
					</span>
				</button>
				<button @click="questionClick" type="button" class="el-button el-button--danger is-circle">
					
				<span>
					<i><img src="/public/btnimg/bz5.png" alt="" width="22" height="22"></i>
				</span>
				</button>
			</div>
		</div>
  </div>
</template>

<script>
var scene = new THREE.Scene();
var box = new THREE.SphereGeometry(25, 50, 50);
var material = new THREE.MeshBasicMaterial({
	color: 0xffffff,
	side: THREE.BackSide,
});
var mesh = new THREE.Mesh(box, material);
scene.add(mesh);
var textureLoader = new THREE.TextureLoader();
var listener = new THREE.AudioListener();
var audio = new THREE.Audio(listener);
var texture = textureLoader.load('/public/fg/00125.jpg', function(obj) {
//	console.log(this.loading);
//	this.loading.close();
	var audioLoader = new THREE.AudioLoader();
	audioLoader.load('/public/music/mpp.mp3', function(AudioBuffer) {
		audio.setBuffer(AudioBuffer);
		audio.setLoop(true);
		audio.setVolume(0.3);
		audio.play()
	});
	render()
});
mesh.material.map = texture;
var width = window.innerWidth;
var height = window.innerHeight;
var k = width / height;
var camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.zoom = 1;
camera.updateProjectionMatrix();
camera.position.set(-0.87, 0.03, 0.4);
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer({
	antialias: true,
});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var clock = new THREE.Clock();
var FPS = 30;
//刷新时间
var sxtime = 1 / FPS;
var timeS = 0;
var rotateBoool = true;
//console.log( this.rotateBoool )
function render() {
	requestAnimationFrame(render);
	//渲染间隔
	var xrtime = clock.getDelta();
	timeS = timeS + xrtime;
	if(timeS > sxtime) {
		renderer.render(scene, camera);
		if(rotateBoool) {
			mesh.rotateY(0.002)
		}
		timeS = 0
	}
}
render();
var controls = new THREE.OrbitControls(camera);
controls.enablePan = false;

var styleObjArr = path();
console.log( styleObjArr );
	
export default {
  name: 'index',
  data () {
    return {
			dataarr : styleObjArr,
			childarr : styleObjArr[0].children,
			musicimg : '/public/btnimg/opens.png',//音乐按钮图标
			xzimg : '/public/btnimg/xz.png',//旋转按钮图标
			screenimg : '/public/btnimg/screens.png',
			loading: null,
			styleArr: styleObjArr,
			styleChoose: null,
			posArr: null,
			posChoose: null,
			width: window.innerWidth,
			height: window.innerHeight,
			classPath: '',
			path: '',
			audioBoool: true,//播放音乐
			ScreenBoool: true,//全屏
			rotateBoool: rotateBoool,//自动旋转
			N: styleObjArr[0].children[0].jpgNameArr.length,//当前显示总数
			num: 1,//当前显示图片      
    }
  },
  mounted(){
//		var scene = new THREE.Scene();
//		var box = new THREE.SphereGeometry(25, 50, 50);
//		var material = new THREE.MeshBasicMaterial({
//			color: 0xffffff,
//			side: THREE.BackSide,
//		});
//		var mesh = new THREE.Mesh(box, material);
//		scene.add(mesh);
//		var textureLoader = new THREE.TextureLoader();
////		var listener = new THREE.AudioListener();
////		var audio = new THREE.Audio(listener);
//		var texture = textureLoader.load('/static/fg/00125.jpg', function(obj) {
//			console.log(this.loading);
//			this.loading.close();
//			var audioLoader = new THREE.AudioLoader();
//			audioLoader.load('/static/music/mpp.mp3', function(AudioBuffer) {
//				audio.setBuffer(AudioBuffer);
//				audio.setLoop(true);
//				audio.setVolume(0.3);
//				audio.play()
//			});
//			render()
//		});
//		mesh.material.map = texture;
//		var width = window.innerWidth;
//		var height = window.innerHeight;
//		var k = width / height;
//		var camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
//		camera.zoom = 1;
//		camera.updateProjectionMatrix();
//		camera.position.set(-0.87, 0.03, 0.4);
//		camera.lookAt(scene.position);
//		var renderer = new THREE.WebGLRenderer({
//			antialias: true,
//		});
//		renderer.setSize(width, height);
//		document.body.appendChild(renderer.domElement);
//		var clock = new THREE.Clock();
//		var FPS = 30;
//		//刷新时间
//		var sxtime = 1 / FPS;
//		var timeS = 0;
//		console.log( this.rotateBoool )
//		function render() {
//			requestAnimationFrame(render);
//			//渲染间隔
//			var xrtime = clock.getDelta();
//			timeS = timeS + xrtime;
//			if(timeS > sxtime) {
//				renderer.render(scene, camera);
//				if(this.rotateBoool) {
//					mesh.rotateY(0.002)
//				}
//				timeS = 0
//			}
//		}
//		render();
//		var controls = new THREE.OrbitControls(camera);
//		controls.enablePan = false;  	
  },
  methods: {
		audioClick() {//音乐播放
			if(this.audioBoool) {
				this.audioBoool = false;
				audio.pause()
				this.musicimg = '/public/btnimg/closes.png';
			} else {
				this.audioBoool = true;
				audio.play();
				this.musicimg = '/public/btnimg/opens.png';
			}
		},
		ScreenClick() {//全屏
			if(this.ScreenBoool) {
				this.ScreenBoool = false;
				requestFullScreen();
				this.screenimg = '/public/btnimg/quits.png';							
			} else {
				this.ScreenBoool = true;
				exitFullscreen();
				this.screenimg = '/public/btnimg/screens.png';
			}
		},
		questionClick() {
			alert('按住左键不放上下左右拖动，可以旋转整个场景, 旋转操作')
		},
		rotateClick: function() {//旋转
			if(this.rotateBoool) {
				this.rotateBoool = false;
				rotateBoool = false;
				this.xzimg = '/public/btnimg/xzno.png'
			} else {
				this.rotateBoool = true;
				rotateBoool = true;
				this.xzimg = '/public/btnimg/xz.png'
			}
		},
		nextClick() {//下一张图
			if(this.num < this.N) {
				this.num += 1
			} else {
				this.num = 1
			}
		},
		upClick() {//上一张图片
			if(this.num > 1) {
				this.num -= 1
			} else {
				this.num = this.N
			}
		},
		styleClick(styleObj) {
			console.log(styleObj);
			this.childarr = styleObj.children;
//						this.loading = this.$loading({
//							lock: true,
//							text: 'Loading',
//							spinner: 'el-icon-loading',
//							background: 'rgba(0, 0, 0, 0.7)'
//						});
			this.num = 1;
			this.styleChoose.styleObj.background = null;
			this.posChoose.styleObj.background = null;
			this.styleChoose = styleObj;
			this.styleChoose.styleObj.background = '#409EFF';//当前风格
			this.posArr = this.styleChoose.children;
			this.posChoose = this.posArr[0];
			this.posArr[0].styleObj.background = '#409EFF';//当前风格第1个位置
			this.N = this.posChoose.jpgNameArr.length;
			this.classPath = this.styleChoose.name + '/' + this.posChoose.name;
			this.path = this.posChoose.jpgNameArr[this.num - 1];
			var texture = textureLoader.load('/public/fg/' + this.path, function(obj) {
//				this.loading.close();
				render()
			});
			mesh.material.map = texture
		},
		posClick(posObj) {
			console.log(posObj);
			
//						this.loading = this.$loading({
//							lock: true,
//							text: 'Loading',
//							spinner: 'el-icon-loading',
//							background: 'rgba(0, 0, 0, 0.7)'
//						});
			this.num = 1;
			this.posChoose.styleObj.background = null;
			this.posChoose = posObj;
			this.N = this.posChoose.jpgNameArr.length;
			this.posChoose.styleObj.background = '#409EFF';
			this.classPath = this.styleChoose.name + '/' + this.posChoose.name;
			this.path =  this.posChoose.jpgNameArr[this.num - 1];
			var texture = textureLoader.load('/public/fg/' + this.path, function(obj) {
//				this.loading.close();
				render()
			});
			mesh.material.map = texture
		},
		update: function() {},
	},
	watch: {
		num: function(value) {  
			console.log(value);
//			this.loading = this.$loading({
//				lock: true,
//				text: 'Loading',
//				spinner: 'el-icon-loading',
//				background: 'rgba(0, 0, 0, 0.7)'
//			}); 
			
			//this.path = this.classPath + '/' + this.posChoose.jpgNameArr[this.num - 1];
			this.path =  this.posChoose.jpgNameArr[this.num - 1];
			console.log(this.path);
			var texture = textureLoader.load('/public/fg/' + this.path, function(obj) {
//				this.loading.close();
				render()
			});
			mesh.material.map = texture;
			render()
		}
	},
	created() {
		this.posArr = styleObjArr[0].children;
		this.styleChoose = this.styleArr[0];
		this.posChoose = styleObjArr[0].children[0];
//		this.loading = this.$loading({
//			lock: true,
//			text: 'Loading',
//			spinner: 'el-icon-loading',
//			background: 'rgba(0, 0, 0, 0.7)'
//		})
	}
  
}
window.onresize = onresizeFun;

function onresizeFun() {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	this.width = window.innerWidth;
	this.height = window.innerHeight;
};

function requestFullScreen() {
	console.log('fdsfdf');
	var de = document.documentElement;
	if(de.requestFullscreen) {
		de.requestFullscreen()
	} else if(de.mozRequestFullScreen) {
		de.mozRequestFullScreen()
	} else if(de.webkitRequestFullScreen) {
		de.webkitRequestFullScreen()
	}
}

function exitFullscreen() {
	var de = document;
	if(de.exitFullscreen) {
		de.exitFullscreen()
	} else if(de.mozCancelFullScreen) {
		de.mozCancelFullScreen()
	} else if(de.webkitCancelFullScreen) {
		de.webkitCancelFullScreen()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
				margin: 0;
				padding: 0;
				overflow : hidden; /*//隐藏body窗口区域滚动条*/    }    
				#menu{      position:absolute; 
				bottom:0px; color: #fff;  
				background: rgba(0, 0, 0, 0.5);  
				padding: 10px;  
				z-index: 102;
				width:500px;}   
				 #menu>div{ padding: 5px;    }    
				 #menu span{      display:inline-block;
				       padding:5px 10px;      
				       cursor:pointer;    }    
				 .el-button--danger{      
				 	font-size:25px !important;       
				 	 background: rgba(0, 0, 0, 0.5) !important;    
				 	 border-width:0px !important;        
				 	 width:50px !important;    
				 	 height:50px !important;   }  
				  [v-cloak] {   display: none;   }
</style>
