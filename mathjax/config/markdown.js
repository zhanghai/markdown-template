MathJax.Hub.Config({
  config: [],
    styleSheets: [],
  styles: {},
  jax: ["input/TeX", "output/HTML-CSS"],
  extensions: ["tex2jax.js"],
  preJax: null,
  postJax: null,
  preRemoveClass: "MathJax_Preview",
  showProcessingMessages: true,
  messageStyle: "normal",
  displayAlign: "center",
  displayIndent: "0",
  delayStartupUntil: "none",
  skipStartupTypeset: false,
  elements: [],
  positionToHash: true,
  showMathMenu: true,
  showMathMenuMSIE: true,
  menuSettings: {
    zoom: "None",
    CTRL: false,
    ALT: false,
    CMD: false,
    Shift: false,
    zscale: "200%",
    font: "Auto",
    context: "MathJax",
    mpContext: false,
    mpMouse: false,
    texHints: true,
    semantics: false
  },
  errorSettings: {
    message: ["[",["MathProcessingError","Math Processing Error"],"]"],
    style: {color: "#CC0000", "font-style":"italic"}  // style for message
  },
  tex2jax: {
    inlineMath: [
//    ['$','$'],      // uncomment this for standard TeX math delimiters
      ['\\(','\\)']
    ],
    displayMath: [
      ['$$','$$'],
      ['\\[','\\]']
    ],
    balanceBraces: true,
    skipTags: ["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],
    ignoreClass: "tex2jax_ignore",
    processClass: "tex2jax_process",
    processEscapes: false,
    processEnvironments: true,
    processRefs: true,
    preview: "TeX"
  },
  TeX: {
    TagSide: "right",
    TagIndent: "0.8em",
    MultLineWidth: "85%",
    Macros: {},
    equationNumbers: {
      autoNumber: "none",
      useLabelIds: true
    },
    noErrors: {
      disabled: false,
      multiLine: true,
      inlineDelimiters: ["",""],
      style: {
        "font-size":   "90%",
        "text-align":  "left",
        "color":       "black",
        "padding":     "1px 3px",
        "border":      "1px solid"
      }
    },
    noUndefined: {
      disabled: false,
      attributes: {
        mathcolor: "red"
      }
    },
    unicode: {
      fonts: "STIXGeneral,'Arial Unicode MS'"
    }
  },
  "HTML-CSS": {
    scale: 100,
    minScaleAdjust: 50,
    availableFonts: ["STIX","TeX"],
    preferredFont: "TeX",
    webFont: "TeX",
    imageFont: "TeX",
    undefinedFamily: "STIXGeneral,'Arial Unicode MS',serif",
    mtextFontInherit: false,
    EqnChunk: 50,
    EqnChunkFactor: 1.5,
    EqnChunkDelay: 100,
    matchFontHeight: true,
    noReflows: true,
    linebreaks: {
      automatic: false,
      width: "container"
    },
    styles: {},
    tooltip: {
      delayPost: 600,
      delayClear: 600,
      offsetX: 10, offsetY: 5
    }
  },
  MathMenu: {
    delay: 150,
    helpURL: "http://www.mathjax.org/help-v2/user/",
    showRenderer: true,
    showMathPlayer: true,
    showFontMenu: false,
    showContext:  false,
    showDiscoverable: false,
    semanticsAnnotations: {
      "TeX": ["TeX", "LaTeX", "application/x-tex"],
      "StarMath": ["StarMath 5.0"],
      "Maple": ["Maple"],
      "ContentMathML": ["MathML-Content", "application/mathml-content+xml"],
      "OpenMath": ["OpenMath"]
    },
    windowSettings: {
      status: "no", toolbar: "no", locationbar: "no", menubar: "no",
      directories: "no", personalbar: "no", resizable: "yes", scrollbars: "yes",
      width: 100, height: 50
    },
    styles: {}
  },
  MathEvents: {
    hover: 500
  },
});
MathJax.Ajax.loadComplete("[MathJax]/config/markdown.js");
