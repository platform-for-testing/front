"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(router) {
        this.router = router;
        this.imageGlassPath = '/assets/images/search.svg';
        this.imageHumanPath = '/assets/images/profile.svg';
        this.route = router.url;
    }
    ToolsComponent.prototype.ngOnInit = function () { };
    ToolsComponent = __decorate([
        core_1.Component({
            selector: 'pt-tools',
            templateUrl: './tools.component.html',
            styleUrls: ['./tools.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ToolsComponent);
    return ToolsComponent;
}());
exports.ToolsComponent = ToolsComponent;
//# sourceMappingURL=tools.component.js.map