"ui";
ui.statusBarColor("#000000");
$ui.layout(
    <drawer>
    <img src="file://./img/bg.jpg"/>
        <vertical gravity="center">
            <card
            w="auto"
            gravity="centre"
            cardCornerRadius="6dp"
            cardBackgroundColor="#ffffff"
            foreground="?selectableItemBackground"
            margin="6">
            <vertical padding="5 10" h="auto">
                <Switch
                w="auto"
                id="ks"
                textSize="15sp"
                text="开始运行"
                textColor="#FF8069"/>
            </vertical>
        </card>
    </vertical>
    </drawer>
)
ui.ks.on("click",() => {
    if (ui.ks.getText() == '开始运行') {
        engines.execScriptFile("./悬浮窗.js")
        ui.ks.setText('停止运行');
    } else {
        //停止线程
        engines.stopAll()
        ui.ks.setText('开始运行');
    }
})
