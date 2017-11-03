"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var horizontal_line_component_1 = require("./horizontal-line.component");
describe('HorizontalLineComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [horizontal_line_component_1.HorizontalLineComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(horizontal_line_component_1.HorizontalLineComponent);
        component = fixture.componentInstance;
    });
    it('should create', function () {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=horizontal-line.component.spec.js.map