/**
 * Created by Dave on 2016/3/8.
 */


//window.onload = function(){
//    var para = document.createElement("p");
//    var testdiv = document.getElementById("testdiv");
//    testdiv.appendChild(para);
//    var txt = document.createTextNode("Hello world");
//    para.appendChild(txt);
//    //var info = "nodeName: ";
//    //info += para.nodeName;
//    //info += " nodeType: ";
//    //info += para.nodeType;
//    //alert(info)
//}

//创建所有节点
window.onload = function(){
    var para = document.createElement("p");//create a element node
    var txt1 = document.createTextNode("This is ");//create a text node
    var emphasis = document.createElement("em");//create a element node
    var txt2 = document.createTextNode("my ");
    var txt3 = document.createTextNode("content.");

    para.appendChild(txt1);//add txt1 to the para as a child node
    emphasis.appendChild(txt2);//add txt2 to the emphasis as a child node
    para.appendChild(emphasis);
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");//get the element by id "testdiv"
    testdiv.appendChild(para);
}

