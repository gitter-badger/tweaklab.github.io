/**
 * Indicates we have a window
 *
 * @type {Function}
 */

var toString;
toString = Object.prototype.toString;

var inBrowser =
  typeof window !== 'undefined' &&
  toString.call(window) !== '[object Object]';

/**
 * Defer a task to the start of the next event loop
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var defer = inBrowser
  ? (window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  setTimeout)
  : setTimeout;

/**
 * usage: nextTick( callback )
 * @param cb
 * @param ctx
 */

var nextTick = function (cb, ctx) {
  if (ctx) {
    defer(function () { cb.call(ctx) }, 0)
  } else {
    defer(cb, 0)
  }
};

var addEvent = function(elem, type, eventHandle) {
  if (typeof(elem) === 'undefined' || elem === null ) {
    throw new Error('You must give me something to listen to.');
  }
  if ( elem.addEventListener ) {
    elem.addEventListener( type, eventHandle, false );
  } else if ( elem.attachEvent ) {
    elem.attachEvent( "on" + type, eventHandle );
  } else {
    elem["on"+type]=eventHandle;
  }
};

function applyStyle(init) {
  var initialize = init || false;

  if (initialize === true) {
    drawSome();
  }

}

function initFrontBg() {
  if (initFrontBgLoaded) { return }
  initFrontBgLoaded = true;
  setTimeout(function(){
    // TODO: wait and preload?
    applyStyle(true);
  }, 500);
}

nextTick(function(){
  addEvent(window, "load", initFrontBg);
  // bullet proof
  initFrontBg();
});

var initFrontBgLoaded = false;

function drawSome() {

  var svgContainer = document.getElementById("animation");
  var nS="http://www.w3.org/2000/svg";
  var animation = new TimelineMax();
  animation.pause();
  var svgPaths = svgContainer.getElementsByTagNameNS(nS,"path");
  for(var x = 0; x<svgPaths.length;x++){
    var path = svgPaths[x];
    var pathDimensions = path.getTotalLength();
    var strokeWidth = path.getAttribute("stroke-width");
    path.style.strokeDasharray = (pathDimensions)+" "+(pathDimensions);
    path.style.strokeDashoffset = (/Firefox/i.test(navigator.userAgent))? pathDimensions/strokeWidth : pathDimensions;
    animation.add(TweenMax.to(path.style,1,{strokeDashoffset:0,onUpdate:function(){
      var n = document.createTextNode(' ');
      document.body.appendChild(n);
      document.body.removeChild(n);
    }}),(x>0)?"-=0.4":"");
  }
  animation.play();

}
