'use strict';

function ligthen(col, amt) {
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

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

const foregroundColor = '#dadfdd';
const cursorColor = foregroundColor;

const backgroundColor = '#000';
const borderColor = backgroundColor;
const activeColor = '128, 203, 196'

const black   = '#2d3e4f';
const red     = '#be3a31';
const green   = '#30ad63';
const yellow  = '#f19b2c';
const blue    = '#3498db';
const magenta = '#BB4698';
const cyan    = '#239f85';
const gray    = '#d9dfdd';

const lightBlack   = ligthen(black, 25)
const lightRed     = ligthen(red, 25)
const lightGreen   = ligthen(green, 25)
const lightYellow  = ligthen(yellow, 25)
const lightBlue    = ligthen(blue, 25)
const lightMagenta = ligthen(magenta, 25)
const lightCyan    = ligthen(cyan, 25)
const lightGray    = ligthen(gray, 25)

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		colors: [
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// light
			lightBlack,
			lightRed,
			lightGreen,
			lightYellow,
			lightBlue,
			lightMagenta,
			lightCyan,
			lightGray
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(${activeColor}, 0.8);
			}
		`,
		termCSS: `
		  x-screen a {
		    color: rgba(${activeColor}, 1);
		  }

			::selection {
			  background: rgba(${activeColor}, 1);
			}
		`
	});
};
