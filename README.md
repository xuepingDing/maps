# mymaps

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

父子组件传值
非父子组件传值(新建js文件，引入vue，export，利用中介，传递：$emit('event',  cont)   接收：$on('event',    (data)=>{})  )
													     传值事件名称，     传值                             传值事件名称，   接收值    	
home.vue  (父组件)
	brother/index.vue (子组件A)
	brotherto/index.vue (子组件B)

