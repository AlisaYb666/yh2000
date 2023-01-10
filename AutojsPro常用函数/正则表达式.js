1提取数字
var a = {
    "code": "ok",
    "state": "短信到达",
    "msg": "【apple】您的验证码为123411，有效期30分钟"
}
var patt1 = /\d{6}/g;
var result = a.msg.match(patt1);
log(result)

2提取字母
var a = {
    "code": "ok",
    "state": "短信到达",
    "msg": "【apple】您的验证码为123411，有效期30分钟"
}
var patt1 = /[a-zA-Z]{5}/g;
var result = a.msg.match(patt1);
log(result[1])

3提取中文
var a = {
    "code": "ok",
    "state": "短信到达",
    "msg": "【apple】您的验证码为123411，有效期30分钟"
}
var patt1 = /[\u4e00-\u9fa5]{6}/g;
var result = a.msg.match(patt1);
log(result)
