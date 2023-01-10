var w = floaty.window(
    <vertical>
        <card cardBackgroundColor="#ffffff"gravity="centre"
        cardCornerRadius="6dp"foreground="?selectableItemBackground"
        margin="6">
        <vertical padding="5" h="80">
            <text text="酷库"/>
            <com.stardust.autojs.core.console.ConsoleView id="console" padding="-15" textSize="4sp" w="120"  h="80"/>
        </vertical>
    </card>
    <horizontal>
        <button id="ks"text="开始运行"w="auto"style="Widget.AppCompat.Button.Colored"/>
        <button id="gb"text="退出脚本"w="auto"style="Widget.AppCompat.Button.Colored"/>
    </horizontal>
    </vertical>
);
setInterval(() => {}, 1000);
//运行日记
function log(str) {
    let date = new Date()
    let h = date.getHours();
    h = h < 10 ? ("0" + h) : h;
    let minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    let second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    console.verbose("[" + h + ':' + minute + ':' + second + "]" + "—" + str)
}
w.console.setColor("V", "#1DCA59");
w.console.setConsole(runtime.console);

//运行日记--不加时间
// function log(str) {
//     console.verbose(str)
// }
// w.console.setColor("V", "#000000");
// w.console.setConsole(runtime.console);
w.ks.on("click", () => {
    if (w.ks.getText() == '开始运行') {
        刷新()
        w.ks.setText('停止运行');
    } else {
        threads.shutDownAll()
        console.clear()
        w.ks.setText('开始运行');
    }
})
//关闭悬浮窗
w.gb.on("click", () => {
    engines.stopAll()
})
//刷新
function 刷新() {
    threads.start(function() {
        while (true) {
            区域截图()
        }
    })
}
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
//区域截图


function 区域截图() {

    var img = captureScreen();
    var clip = images.clip(img, 614, 450, 400, 400);

    //images.save(clip, "./废弃图库/2.jpg");

    // 加载OCR插件，需要先下载官方MLKitOCR插件
    let MLKitOCR = $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
    let ocr = new MLKitOCR();

    for (let i = 0; i < 1; i++) {
        let capture = clip

        // 检测截图文字并计算检测时间，首次检测的耗时比较长
        // 检测时间取决于图片大小、内容、文字数量
        let start = Date.now();
        let result = ocr.detect(capture);
        let end = Date.now();
        //判断价钱是否合适
        var 数值 = result.length//计算result位数
        if (数值 != "0") {
            if (result[0].text >= 33) {
                log("合格")
                clip.recycle()
            } else {
                log("不合格")
                clip.recycle()
            }
        } else {
            clip.recycle()
            log("没有新单")
        }
        //延迟
        //toastLog(`第${i + 1}次检测: ${end - start}ms`);
    }

    clip.recycle()
}
