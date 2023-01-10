"ui";
ui.statusBarColor("#fab1ce")
远程公告()
function 远程公告(){
var a = http.get("https://api.vvhan.com/api/qqsc?key=https://sharechain.qq.com/6672e558e0a9e51e0b460a73c7d69468")
var b = a.body.json()
dialogs.build({
    //对话框标题
    title: b.title,
    titleColor:"#fab1ce",
    content:b.text,
    contentColor:"#84B1ED",
    //取消键内容
    negative: "我知道了",
    negativeColor:"#f199bc",
}).on("neutral", ()=>{}).show();
}
//以上接口来自于api.vvhan.com
