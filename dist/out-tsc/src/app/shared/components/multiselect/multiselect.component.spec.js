"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var multiselect_component_1 = require("./multiselect.component");
describe('MultiselectComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [multiselect_component_1.MultiselectComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(multiselect_component_1.MultiselectComponent);
        component = fixture.componentInstance;
        component.selectContent = [{
                value: 'test',
                icon: 'test'
            }, {
                value: 'test',
                icon: 'test'
            }];
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=multiselect.component.spec.js.map