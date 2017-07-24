function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
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

  var insults = [
  	"moron",
  	"idiot",
  	"dummy",
  	"knucklehead",
  	"meatball",
  	"nincompoop",
  	"cotton headed ninny muggins"
  ];

  ;(function($){
  	$(document).ready(function() {

  		$("#color-check").submit(function( event ) {
  			event.preventDefault();
  			
  			var color = "#"+$("#color").val();
  			console.log(color);

  			var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  			if (isOk) {
  				var rgb = hexToRgb(color);
  				var text = "¯\_(ツ)_/¯";
  				if (rgb) {
  					var insult = insults[Math.floor(Math.random() * insults.length)];
  					var bgClass = "white";
  					if (rgb.r > rgb.g && rgb.r > rgb.b) {
  						text = "this definitely isn't green or blue...";
  					}
  					if (rgb.g > rgb.b) {
  						text = "it's <span class='text' style='color:white;'>green</span>, you " + insult + ".";
  						bgClass = "green";
  					}
  					if (rgb.g < rgb.b) {
  						text = "it's <span class='text' style='color:white;'>blue</span>, you " + insult + ".";
  						bgClass = "blue";
  					}
  					$(this).html("<h2 class='answer'>"+text+"</h2>");
  					$("body").css('background-color', color).addClass(bgClass);
  				}
  			}
  			console.log(isOk);
  		});

  	});
  })(jQuery);