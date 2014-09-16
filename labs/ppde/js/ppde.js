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
  var paper = Snap('#szmhaz_final');

  /* masks */
  var maskA1p = "m 80,659 850,0 0,2 -850,0 z";
  var maskA2p = "m 80,609 850,0 0,2 -850,0 z";
  var maskA3p = "m 80,433 850,0 0,2 -850,0 z";
  var maskA4p = "m 80,305 850,0 0,2 -850,0 z";

  var maskA1 = paper.path(maskA1p).attr({fill: "#FFF", fillOpacity: 0, stroke: "none", strokeWidth: 0 });
  var maskA2 = paper.path(maskA2p).attr({fill: "#FFF", fillOpacity: 0, stroke: "none", strokeWidth: 0 });
  var maskA3 = paper.path(maskA3p).attr({fill: "#FFF", fillOpacity: 0, stroke: "none", strokeWidth: 0 });
  var maskA4 = paper.path(maskA4p).attr({fill: "#FFF", fillOpacity: 0, stroke: "none", strokeWidth: 0 });

  var maskB1p = "m 80,498 850,0 0,163 -850,0 z";
  var maskB2p = "m 80,391 850,0 0,220 -850,0 z";
  var maskB3p = "m 80,262 850,0 0,173 -850,0 z";
  var maskB4p = "m 80,133 850,0 0,174 -850,0 z";

  var mask1p = "m 799.39182,500.09996 0.10638,18.53593 7.10482,2.85759 0.10343,7.49712 -8.44866,-4.69716 0.0791,7.73722 -89.6691,21.47257 -135.2258,53.66774 40.56774,7.60645 3.80322,0 309.32904,-88.31936 0.42258,-13.94516 z m -660.14021,32.62023 -41.53118,6.4129 0,13.13119 551.50968,106.88172 40.0043,-20.76559 -0.30538,-13.13119 -549.37204,-91.30752 z";
  var mask2p = "m 142.13742,404.32948 381.05109,21.43288 276.94269,-28.35229 -0.72225,113.81188 0.10461,7.2022 7.03128,3.09809 0.28566,7.56634 -8.67596,-4.92401 0.22331,7.85409 -89.93601,21.79058 -132.80626,52.73475 -432.69764,-72.18507 z";
  var mask3p = "m 142.5,302.90845 -0.33817,101.4351 431.87365,24.54892 135.50298,-22.20016 90.26033,-8.88748 L 800,325 l 8.5,-8 0.20121,-12.58551 32.40845,-6.71328 L 534.5,275.5 88.683099,294.5 z";
  var mask4p = "m 90.282517,294.31631 0.05953,-7.71671 9.822223,-0.99474 0.0369,-4.23665 369.9519,-145.61545 3.6876,-0.0619 214.9698,92.20832 15.03098,1.96056 11.10983,4.57464 98.68159,43.13235 c 7.03967,2.97757 14.10217,5.87029 20.92864,9.30695 l -0.016,3.76345 7.11788,0.0548 0.0708,7.03106 -306.41424,-22.06203 z";

  var mask1 = paper.path(mask1p).attr({ mask: maskA1, fill: "#FFF", fillOpacity: 1, stroke: "none", strokeWidth: 0 });
  var mask2 = paper.path(mask2p).attr({ mask: maskA2, fill: "#FFF", fillOpacity: 1, stroke: "none", strokeWidth: 0 });
  var mask3 = paper.path(mask3p).attr({ mask: maskA3, fill: "#FFF", fillOpacity: 1, stroke: "none", strokeWidth: 0 });
  var mask4 = paper.path(mask4p).attr({ mask: maskA4, fill: "#FFF", fillOpacity: 1, stroke: "none", strokeWidth: 0 });

  var masks = paper.group(mask1, mask2, mask3, mask4);

  //var mask1 = paper.path(mask1p);
  /*

  */
  //paper.append(mask1);
  //mask1d.animate({d:mask1p},12000,mina.easein);

  var ima = paper.image("img/szmhaz-v1b1.png", 0, 0, 960, 720);
  ima.attr({
    opacity: 0,
    mask: masks
  });

  var svgContainer = document.getElementById("animation");
  var nS="http://www.w3.org/2000/svg";
  var animation = new TimelineMax();
  animation.pause();
  var svgPaths = svgContainer.getElementsByTagNameNS(nS,"path");
  for(var x = 0; x<svgPaths.length;x++){
    var path = svgPaths[x];
    var pathDimensions = path.getTotalLength();
    path.style.strokeDasharray = (pathDimensions)+" "+(pathDimensions);
    path.style.strokeDashoffset = pathDimensions;
    path.style.stroke = "#17152D";
    //var tlt = 0.2+(pathDimensions/1200);
    var tlt = 0.25+(pathDimensions/2400);
    //console.log('tlt:', tlt , pathDimensions);
    animation.add(
      TweenMax.to(
        path.style,tlt,{strokeDashoffset:0
          /*
          ,onUpdate:function(){
            var n = document.createTextNode(' ');
            document.body.appendChild(n);
            document.body.removeChild(n);
          }
          */
        }
      ),(x>0)?("-="+tlt/2):"");
  }

  /*

  var rect = paper.rect(50, 250, 200, 100);
  rect.attr('fill', '#f00');

  animation.add(
    TweenMax.to(rect, 3, {
        raphael: {
          fill: '#00f',
          x: 100,
          y: 200,
          width: 100,
          height: 50
        },
        ease: Linear.easeOut
      }
    ),""
  );

  */

  //console.log('maskA1',maskA1);

  animation.add(
    TweenMax.to(maskA1.node.style,1,
      {
        fillOpacity:1,
        ease: Linear.easeIn,
        onStart: function() {
          maskA1.animate({d:maskB1p},1000,mina.easein); //mina.easein
        }
      }
    ),"-=1");

  animation.add(
    TweenMax.to(maskA2.node.style,1,
      {
        fillOpacity:1,
        ease: Linear.easeIn,
        onStart: function() {
          maskA2.animate({d:maskB2p},1000,mina.easein); //mina.easein
        }
      }
    ),"-=1");

  animation.add(
    TweenMax.to(maskA3.node.style,1,
      {
        fillOpacity:1,
        ease: Linear.easeIn,
        onStart: function() {
          maskA3.animate({d:maskB3p},1000,mina.easein); //mina.easein
        }
      }
    ),"-=1");

  animation.add(
    TweenMax.to(maskA4.node.style,1,
      {
        fillOpacity:1,
        ease: Linear.easeIn,
        onStart: function() {
          maskA4.animate({d:maskB4p},1000,mina.easein); //mina.easein
        }
      }
    ),"-=1");

  animation.add(
    TweenMax.to(ima.node.style,0.1,
      {
        opacity:1,
        ease: Linear.easeIn
      }
    ),"-=1.1");

  animation.play();

  /*
  maskA1.animate({d:maskB1p},1000,mina.easein, function() {
    maskA2.animate({d:maskB2p},1000,mina.easein, function() {
      maskA3.animate({d:maskB3p},1000,mina.easein, function() {
        maskA4.animate({d:maskB4p},1000,mina.easein);
      });
    });
  });
  */
}