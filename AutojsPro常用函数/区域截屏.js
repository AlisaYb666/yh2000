if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
//截取屏幕
var img = captureScreen();
 //在坐标90,220正方形的左上角为中心点长款为400*400像素的区域
var clip = images.clip(img, 90, 220, 400, 400);
 //保存到相册路径
images.save(clip, "/storage/emulated/0/临时库/1.jpg");

//回收clip
clip.recycle()
