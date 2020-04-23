<template>
<!--地图画地块-->
  <div id="maps" style="height:600px;width:600px;"></div>

</template>
<script>

import BMap from 'BMap'
import BMapLib from 'BMapLib'


export default {
//name: "maps",
  mounted () {
    var map = new BMap.Map('maps', { mapType: BMAP_HYBRID_MAP });
    var poi = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
    // map.addControl(new BMap.MapTypeControl());


    map.addEventListener("tilesloaded", function () {

    });
    var overlays = [];

    var overlaycomplete = function (e) {

      polygon(e.overlay.getPath())
      e.overlay.remove()
      //alert(`总面积${e.calculate}米`)
      // e.disableCalculate()
      console.log(`总面积${e.calculate}米`);
      overlays.push(e.overlay);
    };
    var styleOptions = {
      strokeColor: "red", //边线颜色。
      fillColor: "red", //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 3, //边线的宽度，以像素为单位。
      strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
      fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
      strokeStyle: 'dashed' //边线的样式，solid或dashed。
    }
    //let flag = true
    // //实例化鼠标绘制工具
    var drawingManager = new BMapLib.DrawingManager(map, {
      isOpen: false, //是否开启绘制模式
      enableDrawingTool: false, //是否显示工具栏
      // drawingMode: 'BMAP_DRAWING_POLYLINE',
      drawingToolOptions: {
        anchor: 'BMAP_ANCHOR_TOP_RIGHT', //位置
        offset: new BMap.Size(5, 5), //偏离值
      },
      polylineOptions: styleOptions, //线的样式
      polygonOptions: styleOptions, //多边形的样式
    });
    // //添加鼠标绘制工具监听事件，用于获取绘制结果
    drawingManager.enableCalculate()//面积计算
    drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    // drawingManager.addEventListener('polygoncomplete', polygoncomplete)
    // let polygoncomplete = function () {
    //   console.log(56)
    // }

    map.addEventListener('click', draw)

    function draw () {
      drawingManager.open();
      drawingManager.setDrawingMode(BMAP_DRAWING_POLYLINE);
      // if (flag == true) {

      // } else {
      //   // drawingManager.close()
      //   map.removeOverlay()
      //   alert('此处有覆盖物')
      // }

    }
    function polygon (path) {
      let lableArr = document.getElementsByTagName('label')
      for (let index = 0; index < lableArr.length; index++) {
        lableArr[index].style.display = 'none'
      }

      var Polygon = new BMap.Polygon(path, { strokeColor: "red", fillColor: "red", strokeWeight: 3 })
      map.addOverlay(Polygon);
      // Polygon.addEventListener('mouseover', (res => {
      //   console.log(123);

      //   flag = false


      // }))
      //   Polygon.addEventListener('mouseout', (res => {
      //     // drawingManager.close()
      //     flag = true
      //   }))
    }

  }
}
</script>
<style >
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
html body .BMapLabel {
  display: none;
}
.anchorBL {
  display: none;
}
</style>