function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-distributed\">\n\n    <div class=\"footer-left\">\n\n        <h3>Decision<span>Point</span></h3>\n\n\n\n        <p class=\"footer-company-name\">DecisionPoint &copy; 2019</p>\n    </div>\n\n    <div class=\"footer-center\">\n\n\n\n        <div>\n            <i class=\"fa fa-envelope\"></i>\n            <p><a href=\" \">contact@DecisionPoint.com</a></p>\n        </div>\n\n    </div>\n\n    <div class=\"footer-right\">\n\n\n\n        <div class=\"footer-icons\">\n\n            <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n\n        </div>\n\n    </div>\n\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n    <h3>Decision<span>Point</span></h3>\n    <form class=\"wrapper\">\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-details/user-details.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-details/user-details.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDetailsUserDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<hr>\n\n<div *ngIf=\"!loadingIndicator\" class=\" content-wrapper\">\n  <h4> Loading..........</h4>\n  \n</div>\n\n\n<div *ngIf=\"loadingIndicator\" class=\" content-wrapper\">\n  <h5><strong>UserID:</strong>{{user.userId}}</h5>\n  <h5><strong>Title:</strong>{{user.title}}</h5>\n  <h5><strong>Body:</strong>{{user.body}}</h5>\n  </div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <hr>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search user by Name\" [(ngModel)]=\"searchTerm\" />\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-md-6 wrapper-design\" *ngFor=\"let data of filteredUser\">\n            <a [routerLink]=\"['/user',data.id]\">\n                <h4 class=\"align-center\">ID:{{data.id}}</h4>\n                <h6><strong>Name:</strong>{{data.name}}</h6>\n                <h6><strong>UserID:</strong>{{data.userId}}</h6>\n                <h6><strong>Username:</strong>{{data.username}}</h6>\n                <h6><strong>Email:</strong>{{data.email}}</h6>\n                <h6><strong>Title:</strong>{{data.title}}</h6>\n                <h6><strong>Phone:</strong>{{data.phone}}</h6>\n                <h6><strong>Website:</strong>{{data.website}}</h6>\n                <h6><strong>Company Name:</strong>{{data.company.name}}</h6>\n                <div>\n                    <strong>Address:</strong>\n                    <ul>\n                        <li>\n                            <h6><strong>Street:</strong>{{data.address.street}}</h6>\n                        </li>\n                        <li>\n                            <h6><strong>Suite:</strong>{{data.address.suite}}</h6>\n                        </li>\n                        <li>\n                            <h6><strong>City:</strong>{{data.address.city}}</h6>\n                        </li>\n                        <li>\n                            <h6><strong>Zipcode:</strong>{{data.address.zipcode}}</h6>\n                        </li>\n                    </ul>\n                </div>\n                <hr>\n            </a>\n        </div>\n\n\n    </div>\n\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/user-details/user-details.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");

    var routes = [{
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
    }, {
      path: '',
      redirectTo: '/user',
      pathMatch: 'full'
    }, {
      path: 'user/:id',
      component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/user-details/user-details.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n\tmargin: 0;\n\tpadding: 0;\n}\n.main {\n\tmax-height: 550px;;\n\tbackground-color: #292c2f;\n\tcolor: white;\n\tfont-size: 38pt;\n\ttext-align: center;\n\tline-height: 550px;\n}\nfooter{\n\tposition: fixed;\n\tbottom: 0;\n}\n.footer-distributed{\n\tbackground-color: #292c2f;\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\ttext-align: left;\n\tfont: bold 16px sans-serif;\n \n\t\n\t\n}\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right{\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n.footer-distributed .footer-left{\n\twidth: 40%;\n}\n.footer-distributed h3{\n\tcolor:  #ffffff;\n\tfont: normal 36px 'Cookie', cursive;\n\tmargin: 0;\n}\n.footer-distributed h3 span{\n\tcolor:  #5383d3;\n}\n.footer-distributed .footer-links{\n\tcolor:  #ffffff;\n\tmargin: 20px 0 12px;\n\tpadding: 0;\n}\n.footer-distributed .footer-links a{\n\tdisplay:inline-block;\n\tline-height: 1.8;\n\ttext-decoration: none;\n\tcolor:  inherit;\n}\n.footer-distributed .footer-company-name{\n\tcolor:  #8f9296;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n.footer-distributed .footer-center{\n\twidth: 35%;\n}\n.footer-distributed .footer-center i{\n\tbackground-color:  #33383b;\n\tcolor: #ffffff;\n\tfont-size: 25px;\n\twidth: 38px;\n\theight: 38px;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tline-height: 42px;\n\tmargin: 10px 15px;\n\tvertical-align: middle;\n}\n.footer-distributed .footer-center i.fa-envelope{\n\tfont-size: 17px;\n\tline-height: 38px;\n}\n.footer-distributed .footer-center p{\n\tdisplay: inline-block;\n\tcolor: #ffffff;\n\tvertical-align: middle;\n\tmargin:0;\n}\n.footer-distributed .footer-center p span{\n\tdisplay:block;\n\tfont-weight: normal;\n\tfont-size:14px;\n\tline-height:2;\n}\n.footer-distributed .footer-center p a{\n\tcolor:  #5383d3;\n\ttext-decoration: none;;\n}\n.footer-distributed .footer-right{\n\twidth: 20%;\n}\n.footer-distributed .footer-company-about{\n\tline-height: 20px;\n\tcolor:  #92999f;\n\tfont-size: 13px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n.footer-distributed .footer-company-about span{\n\tdisplay: block;\n\tcolor:  #ffffff;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\tmargin-bottom: 20px;\n}\n.footer-distributed .footer-icons{\n\tmargin-top: 25px;\n}\n.footer-distributed .footer-icons a{\n\tdisplay: inline-block;\n\twidth: 35px;\n\theight: 10px;\n\tcursor: pointer;\n\tbackground-color:  #33383b;\n\tborder-radius: 2px;\n \n\tfont-size: 20px;\n\tcolor: #ffffff;\n\ttext-align: center;\n\tline-height: 35px;\n \n\tmargin-right: 3px;\n\tmargin-bottom: 5px;\n}\n@media (max-width: 880px) {\n \n\t.footer-distributed{\n\t\tfont: bold 14px sans-serif;\n\t\n\t}\n \n\t.footer-distributed .footer-left,\n\t.footer-distributed .footer-center,\n\t.footer-distributed .footer-right{\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-bottom: 40px;\n\t\ttext-align: center;\n\t}\n \n\t.footer-distributed .footer-center i{\n\t\tmargin-left: 0;\n\t}\n\t.main {\n\t\tline-height: normal;\n\t\tfont-size: auto;\n\t}\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsU0FBUztDQUNULFVBQVU7QUFDWDtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0FBQ1Y7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QiwyQ0FBMkM7Q0FDM0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsMEJBQTBCOzs7O0FBSTNCO0FBRUE7OztDQUdDLHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MsZUFBZTtDQUNmLG1DQUFtQztDQUNuQyxTQUFTO0FBQ1Y7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFHQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsVUFBVTtBQUNYO0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7QUFHQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixRQUFRO0FBQ1Q7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGFBQWE7QUFDZDtBQUVBO0NBQ0MsZUFBZTtDQUNmLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsa0JBQWtCOztDQUVsQixlQUFlO0NBQ2YsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixpQkFBaUI7O0NBRWpCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFHQTs7Q0FFQztFQUNDLDBCQUEwQjs7Q0FFM0I7O0NBRUE7OztFQUdDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7O0FBRUQiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuLm1haW4ge1xuXHRtYXgtaGVpZ2h0OiA1NTBweDs7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyOTJjMmY7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzOHB0O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiA1NTBweDtcbn1cbmZvb3Rlcntcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG59XG4uZm9vdGVyLWRpc3RyaWJ1dGVke1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYzJmO1xuXHRib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Zm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XG4gXG5cdFxuXHRcbn1cbiBcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuIFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnR7XG5cdHdpZHRoOiA0MCU7XG59XG4gXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIGgze1xuXHRjb2xvcjogICNmZmZmZmY7XG5cdGZvbnQ6IG5vcm1hbCAzNnB4ICdDb29raWUnLCBjdXJzaXZlO1xuXHRtYXJnaW46IDA7XG59XG4gXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIGgzIHNwYW57XG5cdGNvbG9yOiAgIzUzODNkMztcbn1cbiBcbiBcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rc3tcblx0Y29sb3I6ICAjZmZmZmZmO1xuXHRtYXJnaW46IDIwcHggMCAxMnB4O1xuXHRwYWRkaW5nOiAwO1xufVxuIFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGF7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRsaW5lLWhlaWdodDogMS44O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAgaW5oZXJpdDtcbn1cbiBcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LW5hbWV7XG5cdGNvbG9yOiAgIzhmOTI5Njtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRtYXJnaW46IDA7XG59XG4gXG4gXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVye1xuXHR3aWR0aDogMzUlO1xufVxuIFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMzgzYjtcblx0Y29sb3I6ICNmZmZmZmY7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0d2lkdGg6IDM4cHg7XG5cdGhlaWdodDogMzhweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiA0MnB4O1xuXHRtYXJnaW46IDEwcHggMTVweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiBcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaS5mYS1lbnZlbG9wZXtcblx0Zm9udC1zaXplOiAxN3B4O1xuXHRsaW5lLWhlaWdodDogMzhweDtcbn1cbiBcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0bWFyZ2luOjA7XG59XG4gXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgc3Bhbntcblx0ZGlzcGxheTpibG9jaztcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOjE0cHg7XG5cdGxpbmUtaGVpZ2h0OjI7XG59XG4gXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgYXtcblx0Y29sb3I6ICAjNTM4M2QzO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7O1xufVxuIFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xuXHR3aWR0aDogMjAlO1xufVxuIFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRjb2xvcjogICM5Mjk5OWY7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bWFyZ2luOiAwO1xufVxuIFxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQgc3Bhbntcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNvbG9yOiAgI2ZmZmZmZjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiBcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1pY29uc3tcblx0bWFyZ2luLXRvcDogMjVweDtcbn1cbiBcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1pY29ucyBhe1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAzNXB4O1xuXHRoZWlnaHQ6IDEwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogICMzMzM4M2I7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcbiBcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRsaW5lLWhlaWdodDogMzVweDtcbiBcblx0bWFyZ2luLXJpZ2h0OiAzcHg7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiBcbiBcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xuIFxuXHQuZm9vdGVyLWRpc3RyaWJ1dGVke1xuXHRcdGZvbnQ6IGJvbGQgMTRweCBzYW5zLXNlcmlmO1xuXHRcblx0fVxuIFxuXHQuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdCxcblx0LmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcblx0LmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG4gXG5cdC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaXtcblx0XHRtYXJnaW4tbGVmdDogMDtcblx0fVxuXHQubWFpbiB7XG5cdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0XHRmb250LXNpemU6IGF1dG87XG5cdH1cbiBcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header{\n    width:100%;\n    height:60px;\n    background-color: #292c2f;\n}\nbody{\n    margin:0px;\n    padding:0px;\n}\n.logo{\n    color:#663399;\n    \nfont-family:verdana;\n    text-align:left;\n    margin-top:0px;\n    float:left;\n    margin:0px;\n    line-height:50px;\n    padding-left:9px;\n}\n.wrapper{\n    \n    display:inline-block;\n    line-height:52px;\n    padding-right:14px;\n}\nh3{\n    color:  #ffffff;\n\tfont: normal 36px 'Cookie', cursive;\n\tmargin: 0;\n}\nspan{\n    color: #5383d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7O0FBRWpCLG1CQUFtQjtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7Q0FDbEIsbUNBQW1DO0NBQ25DLFNBQVM7QUFDVjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYzJmO1xufVxuYm9keXtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MHB4O1xufVxuLmxvZ297XG4gICAgY29sb3I6IzY2MzM5OTtcbiAgICBcbmZvbnQtZmFtaWx5OnZlcmRhbmE7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgbWFyZ2luOjBweDtcbiAgICBsaW5lLWhlaWdodDo1MHB4O1xuICAgIHBhZGRpbmctbGVmdDo5cHg7XG59XG5cbi53cmFwcGVye1xuICAgIFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OjUycHg7XG4gICAgcGFkZGluZy1yaWdodDoxNHB4O1xufVxuaDN7XG4gICAgY29sb3I6ICAjZmZmZmZmO1xuXHRmb250OiBub3JtYWwgMzZweCAnQ29va2llJywgY3Vyc2l2ZTtcblx0bWFyZ2luOiAwO1xufVxuc3BhbntcbiAgICBjb2xvcjogIzUzODNkMztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/post-dataCapture.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/post-dataCapture.service.ts ***!
    \*********************************************/

  /*! exports provided: postDataCaptureService */

  /***/
  function srcAppPostDataCaptureServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postDataCaptureService", function () {
      return postDataCaptureService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var postDataCaptureService = /*#__PURE__*/function () {
      function postDataCaptureService(http) {
        _classCallCheck(this, postDataCaptureService);

        this.http = http;
      }

      _createClass(postDataCaptureService, [{
        key: "getAlluser",
        value: function getAlluser() {
          return this.http.get('https://jsonplaceholder.typicode.com/users');
        }
      }, {
        key: "getAllPost",
        value: function getAllPost() {
          return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1');
        }
      }, {
        key: "getUserOnSelect",
        value: function getUserOnSelect(id) {
          var url = 'https://jsonplaceholder.typicode.com/posts?id=' + id;
          return this.http.get(url);
        }
      }]);

      return postDataCaptureService;
    }();

    postDataCaptureService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    postDataCaptureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], postDataCaptureService);
    /***/
  },

  /***/
  "./src/app/user-details/user-details.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/user-details/user-details.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDetailsUserDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n.content-wrapper{\n    width: 50%;\n    margin: auto;\n    background: darkgray;\n    border-radius:10px;\n    border:3px solid slategray;\n}\nh5{\n    padding:10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRlbnQtd3JhcHBlcntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYm9yZGVyOjNweCBzb2xpZCBzbGF0ZWdyYXk7XG59XG5oNXtcbiAgICBwYWRkaW5nOjEwcHggMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user-details/user-details.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-details/user-details.component.ts ***!
    \********************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _post_dataCapture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../post-dataCapture.service */
    "./src/app/post-dataCapture.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); //import { UserPost } from '../user-post.modal';


    var UserDetailsComponent = /*#__PURE__*/function () {
      function UserDetailsComponent(userService, route) {
        var _this = this;

        _classCallCheck(this, UserDetailsComponent);

        this.userService = userService;
        this.route = route;
        this.loadingIndicator = false; //user: UserPost;

        this.user = [{
          body: null,
          userId: null,
          title: null
        }];
        this.susbscription = this.route.params.subscribe(function (param) {
          console.log(param);

          if (param) {
            _this.userService.getUserOnSelect(param.id).subscribe(function (val) {
              if (val) {
                _this.user = val[0];
                _this.loadingIndicator = true;
                console.log(_this.user);
              }
            });
          }
        });
      }

      _createClass(UserDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.susbscription.unsubscribe();
        }
      }]);

      return UserDetailsComponent;
    }();

    UserDetailsComponent.ctorParameters = function () {
      return [{
        type: _post_dataCapture_service__WEBPACK_IMPORTED_MODULE_2__["postDataCaptureService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-details/user-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-details.component.css */
      "./src/app/user-details/user-details.component.css"))["default"]]
    })], UserDetailsComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper-design{\n    background-color:aliceblue;\n    border: 2px solid brown;\n    border-radius: 20px;\n}\n.align-center{\n    width: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0px 10px;\n    background: darkgrey;\n}\ninput{\n    width: 20%;\n}\n    \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1kZXNpZ257XG4gICAgYmFja2dyb3VuZC1jb2xvcjphbGljZWJsdWU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYnJvd247XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5hbGlnbi1jZW50ZXJ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGRhcmtncmV5O1xufVxuaW5wdXR7XG4gICAgd2lkdGg6IDIwJTtcbn1cbiAgICBcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _post_dataCapture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../post-dataCapture.service */
    "./src/app/post-dataCapture.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(userService) {
        var _this2 = this;

        _classCallCheck(this, UserComponent);

        this.userService = userService;
        this.userData = [];
        this.userList = [];
        this.userPost = [];
        this.filteredUser = [];
        var one = this.userService.getAlluser();
        var two = this.userService.getAllPost();
        var combination = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([one, two]);
        this.susbscriptionUser = combination.subscribe(function (result) {
          _this2.userData.push(result);

          _this2.userList = _this2.userData[0][0];
          _this2.userPost = _this2.userData[0][1];
          console.log(_this2.userList);
          console.log(_this2.userPost);
          var fixedlength = 10;

          for (var i = 0; i < fixedlength; i++) {
            Object.assign(_this2.userList[i], _this2.userPost[i]);
          }

          console.log(_this2.userList);
          _this2.filteredUser = _this2.userList;
        });
      }

      _createClass(UserComponent, [{
        key: "filteredEmployee",
        value: function filteredEmployee(searchString) {
          return this.userList.filter(function (user) {
            return user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.susbscriptionUser.unsubscribe();
        }
      }, {
        key: "searchTerm",
        get: function get() {
          return this._searchTerm;
        },
        set: function set(value) {
          this._searchTerm = value;
          this.filteredUser = this.filteredEmployee(value);
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _post_dataCapture_service__WEBPACK_IMPORTED_MODULE_2__["postDataCaptureService"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/niraj/Angular/DecisionPointUi/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map