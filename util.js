'use strict';

/**
 * https://github.com/supercrabtree/tie-dye/blob/master/hexToRgb.js
 */
function hexToRgb(hex) {
  var match = hex.toString(16).match(/[a-f0-9]{6}/i);
	var r = 0;
	var g = 0;
	var b = 0;

  if (!match) return { r, g, b }

  var integer = parseInt(match[0], 16);

  var r = (integer >> 16) & 0xFF;
  var g = (integer >> 8) & 0xFF;
  var b = integer & 0xFF;

  return { r, g, b }
}

function hexToRgba(hex, alpha) {
	var rgb = hexToRgb(hex)
	return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}

/**
 * https://css-tricks.com/snippets/javascript/lighten-darken-color/
 */
function lighten(col, amt) {
    var usePound = false;

    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

module.exports = {hexToRgb, hexToRgba, lighten}
