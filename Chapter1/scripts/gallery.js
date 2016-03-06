/**
 * Created by Dave on 2016/3/4.
 */

function showPic(whichPic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if(document.getElementById("description")){
        var text = whichPic.getAttribute("title");
        var desc = document.getElementById("description");
        desc.firstChild.nodeValue = text;
    }
    return true
}

function prepareGallery(){
    if(!document.getElementsByTagName||!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        links[i].onclick = function () {
            return showPic(this) ? false:true;
        }
    }
}

function addLoadEvent(func){
    var oldOnload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);





