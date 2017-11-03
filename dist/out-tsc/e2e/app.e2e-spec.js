"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('platform-for-testing App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should show correct title', function () {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('PlatformForTesting');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map