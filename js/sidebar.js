function openSideBar(){
    document.getElementById("sideBar").style.width = "15%";
    document.getElementById("sideBar").style.boxShadow = "0px 1px 10px 5px #c4c9ce"; //boxShadow用于添加边框阴影
}
function closeSideBar(){
    document.getElementById("sideBar").style.width = "0%";
    document.getElementById("sideBar").style.boxShadow = "0px 0px 0px 0px #c4c9ce";
}