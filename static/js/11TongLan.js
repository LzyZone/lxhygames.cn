

(function () {
    styleOutput();
})();
/*----------------------------------------
微博子菜单面板显示
新浪的：http://weibo.com/5211game         
腾讯的：http://t.qq.com/esports5211  
------------------------------------------*/
var ShowWeiboMenuPanelheadle = null;
function ShowWeiboMenuPanel() {
    //显示领取各种返点的显示框
    var p = $("#liMenuWeibo");
    var offset = p.offset();
    $("#divSubMenuWeibo").css("top", (offset.top + p.height() - 25) + "px").css("left", (offset.left - 20) + "px");

    // alert(offset.left)

    clearTimeout(ShowWeiboMenuPanelheadle);
    $("#divSubMenuWeibo").slideDown("fast");
}
function HideWeiboMenuPanel() {
    ShowWeiboMenuPanelheadle = setTimeout(function () { $("#divSubMenuWeibo").slideUp("fast"); }, 200);
}

//通栏样式
function styleOutput() {
    var tmp = "<script src='http://static.7fgame.com/JScripts/jquery-1.7.1.min.js' type='text/javascript'></script><style>";
    tmp += ".header_11{background:url('http://www.5211game.com/images/bg_nav.jpg') top center; width:100%; height:74px;}";
    tmp += ".nav_11{width:980px; height:74px; margin:0 auto;}";
    tmp += ".logo_11{float:left;}";
    tmp += ".nav_11 ul{float:right;width:690px; height:74px; line-height:74px; display:block; }";
    tmp += ".nav_11 ul li{float:left; display:block; font-size:14px; color:#fff; margin-right:20px;}";
    tmp += ".nav_11 ul li a{color:#fff; font-weight:normal;text-decoration:none }";
    tmp += ".nav_11 ul li a:hover{ color:#ffe400;font-weight:normal;}";
    tmp += ".footer_11{ clear:both; width:100%; margin:0 auto; height:86px;background-color:#000; font-family: '宋体',Simsun; font-size: 12px;}";
    tmp += ".link_11{width:980px; margin:0 auto; color:#555564; line-height:18px; text-align:center; padding-top:20px;}";
    tmp += ".link_11 a{color:#555564;text-decoration:none}";
    
    tmp+=".yy_subNav{ width:110px; padding:1px!important; border:1px solid #ffe400; background:#000!important; font:12px/20px '\5B8B\4F53',Verdana, Geneva, sans-serif;}";
    tmp+=".yy_subNav a{display:block; width:110px; height:24px; padding:4px 0 0 0!important; color:#fff!important; background:#000; text-align:center; text-decoration:none;}";
    tmp += ".yy_subNav a:hover{ background:#505050!important; text-decoration:none;}";
    tmp+="#liMenuWeibo{ background:url('http://www.5211game.com/images/point.gif') no-repeat right 50%; width:40px;}";
    tmp+="#divSubMenuWeibo{display:none;position:absolute; background:#FFF; padding:3px; z-index:1000; }";
    tmp+="#divSubMenuWeibo a{text-align:center; padding:3px 10px; color:#000; text-decoration:none; display:block; text-decoration:none}";
    tmp += "#divSubMenuWeibo a:hover{ background:#dedede;}";
    tmp += "</style>";
    document.write(tmp);
}