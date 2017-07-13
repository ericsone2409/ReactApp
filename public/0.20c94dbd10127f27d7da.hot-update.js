webpackHotUpdate(0,{

/***/ "./js/Landing.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionCreators__ = __webpack_require__(\"./js/actionCreators.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing() {\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Landing);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.goToSearch = function () {\n      var _this2;\n\n      return (_this2 = _this).__goToSearch__REACT_HOT_LOADER__.apply(_this2, arguments);\n    }, _this.clearSearchTerm = function () {\n      var _this3;\n\n      return (_this3 = _this).__clearSearchTerm__REACT_HOT_LOADER__.apply(_this3, arguments);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  Landing.prototype.__goToSearch__REACT_HOT_LOADER__ = function __goToSearch__REACT_HOT_LOADER__(event) {\n    event.preventDefault();\n    this.props.history.push(\"/search\");\n  };\n\n  Landing.prototype.__clearSearchTerm__REACT_HOT_LOADER__ = function __clearSearchTerm__REACT_HOT_LOADER__(event) {\n    event.preventDefault();\n    this.props.goAndClear();\n    this.props.history.push(\"/search\");\n  };\n\n  Landing.prototype.render = function render() {\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"landing\" },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"h1\",\n        null,\n        \"bla\"\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"form\",\n        { onSubmit: this.goToSearch },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"input\", {\n          type: \"text\",\n          placeholder: \"Search\",\n          value: this.props.searchTerm,\n          onChange: this.props.handlerSearchTermChange\n        })\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"a\",\n        { onClick: this.clearSearchTerm, role: \"link\", tabIndex: 0 },\n        \"or Browser All\"\n      )\n    );\n  };\n\n  return Landing;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { searchTerm: state.searchTerm };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handlerSearchTermChange: function handlerSearchTermChange(event) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actionCreators__[\"b\" /* setSearchTerm */])(event.target.value));\n    },\n    goAndClear: function goAndClear() {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actionCreators__[\"c\" /* clearSearchTerm */])());\n    }\n  };\n};\n\nvar _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(Landing);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Landing, \"Landing\", \"C:/Users/ericson.gonzalez/Desktop/ericson/ReactApp/js/Landing.jsx\");\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, \"mapStateToProps\", \"C:/Users/ericson.gonzalez/Desktop/ericson/ReactApp/js/Landing.jsx\");\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, \"mapDispatchToProps\", \"C:/Users/ericson.gonzalez/Desktop/ericson/ReactApp/js/Landing.jsx\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:/Users/ericson.gonzalez/Desktop/ericson/ReactApp/js/Landing.jsx\");\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9MYW5kaW5nLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL0xhbmRpbmcuanN4PzIxNjQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IHNldFNlYXJjaFRlcm0sIGNsZWFyU2VhcmNoVGVybSB9IGZyb20gXCIuL2FjdGlvbkNyZWF0b3JzXCI7XG5cbnZhciBMYW5kaW5nID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExhbmRpbmcsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExhbmRpbmcoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYW5kaW5nKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5nb1RvU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzMjtcblxuICAgICAgcmV0dXJuIChfdGhpczIgPSBfdGhpcykuX19nb1RvU2VhcmNoX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMyLCBhcmd1bWVudHMpO1xuICAgIH0sIF90aGlzLmNsZWFyU2VhcmNoVGVybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpczM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMzID0gX3RoaXMpLl9fY2xlYXJTZWFyY2hUZXJtX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMzLCBhcmd1bWVudHMpO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgTGFuZGluZy5wcm90b3R5cGUuX19nb1RvU2VhcmNoX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2dvVG9TZWFyY2hfX1JFQUNUX0hPVF9MT0FERVJfXyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvc2VhcmNoXCIpO1xuICB9O1xuXG4gIExhbmRpbmcucHJvdG90eXBlLl9fY2xlYXJTZWFyY2hUZXJtX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2NsZWFyU2VhcmNoVGVybV9fUkVBQ1RfSE9UX0xPQURFUl9fKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmdvQW5kQ2xlYXIoKTtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9zZWFyY2hcIik7XG4gIH07XG5cbiAgTGFuZGluZy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImxhbmRpbmdcIiB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJoMVwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImJsYVwiXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgIHsgb25TdWJtaXQ6IHRoaXMuZ29Ub1NlYXJjaCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnNlYXJjaFRlcm0sXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMucHJvcHMuaGFuZGxlclNlYXJjaFRlcm1DaGFuZ2VcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImFcIixcbiAgICAgICAgeyBvbkNsaWNrOiB0aGlzLmNsZWFyU2VhcmNoVGVybSwgcm9sZTogXCJsaW5rXCIsIHRhYkluZGV4OiAwIH0sXG4gICAgICAgIFwib3IgQnJvd3NlciBBbGxcIlxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIExhbmRpbmc7XG59KENvbXBvbmVudCk7XG5cbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHsgc2VhcmNoVGVybTogc3RhdGUuc2VhcmNoVGVybSB9O1xufTtcbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVyU2VhcmNoVGVybUNoYW5nZTogZnVuY3Rpb24gaGFuZGxlclNlYXJjaFRlcm1DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSxcbiAgICBnb0FuZENsZWFyOiBmdW5jdGlvbiBnb0FuZENsZWFyKCkge1xuICAgICAgZGlzcGF0Y2goY2xlYXJTZWFyY2hUZXJtKCkpO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExhbmRpbmcpO1xuXG5leHBvcnQgZGVmYXVsdCBfZGVmYXVsdDtcbjtcblxudmFyIF90ZW1wMiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihMYW5kaW5nLCBcIkxhbmRpbmdcIiwgXCJDOi9Vc2Vycy9lcmljc29uLmdvbnphbGV6L0Rlc2t0b3AvZXJpY3Nvbi9SZWFjdEFwcC9qcy9MYW5kaW5nLmpzeFwiKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihtYXBTdGF0ZVRvUHJvcHMsIFwibWFwU3RhdGVUb1Byb3BzXCIsIFwiQzovVXNlcnMvZXJpY3Nvbi5nb256YWxlei9EZXNrdG9wL2VyaWNzb24vUmVhY3RBcHAvanMvTGFuZGluZy5qc3hcIik7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIobWFwRGlzcGF0Y2hUb1Byb3BzLCBcIm1hcERpc3BhdGNoVG9Qcm9wc1wiLCBcIkM6L1VzZXJzL2VyaWNzb24uZ29uemFsZXovRGVza3RvcC9lcmljc29uL1JlYWN0QXBwL2pzL0xhbmRpbmcuanN4XCIpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCBcImRlZmF1bHRcIiwgXCJDOi9Vc2Vycy9lcmljc29uLmdvbnphbGV6L0Rlc2t0b3AvZXJpY3Nvbi9SZWFjdEFwcC9qcy9MYW5kaW5nLmpzeFwiKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvTGFuZGluZy5qc3hcbi8vIG1vZHVsZSBpZCA9IC4vanMvTGFuZGluZy5qc3hcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})