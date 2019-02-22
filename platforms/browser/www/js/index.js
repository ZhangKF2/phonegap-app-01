
Date.prototype.format = function()
{
    var dt = this;
    var y = dt.getFullYear();
    var m = dt.getMonth();
    var d = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    return y + '-' + m + '-' + d + " " + h + ":" + m + ":" + s;
}

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        //音量增加-按钮
        document.addEventListener('volumeupbutton',this.onVolumeUp,false);

        //音量减小-按钮
        document.addEventListener('volumedownbutton',this.onVolumeDown,false);

        //拔打电话
        document.addEventListener('startcallbutton',this.onStartCall,false);
    },

    onStartCall:function(){
        var lab = document.getElementById("labHello");
        lab.innerText = "拔打电话";
    },

    onVolumeUp:function(e)
    {
        var lab = document.getElementById("labHello");
        lab.innerText = "音量增加";
    },

    onVolumeDown:function(){
        var lab = document.getElementById("labHello");
        lab.innerText = "音量增小";
    },

    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        var lab = document.getElementById("labHello");
        var dt = new Date();
        var y = dt.getFullYear();
        var m = dt.getMonth();
        var d = dt.getDate();
        lab.innerText = "当前时间：" + new Date().format();

        //获取设置信息
        document.getElementById("labDevName").innerText = `设备名称：${device.model}`;
        document.getElementById("labDevSystem").innerText = `操作系统：${device.platform}`;
        document.getElementById("labDevId").innerText = `设备编号：${device.uuid}`;

        document.getElementById("divNavigator").innerHTML = `代码名:${navigator.appCodeName} <br /> 
        名称：${navigator.appName} <br />
        操作系统:${navigator.platform} <br />
        `;

        if (localStorage.loginTime)
        {
            document.getElementById("labLastLogin").innerText = `上次登陆时间：${localStorage.loginTime}`;
        }
        else
        {
            document.getElementById("labLastLogin").innerText = "您是第一次登陆";
        }

        localStorage.loginTime = new Date().format();

        window.setInterval(function(){
            var div = document.getElementById("divOnLineSatus");
            div.innerHTML = `在线状态:${navigator.onLine}`;
            if (navigator.onLine) div.style.color = "green";
            else div.style.color = "red";
        },1000)

        var btnRefresh = document.getElementById("btnRefresh");
        window.addEventListener("click",function(){
            window.location.reload();
        },false);
    },

    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
