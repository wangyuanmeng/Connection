/**
 * Created by wangyuanmeng on 2018-10-26.
 */
var connection=document.getElementById("connection");
var context=connection.getContext("2d");
context.strokeStyle="#BFBFBF";
var me=true;
var connectionBoard=[];
for (var i=0;i<=99;i++){
    connectionBoard[i]=[];
    for(var j=0;j<=99;j++){
        connectionBoard[i][j]=0;
    }
}
var drawBoard=function () {
    for(var i=0;i<=99;i++){
        context.moveTo(0,6*i);
        context.lineTo(600,6*i);
        context.stroke();
        context.moveTo(6*i,0);
        context.lineTo(6*i,600);
        context.stroke();
    }
};
drawBoard();
var oneStep=function (i,j,me) {
    if(connectionBoard[i][j]==0){
        if(me){
            context.fillStyle="#f20f0f";
            connectionBoard[i][j]=1;
        }
        else{
            context.fillStyle="#0d38f2";
            connectionBoard[i][j]=2;
        }
        context.fillRect(6*i,6*j,6,6);
    }
};
connection.onclick=function (e) {
    var x=e.offsetX;
    var y=e.offsetY;
    var i= Math.floor(x/6);
    var j= Math.floor(y/6);
    oneStep(i,j,me);
    me=!me
};
