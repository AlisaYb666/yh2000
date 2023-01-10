"ui";
ui.layout(
    <frame >
        <android.widget.VideoView  layout_gravity="center"  id="vd" h="{{device.height}}px" w="{{device.width}}" />
    </frame>
);
//全屏
activity.window.setFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN, android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
//视频路径
ui.vd.setVideoPath("/storage/emulated/0/临时库/视频.mp4")
ui.vd.start()
//重复视频
threads.start(function() {
    while (true) {
        if (!ui.vd.isPlaying()) {
            ui.vd.start()
        }
    }
})
