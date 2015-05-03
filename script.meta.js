function loadScript(src, callback) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    head.appendChild(script);
}

loadScript('$MATHJAX$?config=markdown');
loadScript('$PANGU$', function() {
    window.addEventListener('load', pangu.page_spacing);
});
loadScript('$HIGHLIGHT$', function() {
    hljs.configure({classPrefix: ''});
    hljs.initHighlightingOnLoad();
})
