(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-img {\r\n\theight: 150px;\r\n\twidth: 100%;\r\n\tbackground-image: url(\"https://i.imgur.com/ul4HryG.png\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.profil-img {\r\n\tposition: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50px;\r\n}\r\n\r\n.profil-img img {\r\n\tborder-radius: 100%;\r\n    box-shadow: 0 2px 5px #00000029;\r\n}\r\n\r\n.blog-wrapper {\r\n\tpadding: 100px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLHlEQUF5RDtDQUN6RCw2QkFBNkI7Q0FDN0IsNEJBQTRCO0NBQzVCLHVCQUF1QjtDQUN2Qjs7QUFFRDtDQUNDLG1CQUFtQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7Q0FDYjs7QUFFRDtDQUNDLG9CQUFvQjtJQUNqQixnQ0FBZ0M7Q0FDbkM7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1nIHtcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pbWd1ci5jb20vdWw0SHJ5Ry5wbmdcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2ZpbC1pbWcge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTBweDtcclxufVxyXG5cclxuLnByb2ZpbC1pbWcgaW1nIHtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLmJsb2ctd3JhcHBlciB7XHJcblx0cGFkZGluZzogMTAwcHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center p-0\">\n\n\t<div class=\"header-img\">\n\t</div>\n\n\t<div class=\"profil-img\">\n\t\t<img src=\"https://cdn.cybrhome.com/static/desktop/search/images/placeholders/male.png\" width=\"150\" height=\"150\">\n\t\t<h3>{{username}}</h3>\n\t</div>\n\n\t<div class=\"container blog-wrapper\">\n\t\t<div class=\"row\">\n\t\t  <div class=\"col-md-4\">\n\t\t  \t<app-list></app-list>\n\t\t  </div>\n\t\t  \n\t\t  <div class=\"col-md-8\">\n\t\t  \t<router-outlet></router-outlet>\n\t\t  </div>\n\t   </div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
function getUsername() {
    return parseJWT(document.cookie).usr;
}
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-blog';
        this.username = getUsername();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: Post, BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
function getUsername() {
    return parseJWT(document.cookie).usr;
}
var BlogService = /** @class */ (function () {
    function BlogService(http, router) {
        this.http = http;
        this.router = router;
        this.fetchPosts();
    }
    /* Populate the posts property by retrieving all blog posts of the current user */
    BlogService.prototype.fetchPosts = function () {
        this.posts = [];
        var username = getUsername();
        var url = "/api/" + username;
        /*this.http.get<Post[]>(url)
          .subscribe(posts => this.posts = posts);*/
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false); // `false` makes the request synchronous
        xmlHttp.send(null);
        if (xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var doc = res_1[_i];
                var post = {
                    postid: doc.postid,
                    created: doc.created,
                    modified: doc.modified,
                    title: doc.title,
                    body: doc.body
                };
                this.posts.push(post);
            }
        }
    };
    /* GET all posts of user */
    BlogService.prototype.getPosts = function () {
        return this.posts;
    };
    /* GET the post with postid=id from posts*/
    BlogService.prototype.getPost = function (id) {
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.postid == id)
                return p;
        }
        return null;
    };
    /* POST: add a new post  */
    BlogService.prototype.newPost = function () {
        var _this = this;
        var postid = 1;
        if (this.posts) {
            //posts should always be sorted with ascending postids so the max will be at the end
            postid = this.posts[this.posts.length - 1].postid + 1;
        }
        var username = getUsername();
        var url = "/api/" + username + "/" + postid;
        var created = new Date();
        var post = { 'postid': postid, 'created': created, 'modified': created, 'title': "", 'body': "" };
        this.posts.push(post);
        this.http.post(url, post).subscribe(function (data) { return console.log(); }, function (error) {
            if (error.status != 201 && error.status != 200) {
                alert("Error creating a new post at the server!");
                _this.posts.splice(_this.posts.length - 1, 1); //delete last post added
                _this.router.navigate(['/']);
            }
        });
        return post;
    };
    /* PUT: update the post*/
    BlogService.prototype.updatePost = function (post) {
        var _this = this;
        for (var i in this.posts) {
            if (this.posts[i].postid == post.postid) {
                this.posts[i].title = post.title;
                this.posts[i].body = post.body;
                this.posts[i].modified = new Date();
                var username = getUsername();
                var url = '/api/' + username + '/' + post.postid;
                this.http.put(url, post).subscribe(function (data) { return console.log(); }, function (error) {
                    if (error.status != 200) {
                        alert("Error updating the post at the server!");
                        _this.router.navigate(['/edit/', post.postid]);
                    }
                });
            }
        }
    };
    /* DELETE: delete the post whose postid is the same as the passed in value*/
    BlogService.prototype.deletePost = function (postid) {
        var n = this.posts.length;
        for (var i = 0; i < n; i++) {
            if (this.posts[i] && this.posts[i].postid == postid) {
                this.posts.splice(i, 1);
                var username = getUsername();
                var url = '/api/' + username + '/' + postid;
                this.http.delete(url).subscribe(function (data) { return console.log(); }, function (error) {
                    if (error.status != 200 && error.status != 204) {
                        alert("Error deleting the post at the server!");
                    }
                });
            }
        }
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-form {\r\n\tborder: 1px solid #80808061;\r\n    padding: 50px;\r\n    margin: 0 50px;\r\n    box-shadow: 0 5px 10px #00000029;\r\n}\r\n\r\n.edit-form label {\r\n\tfont-size: 20px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.edit-form input:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.edit-form textarea:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.btn-secondary {\r\n    border: 1px solid #18dfd6;\r\n    border-radius: 30px;\r\n    padding: 6px 12px;\r\n    background-color: #18cfdf;\r\n\tcolor: white;\r\n\tfont-weight: 400;\r\n\tbox-shadow: 0 2px 5px #0000002e;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.btn-secondary:hover {\r\n\tbackground-color: white;\r\n\tcolor: #18cfdf;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw0QkFBNEI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQ0FBaUM7Q0FDcEM7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMEJBQTBCO0NBQzdCLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsZ0NBQWdDO0lBQzdCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0NBQ3hCOztBQUVEO0NBQ0Msd0JBQXdCO0NBQ3hCLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtZm9ybSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzgwODA4MDYxO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjMDAwMDAwMjk7XHJcbn1cclxuXHJcbi5lZGl0LWZvcm0gbGFiZWwge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZWRpdC1mb3JtIGlucHV0OmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZWRpdC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMThkZmQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4Y2ZkZjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRib3gtc2hhZG93OiAwIDJweCA1cHggIzAwMDAwMDJlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Y29sb3I6ICMxOGNmZGY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"pt-5\">\n    <form [formGroup]=\"postForm\" class=\"edit-form\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.title\" formControlName=\"title\" name=\"title\" placeholder=\"Title\">\n\n      </div>\n      <div class=\"form-group\">\n        <label>Body </label>\n        <textarea class=\"form-control\" [(ngModel)]=\"post.body\" formControlName=\"body\" name=\"body\" placeholder=\"Body\" cols=\"50\" rows=\"10\"></textarea>\n        \n      </div>\n      <div>\n        <p class=\"font-weight-light\"><span class=\"font-weight-bold\">Last Modified:</span> {{post.modified | date:'short'}} </p>\n      </div>\n      <button type=\"button\" class=\"btn-secondary m-1\" (click)=\"delete()\"> <i class=\"fas fa-trash-alt\"></i> &nbsp; Delete</button>\n      <button type=\"button\" class=\"btn-secondary m-1\" [disabled]=\"postForm.pristine\" (click)=\"save()\"><i class=\"fas fa-check\"></i> &nbsp; Save</button>\n      <button type=\"button\" class=\"btn-secondary m-1\" (click)=\"preview()\"><i class=\"far fa-eye\"></i> &nbsp; Preview</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function () { return _this.getPost(); });
    };
    EditComponent.prototype.getPost = function () {
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(id);
        if (this.post) {
            this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.post.title),
                body: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.post.body)
            });
            /*this.postForm.get('title').setValue(this.post.title);
            this.postForm.get('body').setValue(this.post.body);*/
        }
    };
    EditComponent.prototype.save = function () {
        this.blogService.updatePost(this.post);
        this.postForm.markAsPristine();
    };
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.post.postid);
        this.router.navigate(['/']);
    };
    EditComponent.prototype.preview = function () {
        if (this.postForm.dirty)
            this.save();
        this.router.navigate(['/preview', this.post.postid]);
    };
    EditComponent.prototype.saveEdits = function () {
        if (this.postForm.dirty)
            this.save();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "saveEdits", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-main {\r\n\tborder: 1px solid #9c44d3;\r\n\tborder-radius: 30px;\r\n\tpadding: 5px 20px;\r\n\tbackground-color: #9c44d3;\r\n\tcolor: white;\r\n    font-weight: 400;\r\n\tbox-shadow: 0 2px 5px #0000002e;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.btn-main:hover {\r\n    background-color: white;\r\n    color: #9c44d3;\r\n}\r\n\r\n.posts-list {\r\n\tmargin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    text-align: left;\r\n}\r\n\r\n.posts-list li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #fcf8ff;\r\n    margin: .8em;\r\n    box-shadow: 0 2px 5px #0000001f;\r\n    height: 3em;\r\n    border-radius: 4px;\r\n    border: 1px solid #9c44d375;\r\n}\r\n\r\n.posts-list li:hover {\r\n    color: #607d8b;\r\n    background-image: linear-gradient(to right, #fcf8ff, #faebeb);\r\n    left: .1em;\r\n}\r\n\r\n.posts-list li a {\r\n    color: #500f79;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    padding: 5px;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n}\r\n\r\n.posts-list li a span {\r\n    display: inline-block;\r\n    font-size: 11px;\r\n    font-weight: 300;\r\n    color: #fff;\r\n    background-color: #903a93;\r\n    padding: 5px;\r\n    position: relative;\r\n    left: -5px;\r\n    top: -11px;\r\n    height: 2em;\r\n    min-width: 16px;\r\n    width: 35%;\r\n    margin-right: .8em;\r\n    border-radius: 2px 0 8px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7Q0FDMUIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsYUFBYTtJQUNWLGlCQUFpQjtDQUNwQixnQ0FBZ0M7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtDQUNsQjs7QUFFRDtDQUNDLGtCQUFrQjtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLGVBQWU7SUFDZiw4REFBOEQ7SUFDOUQsV0FBVztDQUNkOztBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDJCQUEyQjtDQUM5QiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1tYWluIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOWM0NGQzO1xyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0cGFkZGluZzogNXB4IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzljNDRkMztcclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cdGJveC1zaGFkb3c6IDAgMnB4IDVweCAjMDAwMDAwMmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5idG4tbWFpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjOWM0NGQzO1xyXG59XHJcblxyXG4ucG9zdHMtbGlzdCB7XHJcblx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnBvc3RzLWxpc3QgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhmZjtcclxuICAgIG1hcmdpbjogLjhlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjMDAwMDAwMWY7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YzQ0ZDM3NTtcclxufVxyXG5cclxuLnBvc3RzLWxpc3QgbGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2MDdkOGI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmY2Y4ZmYsICNmYWViZWIpO1xyXG4gICAgbGVmdDogLjFlbTtcclxufVxyXG5cclxuLnBvc3RzLWxpc3QgbGkgYSB7XHJcbiAgICBjb2xvcjogIzUwMGY3OTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnBvc3RzLWxpc3QgbGkgYSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDNhOTM7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgdG9wOiAtMTFweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgbWluLXdpZHRoOiAxNnB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAwIDhweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<button class=\"btn-main\" (click)=\"newPost()\"><i class=\"fas fa-plus\"></i> &nbsp; New Post</button>\n\n\t<ul *ngIf=\"posts\" class=\"posts-list pt-4\">\n\t\t<li *ngFor=\"let post of posts\">\n\t\t\t<a routerLink=\"/edit/{{post.postid}}\">\n\t\t        <span class=\"badge\">{{post.modified | date:'short'}}</span>\n\t\t        {{post.title}}\n\t\t    </a>\n\t\t</li>\n\t</ul>\n\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.posts = this.blogService.getPosts();
    };
    ListComponent.prototype.newPost = function () {
        var post = this.blogService.newPost();
        //don't forget to update posts
        this.posts = this.blogService.getPosts();
        this.router.navigate(['/edit', post.postid]);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-wrapper {\r\n\tborder: 1px solid #80808061;\r\n    padding: 50px;\r\n    margin: 0 50px;\r\n    box-shadow: 0 5px 10px #00000029;\r\n}\r\n\r\n.btn-secondary {\r\n    border: 1px solid #18dfd6;\r\n    border-radius: 30px;\r\n    padding: 6px 12px;\r\n    background-color: #18cfdf;\r\n\tcolor: white;\r\n\tfont-weight: 400;\r\n\tbox-shadow: 0 2px 5px #0000002e;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.btn-secondary:hover {\r\n\tbackground-color: white;\r\n\tcolor: #18cfdf;\r\n}\r\n\r\n.pos-corner {\r\n\tposition: absolute;\r\n    right: 0;\r\n    top: -10px;\r\n}\r\n\r\n.post-title {\r\n\tfont-size: 22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw0QkFBNEI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwwQkFBMEI7Q0FDN0IsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixnQ0FBZ0M7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7Q0FDeEI7O0FBRUQ7Q0FDQyx3QkFBd0I7Q0FDeEIsZUFBZTtDQUNmOztBQUVEO0NBQ0MsbUJBQW1CO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0NBQ2Q7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LXdyYXBwZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA2MTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBtYXJnaW46IDAgNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggIzAwMDAwMDI5O1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMThkZmQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4Y2ZkZjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRib3gtc2hhZG93OiAwIDJweCA1cHggIzAwMDAwMDJlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Y29sb3I6ICMxOGNmZGY7XHJcbn1cclxuXHJcbi5wb3MtY29ybmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5wb3N0LXRpdGxlIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"pt-5\">\n\t<div class=\"preview-wrapper\">    \t\n\t    <div>\n\t    \t<div style=\"position: relative;\">\n\t\t    \t<div class=\"post-title\" [innerHTML]=\"title\"></div>\n\t\t    \t<button class=\"btn-secondary m-1 pos-corner\" (click)=\"editPost()\"><i class=\"fas fa-user-edit\"></i>&nbsp;Edit</button>\n\t\t    </div>\n\t    \t<hr>\n\t    \t<div class=\"text-left\" [innerHTML]=\"body\"></div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reader = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        this.writer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"]();
        this.activatedRoute.paramMap.subscribe(function () { return _this.getPost(); });
    };
    PreviewComponent.prototype.getPost = function () {
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(id);
        if (this.post) {
            this.title = this.writer.render(this.reader.parse(this.post.title));
            this.body = this.writer.render(this.reader.parse(this.post.body));
        }
    };
    PreviewComponent.prototype.editPost = function () {
        this.router.navigate(['/edit', this.post.postid]);
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/Project 4/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map