console.log('Loaded!');

var a = document.getElementById('con');
a.innerHTML = "Back to HIII!!!";

var b=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    b.style.marginLeft=marginLeft+'px';
}

b.onclick = function() {
  var c = setInterval(moveRight,100);
};