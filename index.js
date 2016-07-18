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

const black   = '#2d3e4f';
const red     = '#be3a31';
const green   = '#30ad63';
const yellow  = '#f19b2c';
const blue    = '#3498db';
const magenta = '#AB2884';
const cyan    = '#239f85';
const gray    = '#d9dfdd';

const brightBlack   = ligthen(black, 25)
const brightRed     = ligthen(red, 25)
const brightGreen   = ligthen(green, 25)
const brightYellow  = ligthen(yellow, 25)
const brightBlue    = ligthen(blue, 25)
const brightMagenta = ligthen(magenta, 25)
const brightCyan    = ligthen(cyan, 25)
const brightGray    = ligthen(gray, 25)

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

			// bright
			brightBlack,
			brightRed,
			brightGreen,
			brightYellow,
			brightBlue,
			brightMagenta,
			brightCyan,
			brightGray
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(171, 40, 132, 0.8);
			}
		`
	});
};
