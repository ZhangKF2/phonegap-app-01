
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
        lab.innerText = "欢迎，您..." + y + '-' + m + '-' + d;

        //获取设置信息
        document.getElementById("labDevName").innerText = `设备名称：${device.model}`;
        document.getElementById("labDevSystem").innerText = `操作系统：${device.platform}`;
        document.getElementById("labDevId").innerText = `设备编号：${device.uuid}`;
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
