/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/map-marker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/map-marker.js ***!
  \**************************************************************************/
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


const mapMarker = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapMarker);
//# sourceMappingURL=map-marker.js.map

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/js/components/googleMaps.js":
/*!*****************************************!*\
  !*** ./src/js/components/googleMaps.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGoogleMaps: () => (/* binding */ initGoogleMaps)
/* harmony export */ });
async function fetchLatLng(address, maps) {
  const geocodingApiKey = maps[0].getAttribute('data-geolocation-api-key');
  console.log('geocodingApiKey:', geocodingApiKey);
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${geocodingApiKey}`);
  // const response = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBMJ4enSButhGdMpYErkFGaycG0O6rYRUc");
  const data = await response.json();
  if (data.status === 'OK') {
    const location = data.results[0].geometry.location;
    return {
      lat: location.lat,
      lng: location.lng
    };
  }
  console.error('Geocoding API error:', data);
  return null;
}
async function initMap(maps) {
  const locations = [];
  for (const location of maps) {
    const address = `${location.getAttribute('data-street')} ${location.getAttribute('data-number')}, ${location.getAttribute('data-postal-code')} ${location.getAttribute('data-city')}`;
    // let lat = parseFloat(location.getAttribute("data-lat"));
    // let lng = parseFloat(location.getAttribute("data-long"));

    let lat;
    let lng;
    if (isNaN(lat) || isNaN(lng)) {
      const latLng = await fetchLatLng(address, maps);
      if (latLng) {
        lat = latLng.lat;
        lng = latLng.lng;
      } else {
        continue; // Skip this location if geocoding fails
      }
    }
    locations.push({
      id: location.getAttribute('data-map-id'),
      lat: lat,
      lng: lng,
      location: location.getAttribute('data-location'),
      street: location.getAttribute('data-street'),
      number: location.getAttribute('data-number'),
      postalCode: location.getAttribute('data-postal-code'),
      city: location.getAttribute('data-city'),
      email: location.getAttribute('data-email'),
      phone: location.getAttribute('data-phone'),
      favicon: location.getAttribute('data-favicon')
    });
  }
  locations.forEach(location => {
    const getMapID = document.querySelectorAll(`[data-map-colors-id="${location.id}"]`);
    const mapStyles = generateMapStyles(getMapID[0]);
    const map = new google.maps.Map(document.querySelector(`[data-map-id="${location.id}"]`), {
      center: {
        lat: location.lat,
        lng: location.lng
      },
      zoom: 15,
      styles: mapStyles
    });
    const icon = {
      url: location.favicon,
      size: new google.maps.Size(40, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(20, 20),
      scaledSize: new google.maps.Size(40, 40)
    };
    const marker = new google.maps.Marker({
      position: {
        lat: location.lat,
        lng: location.lng
      },
      map: map,
      icon: icon
    });
    const formattedPhoneNumber = location.phone.replace(/\s+/g, '');
    const detailWindow = new google.maps.InfoWindow({
      content: `<h5 class="map-title">${location.location}</h5><br><p><span class="map-text">${location.street}&nbsp;${location.number}</span><br><span class="map-text">${location.postalCode}&nbsp;${location.city}</span><br><br><a class="link-text" href="mailto:${location.email}">${location.email}</a><br><a class="link-text" href="tel:${formattedPhoneNumber}">${location.phone}</a></p>`
    });
    marker.addListener('click', () => {
      detailWindow.open(map, marker);
    });
    map.addListener('click', () => {
      detailWindow.close();
    });
  });
}
function loadGoogleMaps(maps) {
  const script = document.createElement('script');
  const apiKey = maps[0].getAttribute('data-api-key');

  // Ensure the Google Maps API script is loaded with the correct callback
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=marker`;
  script.async = true;
  script.defer = true;

  // Append the script to the document head
  document.head.appendChild(script);

  // Listen for the script to finish loading
  script.onerror = function () {
    console.error('Failed to load the Google Maps API script.');
  };
}

// Expose initMap globally for the callback
window.initMap = function () {
  const maps = document.querySelectorAll('[data-map]');
  if (maps.length > 0) {
    initMap(maps); // Call the local initMap function
  }
};

// Call initGoogleMaps when needed
function initGoogleMaps() {
  const maps = document.querySelectorAll('[data-map]');
  if (maps.length === 0) {
    return;
  }

  // Ensure the script is loaded only once
  if (!window.google) {
    loadGoogleMaps(maps);
  } else {
    initMap(maps);
  }
}
function generateMapStyles(mapElement) {
  return [{
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{
      color: mapElement.getAttribute('data-map-colors-landscape')
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      color: mapElement.getAttribute('data-map-colors-road')
    }]
  }, {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{
      color: mapElement.getAttribute('data-map-colors-water')
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{
      color: mapElement.getAttribute('data-map-colors-poi-park')
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
      color: mapElement.getAttribute('data-map-colors-poi')
    }]
  }, {
    featureType: 'all',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];
}

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
/*!*******************************************************!*\
  !*** ./blocks/components/google-maps/google-maps.jsx ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/map-marker.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _src_js_components_googleMaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/js/components/googleMaps */ "./src/js/components/googleMaps.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('basetheme/google-maps', {
  title: 'Googlemaps',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  category: 'layout',
  parent: ['basetheme/container', 'basetheme/grid-item'],
  description: 'A Description',
  keywords: [],
  attributes: {
    uuid: {
      type: 'string',
      default: ''
    },
    apiKey: {
      type: 'string',
      default: process.env.GOOGLE_MAPS_API_KEY,
      hidden: true
    },
    geolocationApiKey: {
      type: 'string',
      default: process.env.GEOLOCATION_API_KEY,
      hidden: true
    },
    location: {
      type: 'string',
      default: 'Hauptsitz'
    },
    street: {
      type: 'string',
      default: 'Hauptstrasse'
    },
    number: {
      type: 'string',
      default: '1'
    },
    zip: {
      type: 'string',
      default: '4001'
    },
    city: {
      type: 'string',
      default: 'Basel'
    },
    email: {
      type: 'string',
      default: ''
    },
    phone: {
      type: 'string',
      default: ''
    },
    colorLandscape: {
      type: 'string',
      default: '#FFFFFF'
    },
    colorRoad: {
      type: 'string',
      default: '#808080'
    },
    colorWater: {
      type: 'string',
      default: '#0d3b66'
    },
    colorPoiPark: {
      type: 'string',
      default: '#FFFFFF'
    },
    colorPoi: {
      type: 'string',
      default: '#FFFFFF'
    },
    enableAdvancedMarker: {
      type: 'boolean',
      default: false
    }
  },
  edit: EditComponent,
  save: () => null
});
const googleMapsColorValues = [{
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
function EditComponent({
  attributes,
  setAttributes
}) {
  const {
    apiKey,
    lat,
    long
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    (0,_src_js_components_googleMaps__WEBPACK_IMPORTED_MODULE_6__.initGoogleMaps)();
  }, [apiKey, lat, long]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!attributes.uuid) {
      setAttributes({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])()
      });
    }
  }, [attributes.uuid, setAttributes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MapSettingsPanel, {
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MapColorsPanel, {
        attributes: attributes,
        setAttributes: setAttributes
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(GoogleMapPreview, {
      attributes: attributes
    })]
  });
}
function MapSettingsPanel({
  attributes,
  setAttributes
}) {
  const {
    location,
    lat,
    long,
    street,
    number,
    zip,
    city,
    email,
    phone
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Google Maps Settings",
    children: [{
      label: 'Location',
      value: location,
      key: 'location'
    }, {
      label: 'Street',
      value: street,
      key: 'street'
    }, {
      label: 'Number',
      value: number,
      key: 'number'
    }, {
      label: 'Zip',
      value: zip,
      key: 'zip',
      type: 'number'
    }, {
      label: 'City',
      value: city,
      key: 'city'
    }, {
      label: 'Email',
      value: email,
      key: 'email',
      type: 'email'
    }, {
      label: 'Phone',
      value: phone,
      key: 'phone',
      type: 'tel'
    }].map(({
      label,
      value,
      key,
      type
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalInputControl, {
        label: label,
        value: value,
        type: type || 'text',
        onChange: newValue => setAttributes({
          [key]: newValue
        })
      })
    }, key))
  });
}
function MapColorsPanel({
  attributes,
  setAttributes
}) {
  const {
    colorLandscape,
    colorRoad,
    colorWater,
    colorPoiPark,
    colorPoi
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Map Colors",
    children: [{
      label: 'Color Landscape',
      value: colorLandscape,
      key: 'colorLandscape'
    }, {
      label: 'Color Road',
      value: colorRoad,
      key: 'colorRoad'
    }, {
      label: 'Color Water',
      value: colorWater,
      key: 'colorWater'
    }, {
      label: 'Color Poi Park',
      value: colorPoiPark,
      key: 'colorPoiPark'
    }, {
      label: 'Color Poi',
      value: colorPoi,
      key: 'colorPoi'
    }].map(({
      label,
      value,
      key
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
        htmlFor: key,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
          disableCustomColors: true,
          clearable: false,
          colors: googleMapsColorValues,
          value: value,
          onChange: newColor => setAttributes({
            [key]: newColor
          })
        })
      })]
    }, key))
  });
}
function GoogleMapPreview({
  attributes
}) {
  const {
    uuid,
    apiKey,
    geolocationApiKey,
    location,
    street,
    number,
    zip,
    city,
    email,
    phone,
    colorLandscape,
    colorRoad,
    colorWater,
    colorPoiPark,
    colorPoi
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "google-maps-preview",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "google-maps-color",
      "data-map-colors": true,
      "data-map-colors-id": uuid,
      "data-map-colors-landscape": colorLandscape,
      "data-map-colors-road": colorRoad,
      "data-map-colors-water": colorWater,
      "data-map-colors-poi-park": colorPoiPark,
      "data-map-colors-poi": colorPoi
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "google-maps-wrapper",
      "data-map": true,
      "data-map-id": uuid,
      "data-api-key": apiKey,
      "data-geolocation-api-key": geolocationApiKey,
      "data-location": location,
      "data-street": street,
      "data-number": number,
      "data-postal-code": zip,
      "data-city": city,
      "data-email": email,
      "data-phone": phone
    })]
  });
}
})();

/******/ })()
;
//# sourceMappingURL=google-maps.jsx.js.map