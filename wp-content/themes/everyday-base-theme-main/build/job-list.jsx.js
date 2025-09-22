/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/configuration/align/align.jsx":
/*!**********************************************!*\
  !*** ./blocks/configuration/align/align.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignSettings: () => (/* binding */ AlignSettings),
/* harmony export */   alignClass: () => (/* binding */ alignClass),
/* harmony export */   defaultAlignAttributes: () => (/* binding */ defaultAlignAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const defaultAlignAttributes = {
  align: {
    type: 'string',
    default: 'left'
  }
};
const alignClass = align => {
  switch (align) {
    case 'left':
      return 'justify-content-start';
    case 'center':
      return 'justify-content-center';
    case 'right':
      return 'justify-content-end';
    default:
      return 'justify-content-start';
  }
};
function AlignSettings({
  title,
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: "Alignment",
        value: attributes.align,
        options: [{
          label: 'Left',
          value: 'left'
        }, {
          label: 'Center',
          value: 'center'
        }, {
          label: 'Right',
          value: 'right'
        }],
        onChange: align => setAttributes({
          align
        })
      })
    })
  });
}

/***/ }),

/***/ "./blocks/configuration/color/colors.jsx":
/*!***********************************************!*\
  !*** ./blocks/configuration/color/colors.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorSettings: () => (/* binding */ ColorSettings),
/* harmony export */   colorValues: () => (/* binding */ colorValues),
/* harmony export */   defaultColorNameAttributes: () => (/* binding */ defaultColorNameAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const colorValues = [{
  name: 'primary',
  color: '#BE2830'
}, {
  name: 'secondary',
  color: '#5C5C5B'
}, {
  name: 'black',
  color: '#000000'
}, {
  name: 'white',
  color: '#fff'
}, {
  name: 'gray',
  color: '#adb5bd'
}];
const defaultColorNameAttributes = {
  colorName: {
    type: 'string',
    default: 'primary'
  }
};
function ColorSettings({
  title,
  attributes,
  setAttributes
}) {
  const currentColorValue = colorValues.filter(color => {
    return color.name === attributes.colorName;
  })[0].color;
  function handleColorChange(colorCode) {
    // from the hex value that the color palette gives us, we need to find its color name
    const {
      name
    } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorObjectByColorValue)(colorValues, colorCode);
    setAttributes({
      colorName: name
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
        disableCustomColors: true,
        clearable: false,
        colors: colorValues,
        value: currentColorValue,
        onChange: handleColorChange
      })
    })
  });
}

/***/ }),

/***/ "./blocks/configuration/spacer/spacer.jsx":
/*!************************************************!*\
  !*** ./blocks/configuration/spacer/spacer.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpacerSettings: () => (/* binding */ SpacerSettings),
/* harmony export */   defaultSpacerAttributes: () => (/* binding */ defaultSpacerAttributes),
/* harmony export */   spacerClass: () => (/* binding */ spacerClass)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const defaultSpacerAttributes = {
  spacer: {
    type: 'string',
    default: 'medium'
  }
};
const spacerClass = spacer => {
  switch (spacer) {
    case 'xSmall':
      return 'mt-2';
    case 'small':
      return 'mt-3';
    case 'medium':
      return 'mt-4';
    case 'large':
      return 'mt-3 mt-lg-5';
    case 'xLarge':
      return 'mt-5 mt-lg-10';
    case 'xxLarge':
      return 'mt-6 mt-lg-12';
    default:
      return 'mt-0';
  }
};
function SpacerSettings({
  title,
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: "Spacer",
        value: attributes.spacer,
        options: [{
          label: 'None',
          value: ''
        }, {
          label: 'Extra Small',
          value: 'xSmall'
        }, {
          label: 'Small',
          value: 'small'
        }, {
          label: 'Medium',
          value: 'medium'
        }, {
          label: 'Large',
          value: 'large'
        }, {
          label: 'Extra Large',
          value: 'xLarge'
        }, {
          label: 'Extra Extra Large',
          value: 'xxLarge'
        }],
        onChange: spacer => setAttributes({
          spacer
        })
      })
    })
  });
}

/***/ }),

/***/ "./blocks/utilities/button/button.jsx":
/*!********************************************!*\
  !*** ./blocks/utilities/button/button.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   ButtonSettings: () => (/* binding */ ButtonSettings),
/* harmony export */   defaultButtonAttributes: () => (/* binding */ defaultButtonAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @configuration/spacer/spacer */ "./blocks/configuration/spacer/spacer.jsx");
/* harmony import */ var _configuration_color_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @configuration/color/colors */ "./blocks/configuration/color/colors.jsx");
/* harmony import */ var _configuration_align_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @configuration/align/align */ "./blocks/configuration/align/align.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const defaultButtonAttributes = {
  ..._configuration_color_colors__WEBPACK_IMPORTED_MODULE_5__.defaultColorNameAttributes,
  // This was your original block color
  ..._configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__.defaultSpacerAttributes,
  ..._configuration_align_align__WEBPACK_IMPORTED_MODULE_6__.defaultAlignAttributes,
  linkText: {
    type: 'string',
    default: 'Mehr erfahren'
  },
  linkObject: {
    type: 'object',
    default: {
      url: ''
    }
  },
  buttonColorName: {
    type: 'string',
    default: 'primary'
  } // NEW attribute for button color
};
function ButtonSettings({
  attributes,
  setAttributes,
  setIsLinkPickerVisible
}) {
  function buttonHandler() {
    setIsLinkPickerVisible(prev => !prev);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          onClick: buttonHandler,
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_configuration_color_colors__WEBPACK_IMPORTED_MODULE_5__.ColorSettings, {
        title: "Button Color Settings",
        attributes: {
          colorName: attributes.buttonColorName
        },
        setAttributes: newAttrs => {
          if (newAttrs.colorName) {
            setAttributes({
              buttonColorName: newAttrs.colorName
            });
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__.SpacerSettings, {
        title: "Container Settings",
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_configuration_align_align__WEBPACK_IMPORTED_MODULE_6__.AlignSettings, {
        title: "Alignment Settings",
        attributes: attributes,
        setAttributes: setAttributes
      })]
    })]
  });
}
function Button({
  attributes,
  setAttributes
}) {
  const [isLinkPickerVisible, setIsLinkPickerVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function handleLinkChange(newLink) {
    setAttributes({
      linkObject: newLink
    });
  }
  function handleTextChange(setText) {
    setAttributes({
      linkText: setText
    });
  }
  let buttonColor;
  let textColor;
  switch (attributes.buttonColorName) {
    case 'primary':
      buttonColor = 'primary';
      textColor = 'text-white';
      break;
    case 'secondary':
      buttonColor = 'secondary';
      textColor = 'text-white';
      break;
    case 'black':
      buttonColor = 'black';
      textColor = 'text-white';
      break;
    case 'white':
      buttonColor = 'white';
      textColor = 'text-black';
      break;
    case 'gray':
      buttonColor = 'gray-500';
      textColor = 'text-primary';
      break;
    default:
      buttonColor = 'primary';
      textColor = 'text-white';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ButtonSettings, {
      attributes: attributes,
      setAttributes: setAttributes,
      isLinkPickerVisible: isLinkPickerVisible,
      setIsLinkPickerVisible: setIsLinkPickerVisible
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: `d-flex ${(0,_configuration_align_align__WEBPACK_IMPORTED_MODULE_6__.alignClass)(attributes.align)}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
        allowedFormats: [],
        tagName: "a",
        className: `btn btn-${buttonColor} ${textColor} ${(0,_configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__.spacerClass)(attributes.spacer)}`,
        value: attributes.linkText,
        onChange: handleTextChange
      })
    }), isLinkPickerVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      position: "middle center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLinkControl, {
        settings: [{
          id: 'openInNewTab',
          title: 'Öffnen in neuem Tab'
        }],
        value: attributes.linkObject,
        onChange: handleLinkChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: () => setIsLinkPickerVisible(false),
        style: {
          display: 'block',
          width: '100%'
        },
        children: "Confirm Link"
      })]
    })]
  });
}

/***/ }),

/***/ "./blocks/utilities/heading/heading.jsx":
/*!**********************************************!*\
  !*** ./blocks/utilities/heading/heading.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Heading: () => (/* binding */ Heading),
/* harmony export */   defaultHeadingAttributes: () => (/* binding */ defaultHeadingAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-1.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-2.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-3.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-4.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-5.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-6.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




const defaultHeadingAttributes = {
  tag: {
    type: 'string',
    default: 'h1'
  },
  heading: {
    type: 'string'
  },
  alignment: {
    type: 'string'
  }
};
const headingIcons = {
  h1: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
  h2: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  h3: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  h4: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  h5: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
  h6: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
};
function Heading({
  attributes,
  setAttributes,
  enableAlignment = true,
  enableLevelSelection = true,
  className = ''
}) {
  const {
    tag = 'h1',
    heading,
    alignment
  } = attributes;
  const currentIcon = headingIcons[tag] || _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"];
  let alignmentClass = '';
  switch (alignment) {
    case 'left':
      alignmentClass = 'text-left';
      break;
    case 'center':
      alignmentClass = 'text-center';
      break;
    case 'right':
      alignmentClass = 'text-right';
      break;
    default:
      alignmentClass = 'text-left';
  }
  const combinedClassName = `${alignmentClass} ${className}`.trim();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: [enableLevelSelection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
        label: "\xDCberschrift",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarDropdownMenu, {
          icon: currentIcon,
          label: "W\xE4hlen Sie eine \xDCberschriftsebene",
          controls: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(level => ({
            title: level.toUpperCase(),
            icon: headingIcons[level],
            onClick: () => setAttributes({
              tag: level
            }),
            isActive: tag === level
          }))
        })
      }), enableAlignment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.AlignmentToolbar, {
        value: alignment,
        onChange: newAlign => setAttributes({
          alignment: newAlign
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: tag,
      value: heading,
      onChange: newText => setAttributes({
        heading: newText
      }),
      placeholder: "\xDCberschrift eingeben...",
      className: combinedClassName
    })]
  });
}

/***/ }),

/***/ "./blocks/utilities/text/text.jsx":
/*!****************************************!*\
  !*** ./blocks/utilities/text/text.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   defaultTextAttributes: () => (/* binding */ defaultTextAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const defaultTextAttributes = {
  text: {
    type: 'string'
  },
  alignment: {
    type: 'string'
  }
};
const underlineFormat = 'basetheme/underline-format';
const UnderlineButton = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichTextToolbarButton, {
    icon: "editor-underline",
    title: "Underline",
    onClick: () => {
      props.onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.toggleFormat)(props.value, {
        type: underlineFormat
      }));
    },
    isActive: props.isActive
  });
};
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)(underlineFormat, {
  title: 'Underline',
  tagName: 'u',
  // The tag to use for the format
  className: null,
  // Optional class name
  edit({
    isActive,
    value,
    onChange
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(UnderlineButton, {
      isActive: isActive,
      value: value,
      onChange: onChange
    });
  }
});

// TODO: Add ul-list and ol-list formats

function Text({
  attributes,
  setAttributes,
  enableAlignment = true,
  className = ''
}) {
  let alignmentClass = '';
  switch (attributes.alignment) {
    case 'left':
      alignmentClass = 'text-start';
      break;
    case 'center':
      alignmentClass = 'text-center';
      break;
    case 'right':
      alignmentClass = 'text-end';
      break;
    default:
      alignmentClass = 'text-start';
  }
  const combinedClassName = `${alignmentClass} ${className}`.trim();
  if (enableAlignment) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.AlignmentToolbar, {
          value: attributes.alignment,
          onChange: newVal => setAttributes({
            alignment: newVal
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        value: attributes.text,
        onChange: newText => setAttributes({
          text: newText
        }),
        placeholder: "Text eingabe...",
        className: combinedClassName
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    value: attributes.text,
    onChange: newText => setAttributes({
      text: newText
    }),
    placeholder: "Text eingabe...",
    className: combinedClassName
  });
}

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/heading-level-1.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading-level-1.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const headingLevel1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingLevel1);
//# sourceMappingURL=heading-level-1.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/heading-level-2.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading-level-2.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const headingLevel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingLevel2);
//# sourceMappingURL=heading-level-2.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/heading-level-3.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading-level-3.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const headingLevel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingLevel3);
//# sourceMappingURL=heading-level-3.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/heading-level-4.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading-level-4.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const headingLevel4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingLevel4);
//# sourceMappingURL=heading-level-4.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/heading-level-5.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading-level-5.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const headingLevel5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingLevel5);
//# sourceMappingURL=heading-level-5.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/heading-level-6.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading-level-6.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const headingLevel6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingLevel6);
//# sourceMappingURL=heading-level-6.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const link = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-author.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-author.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const postAuthor = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M10 4.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2.25 7.5v-1A2.75 2.75 0 0011 8.25H7A2.75 2.75 0 004.25 11v1h1.5v-1c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v1h1.5zM4 20h9v-1.5H4V20zm16-4H4v-1.5h16V16z",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postAuthor);
//# sourceMappingURL=post-author.js.map

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["richText"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************************!*\
  !*** ./blocks/components/job-list/job-list.jsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post-author.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_text_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utilities/text/text */ "./blocks/utilities/text/text.jsx");
/* harmony import */ var _utilities_heading_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utilities/heading/heading */ "./blocks/utilities/heading/heading.jsx");
/* harmony import */ var _utilities_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utilities/button/button */ "./blocks/utilities/button/button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('basetheme/job-list', {
  title: 'Job List',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: 'components',
  description: 'Job List Block to display open jobs',
  keywords: '[]',
  supports: {},
  attributes: {
    ..._utilities_heading_heading__WEBPACK_IMPORTED_MODULE_4__.defaultHeadingAttributes,
    startingDate: {
      type: 'string',
      default: 'Ab Sofort'
    },
    ..._utilities_text_text__WEBPACK_IMPORTED_MODULE_3__.defaultTextAttributes,
    ..._utilities_button_button__WEBPACK_IMPORTED_MODULE_5__.defaultButtonAttributes
  },
  edit: EditComponent,
  save: () => null
});
function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utilities_heading_heading__WEBPACK_IMPORTED_MODULE_4__.Heading, {
      attributes: attributes,
      setAttributes: setAttributes,
      enableAlignment: false,
      enableLevelSelection: false,
      className: "fs-26 fw-bold"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "div",
      className: "fs-14 fw-light",
      value: attributes.startingDate,
      onChange: value => setAttributes({
        startingDate: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utilities_text_text__WEBPACK_IMPORTED_MODULE_3__.Text, {
      attributes: attributes,
      setAttributes: setAttributes,
      enableAlignment: true,
      className: "fs-16"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utilities_button_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
      attributes: attributes,
      setAttributes: setAttributes
    })]
  });
}
})();

/******/ })()
;
//# sourceMappingURL=job-list.jsx.js.map