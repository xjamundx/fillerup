(function() {

function fillerup() {
    var els = document.querySelectorAll('[data-fill]');
    var i = 0;
    var len = els.length;
    for (i = 0; i < len; i++) {
        fill(els[i])
    }
}

function fill(el) {
    var fill = el.getAttribute('data-fill');
    fill = fill === 'random' ? '#' + Math.floor(Math.random()*16777215).toString(16) : fill;
    var style = getComputedStyle(el);
    var uri = style.backgroundImage;
    var svg64 = uri.replace(/^.+base64,/, "").replace(/\"?\)$/, "")
    var xml = atob(svg64);
    var color = xml.replace(/fill="#[A-Za-z0-9]+"/, 'fill="' + fill + '"');
    var color64 = btoa(color);
    var colorUri = "url('data:image/svg+xml;base64," + color64 + "')";
    el.style.backgroundImage = colorUri;
}

fillerup();

}());