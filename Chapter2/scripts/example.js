/**
 * Created by Dave on 2016/3/8.
 */


window.onload = function(){
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello world");
    para.appendChild(txt);
    //var info = "nodeName: ";
    //info += para.nodeName;
    //info += " nodeType: ";
    //info += para.nodeType;
    //alert(info)
}



