'use strict'

const {lighten} = require('./util')

/**
 * Colors
 */

const black = '#2d3e4f'
const red = '#be3a31'
const green = '#30ad63'
const yellow = '#f19b2c'
const blue = '#3498db'
const magenta = '#BB4698'
const cyan = '#239f85'
const gray = '#d9dfdd'

const lightBlack = lighten(black, 25)
const lightRed = lighten(red, 25)
const lightGreen = lighten(green, 25)
const lightYellow = lighten(yellow, 25)
const lightBlue = lighten(blue, 25)
const lightMagenta = lighten(magenta, 25)
const lightCyan = lighten(cyan, 25)
const lightGray = lighten(gray, 25)

/**
 * Variables
 */

const primaryColor = '#80CBC4'
const secondaryColor = '#d4a14b'

/**
 * General
 */

const backgroundColor = '#000'
const foregroundColor = '#dadfdd'
const borderColor = backgroundColor
const cursorColor = lightMagenta
const selectionColor = secondaryColor
const linkColor = secondaryColor

/**
 * Tabs
 */

const inactiveTabBackgroundColor = '#242424'
const activeTabBorderColor = primaryColor
const activeTabColor = primaryColor
const dividerColor = 'rgba(157, 165, 180, 0.25)'

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
			.splitpane_divider {
				background-color: ${dividerColor} !important;
			}
			.header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: ${inactiveTabBackgroundColor} !important;
      }
      .tab_tab {
        font-weight: 500;
        color: ${dividerColor};
        border-width: 0 0 0 1px;
        border-image: linear-gradient(#21252b, #181a1f 1em) 0 0 0 1 stretch;
        border-style: solid;
      }
      .tab_tab:first-of-type {
        border-width: 0;
      }
      .tab_tab:hover {
        color: ${dividerColor};
        transition: none;
      }
      .tabs_title,
      .tab_tab.tab_active {
        font-weight: 500;
        color: ${activeTabColor};
				background-color: ${backgroundColor};
      }
      .tab_tab.tab_active,
      .tab_tab.tab_active + .tab_tab {
        border-image: linear-gradient(transparent, transparent) 0 0 0 1 stretch;
      }
      .tab_tab.tab_active:last-of-type::before {
        border-right-width: 0;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tab_icon {
        display: block;
        background: rgba(157, 165, 180, 0.6);
        -webkit-mask-image: url('${__dirname}/close.svg');
        mask-image: url('${__dirname}/close.svg');
        -webkit-mask-size: 7px;
        mask-size: 7px;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position-y: center;
        mask-position-y: center;
        -webkit-mask-position-x: 8px;
        mask-position-x: 8px;
        width: 26px;
        height: 100%;
        top: 0;
        right: 0;
        transform: scale(0);
        transition: transform .08s;
        opacity: 1;
        border-radius: 0;
        z-index: 2;
      }
      .tab_icon:hover {
        background: rgba(157, 165, 180, 0.6);
        opacity: .7;
      }
      .tab_tab.tab_active .tab_icon {
        background: #d7dae0;
      }
      .tab_tab.tab_active .tab_icon:hover {
        background: #d7dae0;
      }
      .tab_tab:hover .tab_icon {
        transform: scale(1);
        transition-duration: .16s;
      }
      .tab_icon svg {
        display: none;
      }
      .tab_icon::after {
        display: none;
      }
		`,
    termCSS: `
			${config.termCSS || ''}
			x-screen a {
		    color: ${linkColor};
		  }
			::selection {
			  background: ${selectionColor};
			}
		`
  })
}
