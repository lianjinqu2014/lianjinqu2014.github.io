$(document).ready(function() {
  $('#main').fullpage({
    anchors: ['index', 'quality', 'contact'],
    keyboardScrolling: true,
  });

  $('.more-arrow').click(function() {
    $.fn.fullpage.moveSectionDown();
  });

  var url = "http://lianjinqu2014.github.io";
  //var url = "http://www.lianjinqu.com";
  var dataForWeixin={
    appId: "",
    MsgImg: url + "/img/logo.png",
    TLImg: url + "/img/logo.png",
    url: url,
    title: "连进去 - 大学生创业实战",
    desc: "快速融资\n免费找人\n创投活动\nwww.lianjinqu.com",
    callback: function(){}
  };

  var onBridgeReady = function() {
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
      WeixinJSBridge.invoke('sendAppMessage',{
        "appid":dataForWeixin.appId ? dataForWeixin.appId : '',
        "img_url":dataForWeixin.MsgImg,
        "img_width":"120",
        "img_height":"120",
        "link":dataForWeixin.url,
        "desc":dataForWeixin.desc,
        "title":dataForWeixin.title
      }, function(res){(dataForWeixin.callback)();});
    });
    WeixinJSBridge.on('menu:share:timeline', function(argv){
      (dataForWeixin.callback)();
      WeixinJSBridge.invoke('shareTimeline',{
        "img_url":dataForWeixin.TLImg,
        "img_width":"120",
        "img_height":"120",
        "link":dataForWeixin.url,
        "desc":dataForWeixin.desc,
        "title":dataForWeixin.title
      }, function(res){});
    });
    WeixinJSBridge.on('menu:share:weibo', function(argv){
      WeixinJSBridge.invoke('shareWeibo',{
        "content":dataForWeixin.title,
        "url":dataForWeixin.url
      }, function(res){(dataForWeixin.callback)();});
    });
    WeixinJSBridge.on('menu:share:facebook', function(argv){
      (dataForWeixin.callback)();
      WeixinJSBridge.invoke('shareFB',{
        "img_url":dataForWeixin.TLImg,
        "img_width":"120",
        "img_height":"120",
        "link":dataForWeixin.url,
        "desc":dataForWeixin.desc,
        "title":dataForWeixin.title
      }, function(res){});
    });
  };

  if(document.addEventListener){
    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
  }else if(document.attachEvent){
    document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
    document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
  }
});
