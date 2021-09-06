var 版本号 = "1.0.0";
var 作者 = "Scwizard";

加载();

function 加载(){
    mc.regPlayerCmd("/transfer", "玩家跨服", function (player, args) {
    
        var 地址 = args[0];
        var 端口 = args[1];
        var 处理端口 = parseInt(端口);
        player.transServer(地址,处理端口);
   
    })
log("[跨服] 启动成功 ");
log("[跨服] BY : " + 作者);
log("[跨服] 版本 : " + 版本号);
}
//中文编写，不是翻译
