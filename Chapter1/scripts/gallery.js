/**
 * Created by Dave on 2016/3/4.
 */

function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
}

function countBodyChildren(){
    var text = whichPic.getAttribute("title");
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

window.onload = countBodyChildren;


