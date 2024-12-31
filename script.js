var oldDiv = document.getElementById('box2');
var iurl = document.getElementById('url');
var bname = document.getElementById('book');
var aname = document.getElementById('author');
var run = function(){
    var imgprint = document.createElement('img');
    var nameprint = document.createElement('p');
    var authorprint = document.createElement('p');
    imgprint.src = iurl.value;
    nameprint.textContent = bname.value;
    authorprint.textContent = aname.value;
    oldDiv.append(imgprint,nameprint,authorprint);

}