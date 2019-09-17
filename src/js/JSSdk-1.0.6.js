! function () {
    // 小程序环境中 插入 script 标签，加载微信的sdk文件
    var ua = window.navigator.userAgent.toLowerCase();
    if (navigator.userAgent.match(/micromessenger/ig) && ua.match(/miniprogram/ig)){    // 判断是否是小程序环境
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//res.wx.qq.com/open/js/jweixin-1.4.0.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    } else if(navigator.userAgent.match(/alipayclient/ig) && navigator.userAgent.match(/miniprogram/ig)){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://appx/web-view.min.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    var i = [{
            funName: "youDunFaceDetection",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "youDunIDCard",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "alert",
            param: !0,
            reFun: null,
            staticType: 0
        }, {
            funName: "config",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "userLogin",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "cpScanCode",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "scanCode",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "chooseImage",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "chooseVideo",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "getLocation",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "choosePhoneContact",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "pay",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "requireAuth",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "goNative",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "faceDetection",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "faceDetectionImage",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "getIdCardPhoto",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "closeWebview",
            param: !1,
            reFun: !1,
            staticType: 0
        }, {
            funName: "getAuthcode",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "wechatPay",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "smkAccountPay",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "startVoice",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "endVoice",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "faceDetection",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "setTitle",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "loginOut",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "openMap",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "share",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "makePhoneCall",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "alert",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "showRightIcon",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "evaluate",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "confirmAlert",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "showToast",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "showLoading",
            param: !0,
            reFun: !0,
            staticType: 0
        },
        {
            funName: "appShare",
            param: !0,
            reFun: !0,
            staticType: 0
        },{
            funName: "hideLoading",
            param: !1,
            reFun: !1,
            staticType: 0
        }, {
            funName: "showActionSheet",
            param: !0,
            reFun: !0,
            staticType: 1
        }, {
            funName: "setTitleBarText",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "setTitleBarLeftButton",
            param: !0,
            reFun: !0,
            staticType: 1
        }, {
            funName: "setTitleBarRightButton",
            param: !0,
            reFun: !0,
            staticType: 1
        }, {
            funName: "downloadfile",
            param: !0,
            reFun: !0,
            staticType: 0
        }, {
            funName: "collection",
            param: !0,
            reFun: !0,
            staticType: 0
    }];
    window.yl = {
        loaded: 0,
        readyType: 0,
        readyList: {},
        getSystemInfo: function () {
            var u = navigator.userAgent.toLowerCase(),
            a = {
                h5ContainerVersion: void 0,
                appVersion: void 0,
                systemId: "hzbs",
                appPlaform: void 0
            };
            function getQueryVariable(variable) {
                var href = location.href
                var va = href.split('?')[1]
                if (va) {
                    var test = va.split('&')
                    for (var i = 0; i < test.length; i++) {
                        var pair = test[i].split("=");
                        if (pair[0] == variable) {
                            return pair[1];
                        }
                    }
                    return (false);
                } else {
                    return false
                }
            }
            function forEachfun(v,i){
                var c = v.split(":");
                if (Boolean(c[0].match(/ylh5containerversion/ig))) {
                    a.h5ContainerVersion = c[1].replace("&yl", "");
                } else if (Boolean(c[0].match(/ylappversion/ig))) {
                    a.appVersion = c[1].replace("&yl", "");
                }
            }
            console.log(888, u)
            if (Boolean(u.match(/android/ig))) {
                if (Boolean(navigator.userAgent.match(/ylsystemid:hzbs&yl/ig))) { // 安卓app
                    a.appPlaform = "android";
                    var t = navigator.userAgent.split(";");
                    t.forEach(forEachfun);
                } else {
                    if (getQueryVariable('h5ContainerVersion') || getQueryVariable('appVersion') || getQueryVariable('appPlaform')) {
                        a.h5ContainerVersion = getQueryVariable('h5ContainerVersion') || '';
                        a.appVersion = getQueryVariable('appVersion') || '';
                        a.appPlaform = getQueryVariable('appPlaform') || '';
                    }
                }
            } else if (Boolean(navigator.userAgent.match(/iphone|ipod|ipad/ig))) {
                console.log("ios")
                if (window.yluareplace && window.yluareplace.appVersion) { // 在杭州办事app中
                    console.log("ios", "1")
                    var e = window.yluareplace;
                    if (e) {
                        if ("string" == typeof e)
                            e = JSON.parse(e);
                        a.appVersion = e.appVersion;
                        a.h5ContainerVersion = e.h5ContainerVersion || e.version;
                        a.systemId = e.systemId;
                        a.appPlaform = e.appPlaform || e.appPlatform;
                    } else console.warn("获取容器版本错误");
                } else if (Boolean(navigator.userAgent.match(/ylsystemid:hzbs&yl/ig))) {
                    console.log("ios", "2.1")
                    a.appPlaform = "ios";
                    var t = navigator.userAgent.split(";");
                    t.forEach(forEachfun);
                } else {
                    console.log("ios", "3.1")

                    if (getQueryVariable('h5ContainerVersion') || getQueryVariable('appVersion') || getQueryVariable('appPlaform')) {
                        a.h5ContainerVersion = getQueryVariable('h5ContainerVersion') || '';
                        a.appVersion = getQueryVariable('appVersion') || '';
                        a.appPlaform = getQueryVariable('appPlaform') || '';
                    }
                }
            } else { // 浏览器
                a.systemId = 'hzbs'
            }
            return a;
        },
        hasReady: function () {
            console.log("event ready!");
            var e = window.yl.readyList;
            for (var a in e) window.jsbridge.add(e[a]), delete window.yl.readyList[a]
        },
        readydo: function () { },
        ready: function (e) {
            this.readydo = e
        },
        call: function (e, a, n) {
            console.log("方法构造");
            var t = function (e) {
                for (var a = 0; a < i.length; a++) {
                    var n = i[a];
                    if (e === n.funName) return n
                }
                return !1
            }(e);
            if (!t) return console.warn("非法调用"), !1;
            if (t.param && (t.param = a), t.reFun) {
                if (!n) return console.log("需要传入回调"), console.warn("需要传入回调");
                t.reFun = n
            }
            if(e === "evaluate"){
                if (window.yluareplace && window.yluareplace.appVersion) { // 在杭州办事app中
                    if (window.jsbridge)
                        window.jsbridge.add(t);
                    else {
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                } else {
                    console.log(e,a,n);
                    location.href = 'https://test.iconntech.com/united_h5/testEval.html?caseId=' + a.evaluateRequest.caseId
                }
            } else if (e === "getAuthcode") { // 针对容器的getAuthcode方法，进行改造
                var reg = /auth[cC]ode=/i;
                var url = location.href;
                if(window.sessionStorage.getItem("sdk_token") || reg.test(url)) {
                    if(window.sessionStorage.getItem("sdk_token")){
                        console.log("url-storage");
                        if (typeof n.onSuccess === "function") {
                            n.onSuccess({
                                "errorCode": "0",
                                "param": {
                                    "authCode": window.sessionStorage.getItem("sdk_token")
                                }
                            });
                        } else {
                            console.log('回调中没有onSuccess函数');
                        }
                    } else if (reg.test(url)) { // url上有authcode参数
                        var urlSerch = location.search;
                        var urlHash = location.hash; // 获取url 上的authcode参数值,因为不知道参数是在#前还是#号后。所以要对location.search和location.hash分开判断
                        var authcodeStr = reg.test(urlSerch) ? urlSerch.substr(1).match(/(^|&)auth[cC]ode=([^&]*)(&|$)/)[2] : urlHash.split("?")[1].match(/(^|&)auth[cC]ode=([^&]*)(&|$)/)[2];
                        if (typeof n.onSuccess === "function") {
                            window.sessionStorage.setItem("sdk_token",decodeURIComponent(authcodeStr));
                            n.onSuccess({
                                "errorCode": "0",
                                "param": {
                                    "authCode": decodeURIComponent(authcodeStr)
                                }
                            });
                        } else {
                            console.log('回调中没有onSuccess函数')
                        }
                    }
                } else {
                    if (window.jsbridge)
                        window.jsbridge.add(t);
                    else {
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                }
            } else if (e === "closeWebview") {
                if (window.yluareplace && window.yluareplace.appVersion) { // 在杭州办事app中
                    if (window.jsbridge)
                        window.jsbridge.add(t);
                    else {
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                } else {
                    var ua = window.navigator.userAgent.toLowerCase();
                    if (ua.match(/micromessenger/ig) && ua.match(/miniprogram/ig)) {
                        wx.miniProgram.navigateBack({delta: (window.history.length - 1)});
                    } else if(ua.match(/alipayclient/ig) && ua.match(/miniprogram/ig)){
                        my.navigateBack({delta: (window.history.length - 1)});
                    } else {
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                }
            } else if (e === "alert") { // 针对容器的alert方法，进行改造
                if (window.yluareplace && window.yluareplace.appVersion) { // 在杭州办事app中
                    if (window.jsbridge)
                        window.jsbridge.add(t);
                    else {
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                } else {
                    alert('请直接使用alert')
                    if (!window.jsbridge) { // 不在 杭州办事app中，市民卡app中，可能也会有这个window.jsbridge，所以这里要判断
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                }
            } else if (e === "showLoading") { // 针对容器的showLoading方法，进行改造
                console.log('showLoading')
                if (window.yluareplace && window.yluareplace.appVersion) { // 在杭州办事app中
                    if (window.jsbridge)
                        window.jsbridge.add(t);
                    else {
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                } else {
                    var html= '<div class="wrapper loading" style="width:100%;height:100%;margin-top:50%"><div style="width:250px;height:250px;margin:0 auto;"><img src="loading2.gif" style="width:100%;height:100%;"></div></div>'
                    var div = document.createElement('div')
                    div.innerHTML = html
                    document.body.appendChild(div);
                    if (!window.jsbridge) { // 不在 杭州办事app中，市民卡app中，可能也会有这个window.jsbridge，所以这里要判断
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                }
            } else if (e === "hideLoading") { // 针对容器的hideLoading方法，进行改造
                if (window.yluareplace && window.yluareplace.appVersion) { // 在杭州办事app中
                    if (window.jsbridge)
                        window.jsbridge.add(t);
                    else {
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                } else {
                    console.log('hideLoading')
                    document.querySelector('.loading').style.display = 'none'
                    if (!window.jsbridge) { // 不在 杭州办事app中，市民卡app中，可能也会有这个window.jsbridge，所以这里要判断
                        var r = "ListItem" + (new Date()).getTime();
                        this.readyList[r] = t
                    }
                }
            } else {
                if (window.jsbridge)
                    window.jsbridge.add(t);
                else {
                    var r = "ListItem" + (new Date()).getTime();
                    this.readyList[r] = t
                }
            }



        }
    }
}();
