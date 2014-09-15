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
    console.log('start?');
    var paper = Raphael("szmhaz");
    console.log("paper:", paper);
    drawSome(paper);
  }

}

function initFrontBg() {
  if (initFrontBgLoaded) { return }
  initFrontBgLoaded = true;
  setTimeout(function(){
    // TODO: wait and preload?
    applyStyle(true);
  }, 33);
}

nextTick(function(){
  addEvent(window, "load", initFrontBg);
  // bullet proof
  initFrontBg();
});

var initFrontBgLoaded = false;

function drawSome(paper) {

  paper.setViewBox(0,120,960,720,true);
  //paper.setViewBox(0,0,w,h,true);
  paper.setSize('100%', '100%');

  var kuszob = "m 649.66263,653.94492 -549.49119,-103.07497 0,-9.43644 42.82693,-6.53292 542.23238,91.46089 0,12.33996 z";
  var kuszob_e1 = "m 100.21713,541.46803 549.13771,99.82229 35.80645,-14.51613";
  var kuszob_e2 = "m 649.70674,653.60027 0,-12.19828";
  var also = "m 144.05245,534.32517 0,-129.41958 379.47902,21.13637 275.0979,-27.96504 0,106.33217 126.49301,11.70629 0,6.17833 -312.81818,91.04895";
  var also_e1 = "m 456.86014,587.39161 0,-148.02797 117.18881,8.37063 131.72727,-25.99301 0,110.58042 -31.27972,14.0979 -102.48552,60.86498";
  var also_e2 = "M 584.43679,609.46816 924.63463,516.23393";
  var also_e3 = "m 456.70804,587.65385 138.84965,-48.77623 49.75175,-13.33217 0,-91.6993";
  var also_e4 = "m 645.09247,525.44086 60.59463,6.68065";
  var also_e5 = "m 522.63226,425.75161 51.13871,2.67742 134.40645,-21.41935 0,14.19032 -134.13871,26.50645 0,-19.54516";
  var also_e6 = "m 441.70323,584.87742 0,-151.01936 -297.87527,-19.30322 0,99.54408 297.49677,45.04086";
  var also_e7 = "m 573.04086,607.5871 134.74409,-53.74624 88.94623,-21.95269 0,-125.66021 -84.0258,9.84086 0,103.70752 83.96625,-22.52241";
  var felso = "m 144.08042,404.14336 0,-104.55944 379.96154,-13.69231 274.15734,17.42657 0,94.6014";
  var felso_e1 = "m 523.32168,425.74888 0,-140.3293";
  var teto_also = "m 143.6957,299.53333 -10.1086,0.51183 -7.29355,-2.6871 -17.40215,-1.91935 -17.658067,-1.02366 0.127957,-6.01397 17.14624,-1.7914 41.84193,-2.30323 383.57911,-18.54752 306.47322,26.78571 0,4.6875 -19.19643,1.78572 -11.16072,2.45535 -4.46428,1.45089 -7.14286,0.33482";
  var teto_bal = "M 101.88811,286.64685 468.37209,142.7907 469.84615,137.84615 101.53846,282.46154 z";
  var teto_kozep = "m 528.61538,265.84615 -60,-123.38461 2.15385,-4.92308 3.69231,2.46154 62.76923,125.23077";
  var teto_jobb = "M 831.07692,291.07692 832,287.69231 707.07692,233.53846 l -19.07692,-4 -209.53846,-90.15384 -7.38462,-1.84616 7.69231,5.23077 210.46154,91.07692 17.23077,3.38462 z";
  var wire_color = '#333';
  //var fill_light = '#AAA';
  var wire_speed = 990;
  drawPath(
    paper,
    kuszob,
    wire_speed,
    { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
    function() {
      drawPath(
        paper,
        kuszob_e1,
        wire_speed/2,
        { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
        function() {

        }
      );
      drawPath(
        paper,
        kuszob_e2,
        wire_speed/2,
        { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
        function() {

        }
      );
      drawPath(
        paper,
        also,
        wire_speed,
        { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
        function() {
          drawPath( paper, also_e1, wire_speed, { fill: 'none', stroke: wire_color, 'fill-opacity': 0 }, function() { } );
          drawPath( paper, also_e2, wire_speed, { fill: 'none', stroke: wire_color, 'fill-opacity': 0 }, function() { } );
          drawPath( paper, also_e3, wire_speed, { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
            function() {
              drawPath( paper, also_e4, wire_speed, { fill: 'none', stroke: wire_color, 'fill-opacity': 0 }, function() { } );
              drawPath( paper, also_e5, wire_speed, { fill: 'none', stroke: wire_color, 'fill-opacity': 0 }, function() { } );
              drawPath( paper, also_e6, wire_speed, { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
                function() {
                  drawPath( paper, also_e7, wire_speed/2, { fill: 'none', stroke: wire_color, 'fill-opacity': 0 }, function() { } );
                } );
            }
          );
          drawPath(
            paper,
            felso_e1,
            wire_speed,
            { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
            function() {

            }
          );
          drawPath(
            paper,
            felso,
            wire_speed,
            { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
            function() {
              drawPath(
                paper,
                teto_also,
                wire_speed,
                { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
                function() {
                  drawPath(
                    paper,
                    teto_bal,
                    wire_speed,
                    { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
                    function() {

                    }
                  );
                  drawPath(
                    paper,
                    teto_kozep,
                    wire_speed,
                    { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
                    function() {

                    }
                  );
                  drawPath(
                    paper,
                    teto_jobb,
                    wire_speed,
                    { fill: 'none', stroke: wire_color, 'fill-opacity': 0 },
                    function() {

                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
}

function drawPath( canvas, pathstr, duration, attr, callback )
{
  var guide_path = canvas.path( pathstr ).attr( { stroke: "none", fill: "none" } );
  var path = canvas.path( guide_path.getSubpath( 0, 1 ) ).attr( attr );
  var total_length = guide_path.getTotalLength( guide_path );
  //var last_point = guide_path.getPointAtLength( 0 );
  var start_time = new Date().getTime();
  var interval_length = 33;
  var result = path;

  var interval_id = setInterval( function()
  {
    var elapsed_time = new Date().getTime() - start_time;
    var this_length = elapsed_time / duration * total_length;
    attr.path = guide_path.getSubpath( 0, this_length );

    path.animate( attr, interval_length );
    if ( elapsed_time >= duration )
    {
      clearInterval( interval_id );
      if ( callback != undefined ) callback();
      guide_path.remove();
    }
  }, interval_length );
  return result;
}