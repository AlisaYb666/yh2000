// 加载OCR插件，需要先下载官方MLKitOCR插件
let MLKitOCR = $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
let ocr = new MLKitOCR();

requestScreenCapture();

for (let i = 0; i < 5; i++) {
    let capture = captureScreen();

    // 检测截图文字并计算检测时间，首次检测的耗时比较长
    // 检测时间取决于图片大小、内容、文字数量
    let start = Date.now();
    let result = ocr.detect(capture);
    let end = Date.now();
    console.log(result);

    toastLog(`第${i + 1}次检测: ${end - start}ms`);
    sleep(3000);
}

ocr.release();
/*插件下载地址
https://wwub.lanzoue.com/iReuy0koio3a
密码:1dh6
*/
来源: Auto.js Pro博客
文章作者: autojs.org
文章链接: https://blog.autojs.org/2022/09/04/mlkit-ocr-plugin/
本文章著作权归网站运营者所有，严禁任何形式的转载。
