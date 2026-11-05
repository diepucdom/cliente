var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var btnReaparecer = document.getElementById('btnReaparecer');

p1.onclick = function() {
    p1.style.display = 'none';
};
p1.oncontextmenu = function(e) {
    e.preventDefault();
    p1.remove();
};

p2.onclick = function() {
    p2.style.display = 'none';
};
p2.oncontextmenu = function(e) {
    e.preventDefault();
    p2.remove();
};

p3.onclick = function() {
    p3.style.display = 'none';
};
p3.oncontextmenu = function(e) {
    e.preventDefault();
    p3.remove();
};

btnReaparecer.onclick = function() {
    if (p1) p1.style.display = 'block';
    if (p2) p2.style.display = 'block';
    if (p3) p3.style.display = 'block';
};