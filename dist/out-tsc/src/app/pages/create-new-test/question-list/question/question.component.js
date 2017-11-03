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
var forms_1 = require("@angular/forms");
var Types;
(function (Types) {
    Types[Types["Checkboxes"] = 0] = "Checkboxes";
    Types[Types["Radio"] = 1] = "Radio";
    Types[Types["YesNo"] = 2] = "YesNo";
    Types[Types["Order"] = 3] = "Order";
    Types[Types["Open"] = 4] = "Open";
})(Types || (Types = {}));
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(fb) {
        this.fb = fb;
        this.pictureAdded = false;
        this.showPicture = false;
        this.types = [{ value: Types.Radio,
                icon: 'icon',
                label: 'One choice' },
            { value: Types.Checkboxes,
                icon: 'icon icon_checkbox',
                label: 'Multiple choices' },
            { value: Types.YesNo,
                icon: 'icon icon_truefalse',
                label: 'Yes/No' },
            { value: Types.Order,
                icon: 'icon icon_ordering',
                label: 'Ordering' },
            { value: Types.Open,
                icon: 'icon',
                label: 'Open answer' }];
        this.points = [{
                value: 1,
                icon: 'icon'
            }, {
                value: 2,
                icon: 'icon'
            }, {
                value: 3,
                icon: 'icon'
            }, {
                value: 4,
                icon: 'icon'
            }];
        this.edit = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.clone = new core_1.EventEmitter();
    }
    QuestionComponent_1 = QuestionComponent;
    QuestionComponent.prototype.receiveAdded = function (event) {
        this.ifPictureAdded = event;
        console.log(event);
        this.isEditing == true ? this.changeAdditionValue() : false;
    };
    QuestionComponent.prototype.receiveAddedPicture = function (event) {
        //console.log(event);
        //this.imageLoaded = event
    };
    QuestionComponent.prototype.receive = function (event) {
        this.showPicture = event;
    };
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            title: ['Question', [forms_1.Validators.required]],
            description: '',
            required: false,
            type: '',
            image: '',
            points: [1, [forms_1.Validators.min(1), forms_1.Validators.max(10)]]
        });
        this.form.valueChanges.subscribe(function (value) {
            _this.propagateChange(value);
            _this.question = value;
        });
    };
    QuestionComponent.prototype.addPicture = function () {
        this.showPicture = !this.showPicture;
    };
    QuestionComponent.prototype.currentType = function (value) {
        this.valueChange = value;
    };
    QuestionComponent.prototype.changeAdditionValue = function () {
        this.pictureAdded = this.ifPictureAdded;
    };
    QuestionComponent.prototype.propagateChange = function (value) {
    };
    QuestionComponent.prototype.writeValue = function (value) {
        console.log(value);
        if (value !== void (0)) {
            this.form.setValue(value);
        }
    };
    QuestionComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    QuestionComponent.prototype.registerOnTouched = function (fn) {
    };
    QuestionComponent.prototype.editQuestion = function () {
        this.edit.emit();
    };
    QuestionComponent.prototype.removeQuestion = function () {
        this.remove.emit();
    };
    QuestionComponent.prototype.cloneQuestion = function () {
        this.clone.emit();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QuestionComponent.prototype, "isEditing", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QuestionComponent.prototype, "ifPictureAdded", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], QuestionComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuestionComponent.prototype, "edit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuestionComponent.prototype, "remove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuestionComponent.prototype, "clone", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuestionComponent.prototype, "pictureToAdd", void 0);
    QuestionComponent = QuestionComponent_1 = __decorate([
        core_1.Component({
            selector: 'pt-question',
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.scss'],
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return QuestionComponent_1; }),
                    multi: true }]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], QuestionComponent);
    return QuestionComponent;
    var QuestionComponent_1;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map