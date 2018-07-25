(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/js/App/client.js":
/*!******************************!*\
  !*** ./src/js/App/client.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/contentful.browser.js");

exports.default = contentful.createClient({
    space: 'fpic5f5rklmu',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '4a038f56f28821d93ead9bfe9759bb1a7c6093eb8201bc7b93f7805e02e0338f'
});

/***/ }),

/***/ "./src/js/App/components/Aspect/aspect.scss":
/*!**************************************************!*\
  !*** ./src/js/App/components/Aspect/aspect.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"aspect":"_3EWPnNcstFnwumHGQpea61","aspect-16x9":"_3kkCDwYAaReB0974H5jU8R","aspect-1440x900":"EkAM26JWSUSghROwCEvw7","aspect-iphone6":"-KqUyW9QwweP1kVLZr8xB","aspect-ipad":"l3IgD6W2czf4GSagD3SnH"};

/***/ }),

/***/ "./src/js/App/components/Aspect/index.jsx":
/*!************************************************!*\
  !*** ./src/js/App/components/Aspect/index.jsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classcat = __webpack_require__(/*! classcat */ "./node_modules/classcat/src/index.js");

var _classcat2 = _interopRequireDefault(_classcat);

var _aspect = __webpack_require__(/*! ./aspect.scss */ "./src/js/App/components/Aspect/aspect.scss");

var _aspect2 = _interopRequireDefault(_aspect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Aspect = function Aspect(_ref) {
    var children = _ref.children,
        _ref$modifiers = _ref.modifiers,
        modifiers = _ref$modifiers === undefined ? '' : _ref$modifiers,
        className = _ref.className,
        width = _ref.width,
        height = _ref.height,
        props = _objectWithoutProperties(_ref, ['children', 'modifiers', 'className', 'width', 'height']);

    var classes = (0, _classcat2.default)([className, _aspect2.default.aspect, modifiers.split(' ').map(function (modifier) {
        return _aspect2.default[modifier];
    })]);

    var styles = width && height && {
        paddingTop: height / width * 100 + '%'
    };

    return _react2.default.createElement(
        'div',
        _extends({}, props, { className: classes, style: styles }),
        children
    );
};

exports.default = Aspect;

/***/ }),

/***/ "./src/js/App/components/Browser/browser.scss":
/*!****************************************************!*\
  !*** ./src/js/App/components/Browser/browser.scss ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"browser":"_1lwjnrAO4Kr8pmjjhjAp8e","title":"_32Rv54INlRafa5VDiWYa7Q","image":"_2C9yDVtPG39yhtLlnWwicc"};

/***/ }),

/***/ "./src/js/App/components/Browser/index.jsx":
/*!*************************************************!*\
  !*** ./src/js/App/components/Browser/index.jsx ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Aspect = __webpack_require__(/*! ../Aspect */ "./src/js/App/components/Aspect/index.jsx");

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Video = __webpack_require__(/*! ../Video */ "./src/js/App/components/Video/index.jsx");

var _Video2 = _interopRequireDefault(_Video);

var _Image = __webpack_require__(/*! ../Image */ "./src/js/App/components/Image/index.jsx");

var _Image2 = _interopRequireDefault(_Image);

var _browser = __webpack_require__(/*! ./browser.scss */ "./src/js/App/components/Browser/browser.scss");

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Browser = function Browser(_ref) {
    var desktop = _ref.desktop,
        _ref$name = _ref.name,
        name = _ref$name === undefined ? '' : _ref$name;
    return _react2.default.createElement(
        'div',
        { className: _browser2.default.browser },
        _react2.default.createElement(
            'span',
            { className: _browser2.default.title },
            name
        ),
        _react2.default.createElement(
            _Aspect2.default,
            _extends({}, desktop.fields.file.details.image, { modifiers: desktop.fields.file.contentType === 'video/mp4' ? 'aspect-1440x900' : '' }),
            desktop.fields.file.contentType === 'video/mp4' ? _react2.default.createElement(
                _Video2.default,
                { loop: true, muted: true, playsInline: true },
                _react2.default.createElement('source', { src: 'https:' + desktop.fields.file.url, type: desktop.fields.file.contentType })
            ) : _react2.default.createElement(_Image2.default, { src: 'https:' + desktop.fields.file.url + '?fm=webp&w=800', alt: '', className: _browser2.default.image })
        )
    );
};

exports.default = Browser;

/***/ }),

/***/ "./src/js/App/components/Image/index.jsx":
/*!***********************************************!*\
  !*** ./src/js/App/components/Image/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1]
};

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image() {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this));

        _this.image = _react2.default.createRef();
        _this.onLoad = _this.onLoad.bind(_this);
        return _this;
    }

    _createClass(Image, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var transitions = window.getComputedStyle(this.image.current).transition;
            this.image.current.style.opacity = '0';
            this.image.current.style.transition = transitions + ', opacity 0.3s';

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        _this2.image.current.src = _this2.props.src;
                        observer.unobserve(_this2.image.current);
                    }
                });
            }, options);

            observer.observe(this.image.current);
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.image.current.style.opacity = '1';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                src = _props.src,
                _props$alt = _props.alt,
                alt = _props$alt === undefined ? '' : _props$alt,
                props = _objectWithoutProperties(_props, ['src', 'alt']);

            return _react2.default.createElement('img', _extends({ ref: this.image, src: '', alt: alt }, props, { onLoad: this.onLoad }));
        }
    }]);

    return Image;
}(_react2.default.Component);

exports.default = Image;

/***/ }),

/***/ "./src/js/App/components/Layout/index.jsx":
/*!************************************************!*\
  !*** ./src/js/App/components/Layout/index.jsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LayoutContent = exports.LayoutAside = exports.Layout = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(/*! ./layout.scss */ "./src/js/App/components/Layout/layout.scss");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: _layout2.default.layout },
        children
    );
};

var LayoutAside = function LayoutAside(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
        'div',
        { className: _layout2.default.aside },
        children
    );
};

var LayoutContent = function LayoutContent(_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
        'div',
        { className: _layout2.default.content },
        children
    );
};

exports.Layout = Layout;
exports.LayoutAside = LayoutAside;
exports.LayoutContent = LayoutContent;

/***/ }),

/***/ "./src/js/App/components/Layout/layout.scss":
/*!**************************************************!*\
  !*** ./src/js/App/components/Layout/layout.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"layout":"_3qsEJPoefJ6PazmoVDDWLs","content":"_2b3Ge2QJ7keeobJL2obaUE","aside":"_1TAYoXmGE0Hy8Bkna3q5Rz","fadeIn":"_2_1YBzZc9D6FeYGJta1rR-"};

/***/ }),

/***/ "./src/js/App/components/Mobile/index.jsx":
/*!************************************************!*\
  !*** ./src/js/App/components/Mobile/index.jsx ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Aspect = __webpack_require__(/*! ../Aspect */ "./src/js/App/components/Aspect/index.jsx");

var _Aspect2 = _interopRequireDefault(_Aspect);

var _Video = __webpack_require__(/*! ../Video */ "./src/js/App/components/Video/index.jsx");

var _Video2 = _interopRequireDefault(_Video);

var _Image = __webpack_require__(/*! ../Image */ "./src/js/App/components/Image/index.jsx");

var _Image2 = _interopRequireDefault(_Image);

var _mobile = __webpack_require__(/*! ./mobile.scss */ "./src/js/App/components/Mobile/mobile.scss");

var _mobile2 = _interopRequireDefault(_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mobile = function Mobile(_ref) {
    var mobile = _ref.mobile;
    return _react2.default.createElement(
        'div',
        { className: _mobile2.default.mobile },
        _react2.default.createElement(
            'div',
            { className: _mobile2.default.inner },
            _react2.default.createElement(
                _Aspect2.default,
                { modifiers: 'aspect-iphone6' },
                mobile.fields.file.contentType === 'video/mp4' ? _react2.default.createElement(
                    _Video2.default,
                    { loop: true, muted: true, playsInline: true },
                    _react2.default.createElement('source', { src: 'https:' + mobile.fields.file.url, type: 'video/mp4' })
                ) : _react2.default.createElement(_Image2.default, { src: 'https:' + mobile.fields.file.url + '?fm=webp&w=210', alt: '', className: _mobile2.default.image })
            )
        )
    );
};

exports.default = Mobile;

/***/ }),

/***/ "./src/js/App/components/Mobile/mobile.scss":
/*!**************************************************!*\
  !*** ./src/js/App/components/Mobile/mobile.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mobile":"_18CCDnAl3fg6NEyVKw_84Y","inner":"_1C_OWji9uUcyn3QkGnV-hO","title":"_1jz79W7T2JuNuXLjzT3uwF","image":"_3mQR6lUd0SJCfpEdSdzzXT"};

/***/ }),

/***/ "./src/js/App/components/ProjectHeader/index.jsx":
/*!*******************************************************!*\
  !*** ./src/js/App/components/ProjectHeader/index.jsx ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _projectHeader = __webpack_require__(/*! ./projectHeader.scss */ "./src/js/App/components/ProjectHeader/projectHeader.scss");

var _projectHeader2 = _interopRequireDefault(_projectHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectHeader = function ProjectHeader(_ref) {
    var name = _ref.name,
        client = _ref.client;
    return _react2.default.createElement(
        'header',
        { className: _projectHeader2.default.projectHeader },
        _react2.default.createElement(
            'h1',
            { className: _projectHeader2.default.title },
            name
        ),
        _react2.default.createElement(
            'h3',
            { className: _projectHeader2.default.client },
            client
        )
    );
};

exports.default = ProjectHeader;

/***/ }),

/***/ "./src/js/App/components/ProjectHeader/projectHeader.scss":
/*!****************************************************************!*\
  !*** ./src/js/App/components/ProjectHeader/projectHeader.scss ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"projectHeader":"_1KY-uvIGRN0l5Gc6ERBXff","title":"_3bHy-W20Car0BOFYBiVZHq","client":"_2pb3tar6co-fVZd2G27D7F"};

/***/ }),

/***/ "./src/js/App/components/Video/index.jsx":
/*!***********************************************!*\
  !*** ./src/js/App/components/Video/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1]
};

var Video = function (_React$Component) {
    _inherits(Video, _React$Component);

    function Video() {
        _classCallCheck(this, Video);

        var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this));

        _this.video = _react2.default.createRef();
        return _this;
    }

    _createClass(Video, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.play();
                    } else {
                        entry.target.pause();
                        entry.target.currentTime = 0;
                    }
                });
            }, options);

            observer.observe(this.video.current);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ['children']);

            return (
                // eslint-disable-next-line
                _react2.default.createElement(
                    'video',
                    _extends({}, props, { ref: this.video }),
                    children
                )
            );
        }
    }]);

    return Video;
}(_react2.default.Component);

exports.default = Video;

/***/ }),

/***/ "./src/js/App/scenes/Project.jsx":
/*!***************************************!*\
  !*** ./src/js/App/scenes/Project.jsx ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _Layout = __webpack_require__(/*! ../components/Layout */ "./src/js/App/components/Layout/index.jsx");

var _ProjectHeader = __webpack_require__(/*! ../components/ProjectHeader */ "./src/js/App/components/ProjectHeader/index.jsx");

var _ProjectHeader2 = _interopRequireDefault(_ProjectHeader);

var _Browser = __webpack_require__(/*! ../components/Browser */ "./src/js/App/components/Browser/index.jsx");

var _Browser2 = _interopRequireDefault(_Browser);

var _Mobile = __webpack_require__(/*! ../components/Mobile */ "./src/js/App/components/Mobile/index.jsx");

var _Mobile2 = _interopRequireDefault(_Mobile);

var _client = __webpack_require__(/*! ../client */ "./src/js/App/client.js");

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project() {
        _classCallCheck(this, Project);

        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this));

        _this.state = {
            project: false
        };
        return _this;
    }

    _createClass(Project, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _client2.default.getEntries({
                content_type: 'project',
                'fields.slug[in]': this.props.match.params.slug
            }).then(function (projects) {
                return projects.items.map(function (project) {
                    return project.fields;
                });
            }).then(function (projects) {
                _this2.setState({
                    project: projects[0]
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            console.log(this.state.project);
            if (!this.state.project) {
                return null;
            }
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.project.screenshots.map(function (screenshot, screenshotIndex) {
                    return _react2.default.createElement(
                        _Layout.Layout,
                        { key: screenshot.sys.id },
                        _react2.default.createElement(
                            _Layout.LayoutAside,
                            null,
                            screenshotIndex === 0 && _react2.default.createElement(_ProjectHeader2.default, _this3.state.project),
                            _react2.default.createElement(_reactMarkdown2.default, { source: screenshot.fields.description })
                        ),
                        _react2.default.createElement(
                            _Layout.LayoutContent,
                            null,
                            _react2.default.createElement(_Browser2.default, screenshot.fields),
                            screenshot.fields.mobile && _react2.default.createElement(_Mobile2.default, screenshot.fields)
                        )
                    );
                })
            );
        }
    }]);

    return Project;
}(_react2.default.Component);

exports.default = Project;

/***/ })

}]);
//# sourceMappingURL=2.js.map