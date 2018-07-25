(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./src/js/App/components/About/about.scss":
/*!************************************************!*\
  !*** ./src/js/App/components/About/about.scss ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"title":"_1stax_RPrNbEX3wlcBzAtv"};

/***/ }),

/***/ "./src/js/App/components/About/index.jsx":
/*!***********************************************!*\
  !*** ./src/js/App/components/About/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _about = __webpack_require__(/*! ./about.scss */ "./src/js/App/components/About/about.scss");

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            { className: _about2.default.title },
            'Director of Front End Development at Haven Agency in Ontario, Calif.'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'p',
                null,
                'Nine years as a Front End Developer building highly optimized, responsive, localized websites.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Currently building sites with ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'scss'
                ),
                ', ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'ITCSS'
                ),
                ', ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'es6'
                ),
                ', ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'babel'
                ),
                ', ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'webpack'
                ),
                ', and ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'React/Preact'
                ),
                '.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Previously six years as a Web Designer with a B.F.A in Graphic Design.'
            )
        )
    );
};

exports.default = About;

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

/***/ "./src/js/App/components/Card/card.scss":
/*!**********************************************!*\
  !*** ./src/js/App/components/Card/card.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"card":"_1PuC2kYLGZTsVf_qNDV79g","cardImage":"_3o5U1xp5BU7HftRsRUKCLf","cardHeader":"yu6U0Y_DjhuX35ks_adny","cardTitle":"kQp4KVfyDAFCLMzMDgSKs","cardClient":"t5iTqz296CPYRLuAhtaXq"};

/***/ }),

/***/ "./src/js/App/components/Card/index.jsx":
/*!**********************************************!*\
  !*** ./src/js/App/components/Card/index.jsx ***!
  \**********************************************/
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

var _Image = __webpack_require__(/*! ../Image */ "./src/js/App/components/Image/index.jsx");

var _Image2 = _interopRequireDefault(_Image);

var _card = __webpack_require__(/*! ./card.scss */ "./src/js/App/components/Card/card.scss");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
    var name = _ref.name,
        client = _ref.client,
        slug = _ref.slug,
        fullThumbnail = _ref.fullThumbnail;
    return _react2.default.createElement(
        'article',
        { id: slug, className: _card2.default.card },
        _react2.default.createElement(
            _Aspect2.default,
            { modifiers: 'aspect-16x9' },
            _react2.default.createElement(_Image2.default, { src: 'https:' + fullThumbnail.fields.file.url + '?fm=webp&w=530&h=299', alt: '', className: _card2.default.cardImage })
        ),
        _react2.default.createElement(
            'header',
            { className: _card2.default.cardHeader },
            _react2.default.createElement(
                'h3',
                { className: _card2.default.cardTitle },
                name
            ),
            _react2.default.createElement(
                'h5',
                { className: _card2.default.cardClient },
                client
            )
        )
    );
};

exports.default = Card;

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

/***/ "./src/js/App/components/ProjectGrid/index.jsx":
/*!*****************************************************!*\
  !*** ./src/js/App/components/ProjectGrid/index.jsx ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _projectGrid = __webpack_require__(/*! ./project-grid.scss */ "./src/js/App/components/ProjectGrid/project-grid.scss");

var _projectGrid2 = _interopRequireDefault(_projectGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectGrid = function ProjectGrid(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'ul',
        { className: _projectGrid2.default.projectGrid },
        _react2.default.Children.map(children, function (child) {
            return _react2.default.createElement(
                'li',
                { className: _projectGrid2.default.item },
                child
            );
        })
    );
};

exports.default = ProjectGrid;

/***/ }),

/***/ "./src/js/App/components/ProjectGrid/project-grid.scss":
/*!*************************************************************!*\
  !*** ./src/js/App/components/ProjectGrid/project-grid.scss ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"projectGrid":"_2fUv-pwkyEinEqGES269OQ","item":"_302mU9v-XHw5kCKfY98znS"};

/***/ }),

/***/ "./src/js/App/scenes/Home.jsx":
/*!************************************!*\
  !*** ./src/js/App/scenes/Home.jsx ***!
  \************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _client = __webpack_require__(/*! ../client */ "./src/js/App/client.js");

var _client2 = _interopRequireDefault(_client);

var _About = __webpack_require__(/*! ../components/About */ "./src/js/App/components/About/index.jsx");

var _About2 = _interopRequireDefault(_About);

var _Card = __webpack_require__(/*! ../components/Card */ "./src/js/App/components/Card/index.jsx");

var _Card2 = _interopRequireDefault(_Card);

var _Layout = __webpack_require__(/*! ../components/Layout */ "./src/js/App/components/Layout/index.jsx");

var _ProjectGrid = __webpack_require__(/*! ../components/ProjectGrid */ "./src/js/App/components/ProjectGrid/index.jsx");

var _ProjectGrid2 = _interopRequireDefault(_ProjectGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            projects: []
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _client2.default.getEntries({
                content_type: 'project'
            }).then(function (projects) {
                return projects.items.map(function (project) {
                    return project.fields;
                });
            }).then(function (projects) {
                _this2.setState({
                    projects: projects
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Layout.Layout,
                null,
                _react2.default.createElement(
                    _Layout.LayoutAside,
                    null,
                    _react2.default.createElement(_About2.default, null)
                ),
                _react2.default.createElement(
                    _Layout.LayoutContent,
                    null,
                    _react2.default.createElement(
                        _ProjectGrid2.default,
                        null,
                        this.state.projects.map(function (project) {
                            return _react2.default.createElement(
                                _reactRouterDom.Link,
                                { key: project.slug, to: '/projects/' + project.slug },
                                _react2.default.createElement(_Card2.default, project)
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ })

}]);
//# sourceMappingURL=1.js.map