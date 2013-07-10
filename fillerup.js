;(function() {

var fillRegex = /fill=['"].+?["']/;

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
    fill = fill === 'random' ? '#' + Math.floor(Math.random() * 16777215).toString(16) : fill;
    var fn = el.tagName === 'IMG' ? fillImg : fillBg;
    fn(el, fill);
}

function fillBg(el, fill) {
    var style = window.getComputedStyle(el);
    var uri = style.backgroundImage;
    if (!uri || uri === 'none') return; // in cases where css is not yet loaded
    var svg64 = uri.replace(/^.+base64,/, '').replace(/['"]?\)$/, '');
    var xml = window.atob(svg64);
    el.style.backgroundImage = 'url(' + getUri(xml, fill) + ')';
}

function getUri(xml, fill) {
    var m = xml.match(fillRegex);
    var fn = m && m.length ?  regexReplace : addFill;
    var color = fn(xml, fill);
    return getDataUri(color);
}

function regexReplace(xml, fill) {
    var svg = xml.replace(fillRegex, 'fill="' + fill + '"');
    return svg;
}

function getDataUri(svg) {
    var svg64 = window.btoa(svg);
    return 'data:image/svg+xml;base64,' + svg64;
}

// fill when no fill yet exists
function addFill(xml, fill) {
    var parser = new DOMParser();
    var svgXML = parser.parseFromString(xml, 'text/xml');
    var children = svgXML.childNodes;
    // add fill attributes to all of the children
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType === 1) { // searches for element nodes
            children[i].setAttribute('fill', fill);
        }
    }
    return (new XMLSerializer()).serializeToString(svgXML);
}

function fillImg(el, fill) {
    var src = el.getAttribute('src');
    getSvg(src, function(xml) {
        var uri = getUri(xml, fill);
        el.setAttribute('src', uri);
    });
}

function getSvg(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onload = function() {
        cb(this.responseText);
    };
    xhr.onerror = function() {
        console.warn('Attempt to download ' + url + ' failed.');
    };
    xhr.send();
}

fillerup();

})();