'use strict';

var util = require('./util')
var hexToRgb = util.hexToRgb
var hexToRgba = util.hexToRgba
var lighten = util.lighten

const black   = '#2d3e4f';
const red     = '#be3a31';
const green   = '#30ad63';
const yellow  = '#f19b2c';
const blue    = '#3498db';
const magenta = '#BB4698';
const cyan    = '#239f85';
const gray    = '#d9dfdd';

const lightBlack   = lighten(black, 25)
const lightRed     = lighten(red, 25)
const lightGreen   = lighten(green, 25)
const lightYellow  = lighten(yellow, 25)
const lightBlue    = lighten(blue, 25)
const lightMagenta = lighten(magenta, 25)
const lightCyan    = lighten(cyan, 25)
const lightGray    = lighten(gray, 25)

const backgroundColor = '#000';
const borderColor = backgroundColor;
const activeColor = '#80CBC4'

const foregroundColor = '#dadfdd';
const cursorColor = lighten(magenta, 12.5);

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
				border-color: ${hexToRgba(activeColor, 0.8)};
			}
		`,
		termCSS: `
		  x-screen a {
		    color: ${activeColor}
		  }

			::selection {
			  background: ${activeColor}
			}
		`
	});
};
