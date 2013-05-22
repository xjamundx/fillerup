function fillerup() {
    var els = document.querySelectorAll('[data-fill]');
    var i = 0;
    var len = els.length;
    for (i = 0; i < len; i++) {
        fillSVG(els[i]);
    }
}

function fillSVG(el) {
    var fill = el.getAttribute('data-fill');
    fill = fill === 'random' ? '#' + Math.floor(Math.random()*16777215).toString(16) : fill;
    var style = window.getComputedStyle(el);
    var uri = style.backgroundImage;
    var svg64 = uri.replace(/^.+base64,/, '').replace(/\"?\)$/, '');
    var xml = window.atob(svg64);

    var m = xml.match(/fill="/);
    var color;
    if(m&&m.length) {
        color = xml.replace(/fill="#[A-Za-z0-9]+"/, 'fill="' + fill + '"');
    } else {
        var parser = new DOMParser();
        var svgXML = parser.parseFromString( xml, 'text/xml' );
        var children = svgXML.childNodes;
        for(var i=0; i<children.length; i++) {
            if(children[i].nodeType===1) {
                children[i].setAttribute('fill',fill);
            }
        }
        color = (new XMLSerializer()).serializeToString(svgXML);
    }
    var color64 = window.btoa(color);
    var colorUri = "url('data:image/svg+xml;base64," + color64 + "')";
    el.style.backgroundImage = colorUri;
}

fillerup();