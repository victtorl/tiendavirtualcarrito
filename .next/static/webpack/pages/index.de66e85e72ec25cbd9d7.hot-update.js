webpackHotUpdate_N_E("pages/index",{

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar initialState = {\n  productos: [],\n  pedido: [],\n  aux: [],\n  total: [0]\n};\n\nvar reducerAdmin = function reducerAdmin() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'ADD_TODO':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        productos: action.payload\n      });\n\n    case 'ADD_TO_CARRITO':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // productos:state.productos.filter(m => {m.id !== action.payload.id}),\n        pedido: action.payload.cartItems // total:state.total.concat(action.payload.precio_venta)\n\n      });\n\n    case '_TO_CARRITO':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // total:state.total.filter(m=>m.id !== action.payload.id)\n        pedido: action.payload.cartItems\n      });\n\n    default:\n      return state;\n  }\n}; //metodos\n\n\nvar existeItem = function existeItem() {\n  console.log('pedido');\n}; //acciones\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(reducerAdmin, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"]))));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcz80ZjgxIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInByb2R1Y3RvcyIsInBlZGlkbyIsImF1eCIsInRvdGFsIiwicmVkdWNlckFkbWluIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImNhcnRJdGVtcyIsImV4aXN0ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBQztBQUNmQyxXQUFTLEVBQUMsRUFESztBQUVmQyxRQUFNLEVBQUMsRUFGUTtBQUdmQyxLQUFHLEVBQUMsRUFIVztBQUlmQyxPQUFLLEVBQUMsQ0FBQyxDQUFEO0FBSlMsQ0FBbkI7O0FBU0EsSUFBTUMsWUFBWSxHQUFFLFNBQWRBLFlBQWMsR0FBNkI7QUFBQSxNQUE1QkMsS0FBNEIsdUVBQXRCTixZQUFzQjtBQUFBLE1BQVRPLE1BQVM7O0FBQ2pELFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssVUFBTDtBQUNJLDZDQUNPRixLQURQO0FBRUtMLGlCQUFTLEVBQUNNLE1BQU0sQ0FBQ0U7QUFGdEI7O0FBSUwsU0FBSyxnQkFBTDtBQUNLLDZDQUNPSCxLQURQO0FBRUk7QUFFRUosY0FBTSxFQUFDSyxNQUFNLENBQUNFLE9BQVAsQ0FBZUMsU0FKNUIsQ0FNSTs7QUFOSjs7QUFXSixTQUFLLGFBQUw7QUFDSyw2Q0FDT0osS0FEUDtBQUVVO0FBRUxKLGNBQU0sRUFBQ0ssTUFBTSxDQUFDRSxPQUFQLENBQWVDO0FBSjNCOztBQVNMO0FBQ0ksYUFBT0osS0FBUDtBQTdCUjtBQWlDQyxDQWxDRCxDLENBb0NBOzs7QUFDQSxJQUFNSyxVQUFVLEdBQUMsU0FBWEEsVUFBVyxHQUFJO0FBQ2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsQ0FGRCxDLENBT0E7OztBQUtlQyx3SEFBVyxDQUFDVCxZQUFELEVBQWNVLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxtREFBRCxDQUFoQixDQUFqQyxDQUExQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlLGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZT17XG4gICAgcHJvZHVjdG9zOltdLFxuICAgIHBlZGlkbzpbXSxcbiAgICBhdXg6W10sXG4gICAgdG90YWw6WzBdXG4gICAgXG59XG5cblxuY29uc3QgcmVkdWNlckFkbWluID0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcbnN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICBwcm9kdWN0b3M6YWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH1cbiAgIGNhc2UgJ0FERF9UT19DQVJSSVRPJzpcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAvLyBwcm9kdWN0b3M6c3RhdGUucHJvZHVjdG9zLmZpbHRlcihtID0+IHttLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZH0pLFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcGVkaWRvOmFjdGlvbi5wYXlsb2FkLmNhcnRJdGVtcyxcblxuICAgICAgICAgICAgLy8gdG90YWw6c3RhdGUudG90YWwuY29uY2F0KGFjdGlvbi5wYXlsb2FkLnByZWNpb192ZW50YSlcblxuXG4gICAgICAgIH1cblxuICAgIGNhc2UgJ19UT19DQVJSSVRPJzpcbiAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAvLyB0b3RhbDpzdGF0ZS50b3RhbC5maWx0ZXIobT0+bS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgXG4gICAgICAgICAgICAgIHBlZGlkbzphY3Rpb24ucGF5bG9hZC5jYXJ0SXRlbXMsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlICBcbiAgICBcbn1cblxufVxuXG4vL21ldG9kb3NcbmNvbnN0IGV4aXN0ZUl0ZW09KCk9PntcbiAgICBjb25zb2xlLmxvZygncGVkaWRvJylcbn1cblxuXG5cblxuLy9hY2Npb25lc1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyQWRtaW4sY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/store.js\n");

/***/ })

})