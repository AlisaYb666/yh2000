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
        <button id="ks"text="开始运行"w="*"style="Widget.AppCompat.Button.Colored"/>
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
//输出颜色
w.console.setColor("V", "#1DCA59");
w.console.setConsole(runtime.console);

//运行日记--不加时间
// function log(str) {
//     console.verbose(str)
// }
// w.console.setColor("V", "#000000");
// w.console.setConsole(runtime.console);
function 开始刷新(){
threads.start(function() {
    //在线程中每隔1秒打印"抢单成功"
    while (true) {
        log("抢单成功");
        sleep(1000);
    }
});
}
//点击变字
w.ks.on("click",() => {
    if (w.ks.getText() == '开始运行') {
        开始刷新()
        w.ks.setText('停止运行');
    } else {
        threads.shutDownAll()
        w.ks.setText('开始运行');
    }
})
