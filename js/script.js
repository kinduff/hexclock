var HashCode = function() {
  var serialize = function(object) {
    var type, serializedCode = "";
    type = typeof object;
    serializedCode += "[" + type + ":" + object + "]";
    return serializedCode.replace(/\s/g, "");
  };
  return {
    value: function(object) {
      return MD5(serialize(object));
    }
  };
}();
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
var today = new Date();
var incremento = today.getSeconds();

(function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  tiempo = h + ":" + m + ":" + s;
  var s = tiempo;
  arr = s.split(":");
  rgbarr = [];
  for (var i = 0; i < arr.length; i++) {
    rgbarr.push(hexToRgb(HashCode.value(arr[i]).substring(0, 6)));
  }
  if (today.getSeconds() == 00) {
    incremento = 1;
  }
  hex = rgbToHex(rgbarr[0].r, rgbarr[1].g, incremento);
  $("body").css("background-color", hex);
  $("#time").html(tiempo);
  $("#time").attr('title', tiempo);
  $("#hex").html(hex);
  $("#hex").attr('title', hex);
  incremento = (incremento + 4);
  setTimeout(arguments.callee, 1000);
})();
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// WET
$("#right").on('click', function(e) {
  e.preventDefault();
  $(this).stop().removeClass('active');
  $("#left").addClass('active');
  $(".scroll").animate({
    marginTop: '-180px'
  }, 500);
});
$("#left").on('click', function(e) {
  e.preventDefault();
  $(this).stop().removeClass('active');
  $("#right").addClass('active');
  $(".scroll").animate({
    marginTop: '0px'
  }, 500);
});

// Social buttons shit
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=249794381729144";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
