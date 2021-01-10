(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dhruvpatel/Desktop/spartan_Store_fix/Angular-Ecom-store/frontend/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "8cFx":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CommonService {
    constructor() {
        this.notify = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Observable string streams
         */
        this.notifyObservable$ = this.notify.asObservable();
    }
    notifyOther(data) {
        if (data) {
            this.notify.next(data);
        }
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8crq":
/*!*******************************************************!*\
  !*** ./src/app/catlog/cat_service/freeapi.service.ts ***!
  \*******************************************************/
/*! exports provided: freeapiservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeapiservice", function() { return freeapiservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class freeapiservice {
    //now we will inject the httpt client using thr constuctor
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    ;
    getallitems() {
        return this.httpclient.get("http://localhost:3000/cat/all");
    }
}
freeapiservice.ɵfac = function freeapiservice_Factory(t) { return new (t || freeapiservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
freeapiservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: freeapiservice, factory: freeapiservice.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](freeapiservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8sRn":
/*!**************************************************!*\
  !*** ./src/app/item-view/item-view.component.ts ***!
  \**************************************************/
/*! exports provided: ItemViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemViewComponent", function() { return ItemViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/freeapi.service */ "EZxN");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/common.service */ "8cFx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ItemViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Qty: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemViewComponent_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.additem(item_r1._id, item_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.url_index_to_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.cost, " gold coins");
} }
class ItemViewComponent {
    constructor(_freeapiservice, commonService) {
        this._freeapiservice = _freeapiservice;
        this.commonService = commonService;
        this.addtocart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    additem(id, name) {
        this.addtocart.emit({ "id": id, "name": name });
    }
    ngOnInit() {
        this._freeapiservice.getallitems()
            .subscribe((data) => {
            this.listItems = data;
        });
        this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
            if (res.option === 'call_child') {
                this._freeapiservice.getItemCat(res.value)
                    .subscribe((data) => {
                    this.listItems = data;
                });
            }
        });
    }
}
ItemViewComponent.ɵfac = function ItemViewComponent_Factory(t) { return new (t || ItemViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
ItemViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemViewComponent, selectors: [["app-item-view"]], outputs: { addtocart: "addtocart" }, decls: 2, vars: 1, consts: [[1, "container"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item_image"], [1, "center", 3, "src"], [1, "des_field_comp"], [1, "des"], [1, "quant"], [1, "box"], [1, "cost"], [1, "purchace_bar"], [1, "button_cart"], [1, "add_to_cart", 3, "click"]], template: function ItemViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemViewComponent_div_1_Template, 20, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%]{\n    background-color: aqua;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 50px;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: minmax(20vh,auto);\n    gap: 10px;\n  }\n\n.item[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-rows: 300px 400px;\n    grid-template-columns: repeat(2,1fr);\n    gap: 10px;\n    \n}\n\n.qty_io[_ngcontent-%COMP%]\n{   \n    height: 50px;\n    width: 70px;\n    background: lightgrey;\n    border:none;\n    border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    white-space: normal;\n    border:0px;\n    font-family: lato;\n    font-size: 1.5vw;\n    height: 50px;\n    padding: 2px;\n    color: black;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: rgb(255, 255, 255);\n    background-color: black;\n}\n\nbutton[_ngcontent-%COMP%]:active{\n    color: rgb(0, 0, 0);\n    background-color: rgb(20, 255, 12);\n}\n\n.name[_ngcontent-%COMP%]{\n    padding:25px;\n    order: 1;\n}\n\n.button_cart[_ngcontent-%COMP%]{\n    padding:25px;\n    order: 2;\n}\n\n.purchace_bar[_ngcontent-%COMP%]{\n    display: flex;\n    grid-column: 1/-1;\n   \n    grid-row: 3/-1;\n}\n\n.des_field_comp[_ngcontent-%COMP%]{\n    padding: 25px;\n    grid-column: 1/-1;\n    grid-row: 2/3;\n   \n}\n\n.des_field_comp[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    grid-column: 1/-1;\n    font-family: lato;\n    font-size: 2vw;\n}\n\n.des[_ngcontent-%COMP%]{\n    grid-column: 1/-1;\n    font-family: lato;\n    font-size: 1vw;\n    color: rgb(88, 87, 87);\n}\n\n.cost[_ngcontent-%COMP%]{\n    grid-column: 1/2;\n    color: rgb(158, 134, 0);\n    font-family: lato;\n    font-size: 1.25vw;\n}\n\n.quant[_ngcontent-%COMP%]{\n    grid-column: 2/-1;\n    color: rgb(3, 0, 194);\n    font-family: lato;\n    font-size: 1.25vw;\n}\n\n.item_image[_ngcontent-%COMP%]{\n    grid-row: 1/2;\n    grid-column: 1/-1;\n    \n}\n\n.center[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n\n    max-height: 300px;\n  }\n\n.box[_ngcontent-%COMP%]{\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    background-color:lightgrey;\n    font-style: italic;\n    border-radius: 12px;\n}\n\n.add_to_cart[_ngcontent-%COMP%]{\n    order: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLFNBQVM7RUFDWDs7QUFFRjtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isb0NBQW9DO0lBQ3BDLFNBQVM7O0FBRWI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjs7SUFFakIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7O0lBRVYsaUJBQWlCO0VBQ25COztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksUUFBUTtBQUNaIiwiZmlsZSI6Iml0ZW0tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgyMHZoLGF1dG8pO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4uaXRlbXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHggNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdhcDogMTBweDtcbiAgICBcbn1cblxuLnF0eV9pb1xueyAgIFxuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuYnV0dG9ue1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm9yZGVyOjBweDtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbmJ1dHRvbjphY3RpdmV7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDI1NSwgMTIpO1xufVxuXG4ubmFtZXtcbiAgICBwYWRkaW5nOjI1cHg7XG4gICAgb3JkZXI6IDE7XG59XG4uYnV0dG9uX2NhcnR7XG4gICAgcGFkZGluZzoyNXB4O1xuICAgIG9yZGVyOiAyO1xufVxuXG4ucHVyY2hhY2VfYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICBcbiAgICBncmlkLXJvdzogMy8tMTtcbn1cbi5kZXNfZmllbGRfY29tcHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICBcbn1cblxuLmRlc19maWVsZF9jb21wIGgze1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xufVxuLmRlc3tcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBjb2xvcjogcmdiKDg4LCA4NywgODcpO1xufVxuXG4uY29zdHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGNvbG9yOiByZ2IoMTU4LCAxMzQsIDApO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xufVxuXG4ucXVhbnR7XG4gICAgZ3JpZC1jb2x1bW46IDIvLTE7XG4gICAgY29sb3I6IHJnYigzLCAwLCAxOTQpO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xufVxuLml0ZW1faW1hZ2V7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBcbn1cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4uYm94e1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5hZGRfdG9fY2FydHtcbiAgICBvcmRlcjogMjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-view',
                templateUrl: './item-view.component.html',
                styleUrls: ['./item-view.component.css']
            }]
    }], function () { return [{ type: _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"] }, { type: _service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, { addtocart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "EZxN":
/*!********************************************!*\
  !*** ./src/app/service/freeapi.service.ts ***!
  \********************************************/
/*! exports provided: freeapiservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeapiservice", function() { return freeapiservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class freeapiservice {
    //now we will inject the httpt client using thr constuctor
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.url = "https://bribchat.com:44369"; //DRY principle
    }
    ;
    getallitems() {
        return this.httpclient.get(this.url + "/cat/all");
    }
    getItemCat(catagory) {
        return this.httpclient.get(this.url + "/cat/" + catagory);
    }
    addtocart(cartobj) {
        return this.httpclient.post(this.url + "/addtocart", cartobj);
    }
    authUserUname(Uname) {
        return this.httpclient.post(this.url + "/createuser/" + Uname, Uname);
    }
    getCart(token) {
        return this.httpclient.get(this.url + "/getcart/" + token);
    }
}
freeapiservice.ɵfac = function freeapiservice_Factory(t) { return new (t || freeapiservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
freeapiservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: freeapiservice, factory: freeapiservice.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](freeapiservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/freeapi.service */ "EZxN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");


 // First, import Input



function CheckoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.url_index_to_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.cost, " gold coins");
} }
class CheckoutComponent {
    constructor(_freeapiservice) {
        this._freeapiservice = _freeapiservice;
        this.retCheckout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    goBack() {
        this.retCheckout.emit("back");
    }
    readyCart() {
        if (this.item.length < 10)
            return false;
        else
            return true;
    }
    exit() {
        setTimeout(() => {
            alert("transcation complete- THANK YOU FOR SHOPPING"); // dummy purchace;
            this.retCheckout.emit("logout");
        }, 2000);
    }
    pullCart(item) {
        this._freeapiservice.getCart(item)
            .subscribe((data) => {
            this.listItems = data.cart;
            this.total = data.total;
        });
    }
    ngOnInit() {
        if (this.item != "null") {
            this.pullCart(this.item);
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], inputs: { item: "item" }, outputs: { retCheckout: "retCheckout" }, decls: 10, vars: 2, consts: [[3, "click"], [1, "container"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "total"], [1, "exit", 3, "click"], [1, "end_line"], [1, "item"], [1, "item_image"], [1, "center", 3, "src"], [1, "name_item"], [1, "cost_item"], [1, "box"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 9, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_7_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.total, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%]{\n    background-color: aqua;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 50px;\n    display: grid;\n    grid-template-columns: repeat(1,1fr);\n    grid-template-rows: minmax(100px,auto);\n    gap: 10px;\n  }\n\n.item[_ngcontent-%COMP%]{\n    padding: 25px;\n    display: inline;\n    border:solid 1px rgb(0, 0, 0);\n}\n\n.qty_io[_ngcontent-%COMP%]\n{   \n    height: 50px;\n    width: 70px;\n    background: lightgrey;\n    border:none;\n    border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    white-space: normal;\n    border:0px;\n    font-family: lato;\n    font-size: 1.5vw;\n    height: 50px;\n    padding: 2px;\n    color: black;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: rgb(255, 255, 255);\n    background-color: black;\n}\n\nbutton[_ngcontent-%COMP%]:active{\n    color: rgb(0, 0, 0);\n    background-color: rgb(20, 255, 12);\n}\n\n.name[_ngcontent-%COMP%]{\n    padding:25px;\n    order: 1;\n}\n\n.button_cart[_ngcontent-%COMP%]{\n    padding:25px;\n    order: 2;\n}\n\n.purchace_bar[_ngcontent-%COMP%]{\n    display: flex;\n    grid-column: 1/-1;\n   \n    grid-row: 3/-1;\n}\n\n.des[_ngcontent-%COMP%]{\n    grid-column: 1/-1;\n    font-family: lato;\n    font-size: 1vw;\n    color: rgb(88, 87, 87);\n}\n\n.cost[_ngcontent-%COMP%]{\n    color: rgb(158, 134, 0);\n    font-family: lato;\n    font-size: 1.25vw;\n    order:4\n}\n\n.center[_ngcontent-%COMP%] {\n    display: block;\n    max-height: 100px;\n  }\n\n.name_item[_ngcontent-%COMP%]{\n    right: 50vw;\n    font-family: lato;\n}\n\n.cost_item[_ngcontent-%COMP%]{\n    right: 30px;\n    font-family: lato;\n}\n\n.total[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 15vw;\n    font-family: lato;\n    font-size: x-large;\n    background-color: salmon;\n}\n\n.exit[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 5vw;\n}\n\n.end_line[_ngcontent-%COMP%]{\n    display: none;\n    padding: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMsU0FBUztFQUNYOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjs7SUFFakIsY0FBYztBQUNsQjs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBSUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztBQUNGO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwMHB4LGF1dG8pO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4uaXRlbXtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBib3JkZXI6c29saWQgMXB4IHJnYigwLCAwLCAwKTtcbn1cblxuLnF0eV9pb1xueyAgIFxuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuYnV0dG9ue1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm9yZGVyOjBweDtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbmJ1dHRvbjphY3RpdmV7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDI1NSwgMTIpO1xufVxuXG4ubmFtZXtcbiAgICBwYWRkaW5nOjI1cHg7XG4gICAgb3JkZXI6IDE7XG59XG4uYnV0dG9uX2NhcnR7XG4gICAgcGFkZGluZzoyNXB4O1xuICAgIG9yZGVyOiAyO1xufVxuXG4ucHVyY2hhY2VfYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICBcbiAgICBncmlkLXJvdzogMy8tMTtcbn1cblxuXG5cbi5kZXN7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgY29sb3I6IHJnYig4OCwgODcsIDg3KTtcbn1cblxuLmNvc3R7XG4gICAgY29sb3I6IHJnYigxNTgsIDEzNCwgMCk7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgZm9udC1zaXplOiAxLjI1dnc7XG4gICAgb3JkZXI6NFxufVxuXG5cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gIH1cbi5uYW1lX2l0ZW17XG4gICAgcmlnaHQ6IDUwdnc7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG59XG5cbi5jb3N0X2l0ZW17XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG59XG5cbi50b3RhbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1dnc7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcbn1cblxuLmV4aXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1dnc7XG59XG5cbi5lbmRfbGluZXtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], retCheckout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "J8IZ":
/*!**********************************!*\
  !*** ./src/app/classes/items.ts ***!
  \**********************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
class items {
}


/***/ }),

/***/ "NH0R":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 2, vars: 0, consts: [["id", "banner"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item added to cart\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#banner[_ngcontent-%COMP%]{\n    background-color: rgb(0, 0, 0);\n    color: white;\n    padding: 2vh;\n    word-wrap: break-word;\n\n    position: fixed;\n    bottom: 10px;\n    left:10px;\n\n    font-family: lato;\n    font-weight: 600;\n    font-size: 1.3vw;\n\n    z-index: 2000;\n\n    box-shadow: 0 0 11px rgb(255, 255, 255);\n\n    border-radius: 5px;\n\n    transition: all 0.2;\n}\n\n#banner[_ngcontent-%COMP%]:hover{\n    box-shadow: 0 0 20px rgb(0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCOztJQUVyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7O0lBRVQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLGFBQWE7O0lBRWIsdUNBQXVDOztJQUV2QyxrQkFBa0I7O0lBRWxCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYW5uZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAydmg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OjEwcHg7XG5cbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4zdnc7XG5cbiAgICB6LWluZGV4OiAyMDAwO1xuXG4gICAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjtcbn1cblxuI2Jhbm5lcjpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2IoMCwgMCwgMCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NL74":
/*!********************************************!*\
  !*** ./src/app/catlog/catlog.component.ts ***!
  \********************************************/
/*! exports provided: CatlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatlogComponent", function() { return CatlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cat_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat_service/freeapi.service */ "8crq");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "izVM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CatlogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Qty: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.url_index_to_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.cost, " gold coins");
} }
class CatlogComponent {
    constructor(_freeapiservice) {
        this._freeapiservice = _freeapiservice;
        this.title = "font";
    }
    ngOnInit() {
        this._freeapiservice.getallitems()
            .subscribe((data) => {
            this.listItems = data;
        });
    }
}
CatlogComponent.ɵfac = function CatlogComponent_Factory(t) { return new (t || CatlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cat_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"])); };
CatlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatlogComponent, selectors: [["app-catlog"]], decls: 3, vars: 1, consts: [[1, "container"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item_image"], [1, "center", 3, "src"], [1, "des_field_comp"], [1, "des"], [1, "quant"], [1, "box"], [1, "cost"], [1, "purchace_bar"], [1, "name"], ["type", "text", "placeholder", "1 item", 1, "qty_io"], [1, "button_cart"], [1, "add_to_cart"]], template: function CatlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatlogComponent_div_2_Template, 22, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItems);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catlog',
                templateUrl: './catlog.component.html',
                styleUrls: ['./catlog.component.css']
            }]
    }], function () { return [{ type: _cat_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_addtocart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/addtocart */ "jHxv");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/freeapi.service */ "EZxN");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/common.service */ "8cFx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo/logo.component */ "ySb0");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-view/item-view.component */ "8sRn");
/* harmony import */ var _float_cart_float_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./float-cart/float-cart.component */ "lF1u");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");













function AppComponent_app_login_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginUser", function AppComponent_app_login_0_Template_app_login_loginUser_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.authUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_logo_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logo");
} }
function AppComponent_div_2_app_banner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-banner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Item added to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notify", function AppComponent_div_2_Template_app_nav_notify_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changePost($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-item-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addtocart", function AppComponent_div_2_Template_app_item_view_addtocart_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.additem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-float-cart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notify", function AppComponent_div_2_Template_app_float_cart_notify_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changePost($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_2_app_banner_4_Template, 2, 0, "app-banner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r2.userId)("refresh", ctx_r2.refreshFloatCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.banner);
} }
function AppComponent_app_checkout_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-checkout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("retCheckout", function AppComponent_app_checkout_3_Template_app_checkout_retCheckout_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changePost($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r3.userId);
} }
class AppComponent {
    constructor(_freeapiservice, commonService) {
        this._freeapiservice = _freeapiservice;
        this.commonService = commonService;
        this.banner = false;
        this.userAuth = false;
        this.userId = 'null';
        this.userName = 'null';
        this.title = "font";
        this.checkout = false;
        this.refreshFloatCart = 0;
    }
    changePost(message) {
        switch (message) {
            case "logout":
                {
                    this.userId = 'null';
                    this.userName = 'null';
                    this.userAuth = false;
                    this.checkout = false;
                }
                break;
            case "checkout":
                {
                    this.checkout = true;
                }
                break;
            default:
                {
                    this.checkout = false;
                    this.commonService.notifyOther({ option: 'call_child', value: message });
                    // call the child component to chnage the view
                }
        }
    }
    additem(req) {
        var cartobj = new _classes_addtocart__WEBPACK_IMPORTED_MODULE_1__["Addtocart"];
        cartobj.object_id = req.id;
        cartobj.user_id = this.userId;
        cartobj.object_id_quantity = 1;
        var name = req.name;
        this._freeapiservice.addtocart(cartobj)
            .subscribe((data) => {
            if (data) {
                this.banner = true;
                var timer = setTimeout(() => {
                    this.banner = false;
                }, 2000);
                this.refreshFloatCart++;
            }
            else {
                alert("transcation fail");
            }
        });
    }
    authUser(uid) {
        this._freeapiservice.authUserUname(uid)
            .subscribe((data) => {
            if (data.token == 'null') {
                alert("try another username this one is in use");
            }
            else {
                this.userName = uid;
                this.userId = data.token;
                this.userAuth = true;
            }
        });
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeapiservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[3, "loginUser", 4, "ngIf"], [4, "ngIf"], [3, "item", "retCheckout", 4, "ngIf"], [3, "loginUser"], [3, "notify"], [3, "addtocart"], ["id", "float", 3, "item", "refresh", "notify"], [3, "item", "retCheckout"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_login_0_Template, 1, 0, "app-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_logo_1_Template, 1, 0, "app-logo", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_checkout_3_Template, 1, 1, "app-checkout", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuth && !ctx.checkout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAuth && ctx.checkout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_8__["ItemViewComponent"], _float_cart_float_cart_component__WEBPACK_IMPORTED_MODULE_9__["FloatCartComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"]], styles: ["#float[_ngcontent-%COMP%]{\n    position: fixed;\n    z-index: 900;\n}\n\nh1[_ngcontent-%COMP%]{\n    background-color: aqua;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 50px;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: minmax(20vh,auto);\n    gap: 10px;\n  }\n\n.item[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-rows: 300px 400px;\n    grid-template-columns: repeat(2,1fr);\n    gap: 10px;\n    \n}\n\n.qty_io[_ngcontent-%COMP%]\n{   \n    height: 50px;\n    width: 70px;\n    background: lightgrey;\n    border:none;\n    border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    white-space: normal;\n    border:0px;\n    font-family: lato;\n    font-size: 1.5vw;\n    height: 50px;\n    padding: 2px;\n    color: black;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: rgb(255, 255, 255);\n    background-color: black;\n}\n\nbutton[_ngcontent-%COMP%]:active{\n    color: rgb(0, 0, 0);\n    background-color: rgb(20, 255, 12);\n}\n\n.name[_ngcontent-%COMP%]{\n    padding:25px;\n    order: 1;\n}\n\n.button_cart[_ngcontent-%COMP%]{\n    padding:25px;\n    order: 2;\n}\n\n.purchace_bar[_ngcontent-%COMP%]{\n    display: flex;\n    grid-column: 1/-1;\n   \n    grid-row: 3/-1;\n}\n\n.des_field_comp[_ngcontent-%COMP%]{\n    padding: 25px;\n    grid-column: 1/-1;\n    grid-row: 2/3;\n   \n}\n\n.des_field_comp[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    grid-column: 1/-1;\n    font-family: lato;\n    font-size: 2vw;\n}\n\n.des[_ngcontent-%COMP%]{\n    grid-column: 1/-1;\n    font-family: lato;\n    font-size: 1vw;\n    color: rgb(88, 87, 87);\n}\n\n.cost[_ngcontent-%COMP%]{\n    grid-column: 1/2;\n    color: rgb(158, 134, 0);\n    font-family: lato;\n    font-size: 1.25vw;\n}\n\n.quant[_ngcontent-%COMP%]{\n    grid-column: 2/-1;\n    color: rgb(3, 0, 194);\n    font-family: lato;\n    font-size: 1.25vw;\n}\n\n.item_image[_ngcontent-%COMP%]{\n    grid-row: 1/2;\n    grid-column: 1/-1;\n    \n}\n\n.center[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n\n    max-height: 300px;\n  }\n\n.box[_ngcontent-%COMP%]{\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    background-color:lightgrey;\n    font-style: italic;\n    border-radius: 12px;\n}\n\n.add_to_cart[_ngcontent-%COMP%]{\n    order: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsU0FBUztFQUNYOztBQUVGO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixvQ0FBb0M7SUFDcEMsU0FBUzs7QUFFYjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFDQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCOztJQUVqQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxRQUFRO0FBQ1oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmxvYXR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDkwMDtcbn1cblxuaDF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgyMHZoLGF1dG8pO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4uaXRlbXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHggNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdhcDogMTBweDtcbiAgICBcbn1cblxuLnF0eV9pb1xueyAgIFxuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuYnV0dG9ue1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm9yZGVyOjBweDtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbmJ1dHRvbjphY3RpdmV7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDI1NSwgMTIpO1xufVxuXG4ubmFtZXtcbiAgICBwYWRkaW5nOjI1cHg7XG4gICAgb3JkZXI6IDE7XG59XG4uYnV0dG9uX2NhcnR7XG4gICAgcGFkZGluZzoyNXB4O1xuICAgIG9yZGVyOiAyO1xufVxuXG4ucHVyY2hhY2VfYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICBcbiAgICBncmlkLXJvdzogMy8tMTtcbn1cbi5kZXNfZmllbGRfY29tcHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICBcbn1cblxuLmRlc19maWVsZF9jb21wIGgze1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xufVxuLmRlc3tcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBjb2xvcjogcmdiKDg4LCA4NywgODcpO1xufVxuXG4uY29zdHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGNvbG9yOiByZ2IoMTU4LCAxMzQsIDApO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xufVxuXG4ucXVhbnR7XG4gICAgZ3JpZC1jb2x1bW46IDIvLTE7XG4gICAgY29sb3I6IHJnYigzLCAwLCAxOTQpO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xufVxuLml0ZW1faW1hZ2V7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBcbn1cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4uYm94e1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5hZGRfdG9fY2FydHtcbiAgICBvcmRlcjogMjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _service_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeapiservice"] }, { type: _service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo/logo.component */ "ySb0");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _catlog_catlog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catlog/catlog.component */ "NL74");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _classes_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/items */ "J8IZ");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/freeapi.service */ "EZxN");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/common.service */ "8cFx");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item-view/item-view.component */ "8sRn");
/* harmony import */ var _float_cart_float_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./float-cart/float-cart.component */ "lF1u");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_freeapi_service__WEBPACK_IMPORTED_MODULE_10__["freeapiservice"],
        _classes_items__WEBPACK_IMPORTED_MODULE_9__["items"],
        _service_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
        _catlog_catlog_component__WEBPACK_IMPORTED_MODULE_7__["CatlogComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"],
        _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_14__["ItemViewComponent"],
        _float_cart_float_cart_component__WEBPACK_IMPORTED_MODULE_15__["FloatCartComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__["BannerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                    _catlog_catlog_component__WEBPACK_IMPORTED_MODULE_7__["CatlogComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"],
                    _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_14__["ItemViewComponent"],
                    _float_cart_float_cart_component__WEBPACK_IMPORTED_MODULE_15__["FloatCartComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__["BannerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [_service_freeapi_service__WEBPACK_IMPORTED_MODULE_10__["freeapiservice"],
                    _classes_items__WEBPACK_IMPORTED_MODULE_9__["items"],
                    _service_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NavComponent {
    constructor() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick(message) {
        this.notify.emit(message);
    }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], outputs: { notify: "notify" }, decls: 23, vars: 0, consts: [[1, "nav"], [1, "nav-link", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_3_listener() { return ctx.onClick("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_6_listener() { return ctx.onClick("sword"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Swords");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_9_listener() { return ctx.onClick("shield"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Shields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_12_listener() { return ctx.onClick("armor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Armor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_15_listener() { return ctx.onClick("ring"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_18_listener() { return ctx.onClick("logout"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_21_listener() { return ctx.onClick("checkout"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background: #000;\n  height: 60px; \n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  list-style: none;\n  height: 60px; \n  line-height: 60px; \n  padding: 0 40px; \n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: red;\n  transition: background .3s;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFQQUFxUDtBQUNyUDtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7QUFFQSxtSUFBbUk7QUFDbkk7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFFLDJDQUEyQztBQUMzRDtBQUVBLHFMQUFxTDtBQUNyTDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFFLHNDQUFzQztFQUNwRCxpQkFBaUIsRUFBRSxpQ0FBaUM7RUFDcEQsZUFBZSxFQUFFLDRDQUE0QztBQUMvRDtBQUVBLGdMQUFnTDtBQUNoTDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7QUFFQSxtSEFBbUg7QUFDbkg7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBmaXJzdCBzZWN0aW9uIGlzIGEgc2ltcGxlIFwicmVzZXRcIi4gSXQgYWxsb3dzIHRoZSBuYXZiYXIgdG8gcHVzaCB1cCBhZ2FpbnN0IHRoZSB0b3Agb2YgdGhlIGJyb3dzZXIgd2luZG93IHdpdGggbm8gd2hpdGUgc3BhY2UgYXJvdW5kIGl0LiBUaGlzIGNvZGUgYWxzbyBzZXRzIHRoZSBkZWZhdWx0IGZvbnQgZm9yIHlvdXIgd2hvbGUgcGFnZS4gUHV0IGl0IGF0IHRoZSB2ZXJ5IHRvcCBvZiB5b3VyIGNzcyBwYWdlLiAgKi9cbmh0bWwsIGJvZHksIGRpdiwgcCwgdWwsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi8qIFRoaXMgY2xhc3MgaXMgYXBwbGllZCB0byB0aGUgY29udGFpbmluZyBkaXYgPGRpdiBjbGFzcz1cIm5hdlwiPiBhbmQgaXMgdXNlZCB0byBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgYW5kIGhlaWdodCBvZiB0aGUgbmF2YmFyICovXG4ubmF2IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgaGVpZ2h0OiA2MHB4OyAvKiBzZXQgc2FtZSBhcyBoZWlnaHQgJiBsaW5lLWhlaWdodCBiZWxvdyAqL1xufVxuXG4vKiBUaGlzIHJ1bGUgY2VudGVycyB0aGUgbmF2IGl0ZW1zIHZlcnRpY2FseSBpbiB0aGUgYmFyIHdpdGggdGhlIGhlaWdodCBhbmQgbGluZSBoZWlnaHQgcHJvcGVydGllcy4gU3BhY2luZyBiZXR3ZWVuIHRoZSBuYXYgaXRlbXMgaXMgY29udHJvbGxlZCBieSBzZXR0aW5nIHJpZ2h0IGFuZCBsZWZ0IHBhZGRpbmcuICAqL1xuLm5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiA2MHB4OyAvKiBzaG91bGQgYmUgdGhlIHNhbWUgYXMgbGluZS1oZWlnaHQgKi9cbiAgbGluZS1oZWlnaHQ6IDYwcHg7IC8qIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBoZWlnaHQgKi9cbiAgcGFkZGluZzogMCA0MHB4OyAvKiBcIjBcIiBzZXRzIHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgdG8gbm9uZSAqL1xufVxuXG4vKiA6aG92ZXIgYWxsb3dzIHlvdSBjaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIG5hdiBpdGVtcyB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZW0uIFBsYXkgYXJvdW5kIHdpdGggdGhlIHRyYW5zaXRpb24gdmFsdWUgdG8gY2hhbmdlIHRoZSBzcGVlZCBvZiB0aGUgaG92ZXIgdHJhbnNpdGlvbi4gKi9cbi5uYXYgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xufVxuXG4vKiBUaGlzIHJ1bGUgaXMgYXBwbGllZCB0byB0aGUgbGluayA8YT4gdGFnLiBJdCBsZXRzIHlvdSB0dXJuIG9mZiB0aGUgbGluayB1bmRlcmxpbmUgYW5kIHNldCB0aGUgbGluayB0ZXh0IGNvbG9yLiAqL1xuLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, { notify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "jHxv":
/*!**************************************!*\
  !*** ./src/app/classes/addtocart.ts ***!
  \**************************************/
/*! exports provided: Addtocart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addtocart", function() { return Addtocart; });
class Addtocart {
}


/***/ }),

/***/ "lF1u":
/*!****************************************************!*\
  !*** ./src/app/float-cart/float-cart.component.ts ***!
  \****************************************************/
/*! exports provided: FloatCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatCartComponent", function() { return FloatCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/freeapi.service */ "EZxN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");

 // First, import Input




function FloatCartComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cart is empty Please Add Something ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FloatCartComponent_div_0_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r5.url_index_to_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r5.cost, " gold coins");
} }
function FloatCartComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FloatCartComponent_div_0_ng_template_2_div_0_Template, 9, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FloatCartComponent_div_0_ng_template_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.exit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx_r3.total, " ");
} }
function FloatCartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FloatCartComponent_div_0_div_1_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FloatCartComponent_div_0_ng_template_2_Template, 5, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.empty)("ngIfElse", _r2);
} }
class FloatCartComponent {
    constructor(_freeapiservice) {
        this._freeapiservice = _freeapiservice;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.empty = true;
        this.cartStatus = false;
    }
    ngOnInit() {
        this.empty = true;
        this.pullCart();
    }
    pullCart() {
        if (this.item.length < 10) {
            this.empty = true;
        }
        else {
            this._freeapiservice.getCart(this.item)
                .subscribe((data) => {
                this.listItems = data.cart;
                this.total = data.total;
                if (this.listItems.length == 0) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            });
        }
    }
    readyCart() {
        if (this.item != "null")
            return false;
        else
            return true;
    }
    toggleCart() {
        if (this.cartStatus == true) {
            this.cartStatus = false;
        }
        else {
            if (this.listItems.length != 0) {
                this.cartStatus = true;
            }
        }
    }
    exit() {
        this.notify.emit("checkout");
    }
    ngOnChanges(changes) {
        this.pullCart();
    }
}
FloatCartComponent.ɵfac = function FloatCartComponent_Factory(t) { return new (t || FloatCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"])); };
FloatCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FloatCartComponent, selectors: [["app-float-cart"]], inputs: { item: "item", refresh: "refresh" }, outputs: { notify: "notify" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 2, consts: [["class", "container", 4, "ngIf"], ["id", "cart_label", 3, "click"], ["src", "https://img.icons8.com/wired/64/000000/sword.png"], ["id", "item_counter"], [1, "container"], [4, "ngIf", "ngIfElse"], ["showItem", ""], ["id", "empty_cart"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "total"], [1, "exit", 3, "click"], [1, "item"], [1, "item_image"], [1, "center", 3, "src"], [1, "name_item"], [1, "cost_item"], [1, "box"]], template: function FloatCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FloatCartComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FloatCartComponent_Template_button_click_1_listener() { return ctx.toggleCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.refresh);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%]{\n    width: 22vw;\n    height: 75vh;\n    position: fixed;\n    top:15vh;\n    right: 1vw;\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    background-color: rgba(255, 255, 255, 0.8);\n    padding: 1vw;\n    border-radius: 10px;\n    overflow-y: scroll;\n    border-top: 1px solid rgb(0, 0, 0);\n    border-bottom: 1px solid rgb(0, 0, 0);\n\n}\n\n.total[_ngcontent-%COMP%]{\n    padding: 1vw;\n    background-color: rgba(228, 196, 107, 0.527);\n    position: absolute;\n    top:10px;\n    right:10px;\n    font-family: lato;\n    font-size: 2vh;\n    font-weight: 700;\n    border-radius: 20px;\n}\n\n.item[_ngcontent-%COMP%]{\n    display: inline;\n}\n\n.item_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 3vw;\n}\n\n#cart_label[_ngcontent-%COMP%]{\n    position: fixed;\n    right: 10vh;\n    top:10vh;\n    font-family: lato;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 2vw;\n    background-color: rgb(224, 224, 224);\n    color: black;\n    border: none;\n    padding: 1vh;\n    transition: 0.3s;\n}\n\n#cart_label[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n    border-radius: 20px;\n    box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 100px 80px rgba(0, 0, 0, 0.12)\n}\n\n#cart_label[_ngcontent-%COMP%]:active{\n    background-color: rgb(0, 189, 0);\n    color: white;\n    border-radius: 20px;\n    box-shadow:\n    0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n    0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n    0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 100px 80px rgba(0, 0, 0, 0.12)\n}\n\n.exit[_ngcontent-%COMP%]{\n    font-family: lato;\n    font-weight: 600;\n    font-size: 2vw;\n    padding: 0.6vw;\n    border: none;\n    background-color: rgb(0, 0, 0);\n    color: white;\n    border-radius: 10px;\n    transition: 0.5;\n}\n\n.exit[_ngcontent-%COMP%]:hover{\n    font-family: lato;\n    font-weight: 600;\n    font-size: 2vw;\n    padding: 0.6vw;\n    border: none;\n    background-color: rgb(21, 179, 1);\n    color: white;\n    border-radius: 20px;\n}\n\n#empty_cart[_ngcontent-%COMP%]{\n    font-family: lato;\n    font-size: 2vh;\n}\n\n#item_counter[_ngcontent-%COMP%]{\n    font-family: lato;\n    font-style: italic;\n    position: fixed;\n    right: 8.0vh;\n    top:11.6vh;\n    background-color: coral;\n    border-radius: 50px;\n    padding: 1vh;\n}\n\n#cart_label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 2vw;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0LWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQywwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHFDQUFxQzs7QUFFekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25COzs7Ozs7O0FBT0o7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQjs7Ozs7OztBQU9KOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVOztBQUVkIiwiZmlsZSI6ImZsb2F0LWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDIydnc7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MTV2aDtcbiAgICByaWdodDogMXZ3O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcblxufVxuXG4udG90YWx7XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAxOTYsIDEwNywgMC41MjcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTBweDtcbiAgICByaWdodDoxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cbi5pdGVtX2ltYWdlIGltZ3tcbiAgICB3aWR0aDogM3Z3O1xufVxuXG4jY2FydF9sYWJlbHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDEwdmg7XG4gICAgdG9wOjEwdmg7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNjYXJ0X2xhYmVsOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6XG4gICAgMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcbiAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxuICAgIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcbiAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXG4gICAgMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxuICAgIDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpXG59XG5cbiNjYXJ0X2xhYmVsOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTg5LCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OlxuICAgIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXG4gICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcbiAgICAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXG4gICAgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxuICAgIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcbiAgICAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKVxufVxuXG4uZXhpdHtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDAuNnZ3O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogMC41O1xufVxuXG4uZXhpdDpob3ZlcntcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDAuNnZ3O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDE3OSwgMSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbiNlbXB0eV9jYXJ0e1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4jaXRlbV9jb3VudGVye1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDguMHZoO1xuICAgIHRvcDoxMS42dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiAxdmg7XG59XG5cbiNjYXJ0X2xhYmVsIGltZ3tcbiAgICB3aWR0aDogMnZ3O1xuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloatCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-float-cart',
                templateUrl: './float-cart.component.html',
                styleUrls: ['./float-cart.component.css']
            }]
    }], function () { return [{ type: _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");






const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'shop', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class LoginComponent {
    constructor() {
        this.name = '';
        this.loginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    login() {
        if (this.name == '') {
            alert('Please Enter a non empty string');
        }
        else {
            this.loginUser.emit(this.name);
        }
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], outputs: { loginUser: "loginUser" }, decls: 19, vars: 2, consts: [[1, "content"], ["id", "logo", "src", "./assets/logo_white.svg"], ["id", "logo_text", "src", "./assets/logo_white_text.svg"], ["id", "welcometext"], ["id", "inputform"], ["type", "text", "id", "input_user_box", "name", "null", 3, "ngModel", "ngModelChange"], ["id", "button padding"], ["id", "continue", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " One Stop Shop for your Medieval War needs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " MEAN(MongoDB, Express.js,Angular,Node.js) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please enter your name to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".content[_ngcontent-%COMP%] {\n    top:0px;\n    left: 0px;\n    padding:25px;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows:repeat(8,1fr);\n    \n    background-color: rgb(0, 0, 0);\n    background-image: url(\"https://i.gifer.com/19Nx.gif\");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        position: absolute;\n    \n        height: 95vh;\n  }\n\n  #welcometext[_ngcontent-%COMP%]{\n    padding:40px;\n    grid-row:4/-1 ;\n    grid-column: 1/4;\n    font-family: lato;\n    font-size: 3vw;\n    color: white;\n}\n\n  #inputform[_ngcontent-%COMP%]{\n    color: white;\n   padding-right: 100px;\n   padding-left:50px;\n\n    grid-row:3/8 ;\n    grid-column: 5/8;\n    font-family: lato;\n    font-size: 3vw;\n    -webkit-backdrop-filter: blur(5px);\n            backdrop-filter: blur(5px);\n    background-color: rgba(255, 255, 255, 0.233);\n    border-radius: 12px;\n}\n\n  input[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 30px;\n    padding: 6px 10px;\n    margin: 8px 0;\n    background-color: rgba(255, 255, 255, 0.082);\n    -webkit-backdrop-filter: blur(5px);\n            backdrop-filter: blur(5px);\n    border: none;\n    border-radius: 12.5px;\n  }\n\n  button[_ngcontent-%COMP%]{\n    background-color: rgb(0, 0, 0);\n    white-space: normal;\n    border:0px;\n    font-family: lato;\n    font-size: 1.5vw;\n    height: 50px;\n    padding: 2px;\n    color: rgb(255, 255, 255);\n    padding-right: 10px;\n    padding-left: 10px;\n    border-radius: 12.5px;\n}\n\n  button[_ngcontent-%COMP%]:hover{\n    color: rgb(0, 0, 0);\n    background-color: rgb(255, 255, 255);\n}\n\n  button[_ngcontent-%COMP%]:active{\n    color: rgb(0, 0, 0);\n    background-color: rgb(20, 255, 12);\n}\n\n  #continue[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 5vw;\n}\n\n  #logo[_ngcontent-%COMP%]{\n    grid-row: 1/3;\n    grid-column: 1/2;\n}\n\n  #logo_text[_ngcontent-%COMP%]\n{\n    grid-row: 1/3;\n    grid-column: 2/-1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFOztFQUVwRSxxREFBcUQ7O0VBQ3JEO0lBQ0UsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQ0FBZ0M7O0lBRWhDLDhCQUE4QjtJQUM5QixxREFBcUQ7UUFDakQsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsa0JBQWtCOztRQUVsQixZQUFZO0VBQ2xCOztFQUVGO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztFQUVBO0lBQ0ksWUFBWTtHQUNiLG9CQUFvQjtHQUNwQixpQkFBaUI7O0lBRWhCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QyxtQkFBbUI7QUFDdkI7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFHRjtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0VBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztFQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7RUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0VBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztFQUNBOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7QUFDckIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIHRoZSB2aWRlbzogMTAwJSB3aWR0aCBhbmQgaGVpZ2h0IHRvIGNvdmVyIHRoZSBlbnRpcmUgd2luZG93ICovXG5cbiAgLyogQWRkIHNvbWUgY29udGVudCBhdCB0aGUgYm90dG9tIG9mIHRoZSB2aWRlby9wYWdlICovXG4gIC5jb250ZW50IHtcbiAgICB0b3A6MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwYWRkaW5nOjI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoOCwxZnIpO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuZ2lmZXIuY29tLzE5TnguZ2lmXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICB9XG5cbiN3ZWxjb21ldGV4dHtcbiAgICBwYWRkaW5nOjQwcHg7XG4gICAgZ3JpZC1yb3c6NC8tMSA7XG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNpbnB1dGZvcm17XG4gICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICBwYWRkaW5nLWxlZnQ6NTBweDtcblxuICAgIGdyaWQtcm93OjMvOCA7XG4gICAgZ3JpZC1jb2x1bW46IDUvODtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMzKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4Mik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEyLjVweDtcbiAgfVxuXG5cbmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3JkZXI6MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEyLjVweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuYnV0dG9uOmFjdGl2ZXtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMjU1LCAxMik7XG59XG5cbiNjb250aW51ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDV2dztcbn1cblxuI2xvZ297XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBncmlkLWNvbHVtbjogMS8yO1xufVxuI2xvZ29fdGV4dFxue1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgZ3JpZC1jb2x1bW46IDIvLTE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, { loginUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ySb0":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 3, vars: 0, consts: [[1, "container"], ["src", "./assets/logo.svg", 1, "logo"], ["src", "./assets/logo_text.svg", 1, "logo_text"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\n    padding-top: 50px;\n    padding-right: 50px;\n    padding-bottom: 10px;\n    padding-left: 80px;\n    height: 15vh;\n    display: flexbox;\n}\n\n.logo[_ngcontent-%COMP%]{\n    order:1;\n}\n\n.logo_text[_ngcontent-%COMP%]{\n    order:2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksT0FBTztBQUNYIiwiZmlsZSI6ImxvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIGRpc3BsYXk6IGZsZXhib3g7XG59XG5cbi5sb2dve1xuICAgIG9yZGVyOjE7XG59XG5cbi5sb2dvX3RleHR7XG4gICAgb3JkZXI6Mjtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map