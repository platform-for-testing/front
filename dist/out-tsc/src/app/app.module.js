"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var all_tests_component_1 = require("./pages/all-tests/all-tests.component");
var all_activations_component_1 = require("./pages/all-activations/all-activations.component");
var all_respondents_component_1 = require("./pages/all-respondents/all-respondents.component");
var header_component_1 = require("./shared/components/header/header.component");
var navigation_buttons_component_1 = require("./shared/components/header/navigation-buttons/navigation-buttons.component");
var tools_component_1 = require("./shared/components/header/tools/tools.component");
var tests_list_component_1 = require("./pages/all-tests/tests-list/tests-list.component");
var create_new_block_component_1 = require("./pages/all-tests/create-new-block/create-new-block.component");
var test_item_component_1 = require("./pages/all-tests/tests-list/test-item/test-item.component");
var create_new_test_component_1 = require("./pages/create-new-test/create-new-test.component");
var create_new_test_header_component_1 = require("./pages/create-new-test/create-new-test-header/create-new-test-header.component");
var create_new_test_uploader_component_1 = require("./pages/create-new-test/create-new-test-uploader/create-new-test-uploader.component");
var all_respondents_list_component_1 = require("./pages/all-respondents/all-respondents-list/all-respondents-list.component");
var respondent_item_component_1 = require("./pages/all-respondents/all-respondents-list/respondent-item/respondent-item.component");
var create_new_component_1 = require("./shared/components/create-new/create-new.component");
var activations_list_wrapper_component_1 = require("./pages/all-activations/activations-list-wrapper/activations-list-wrapper.component");
var activation_item_component_1 = require("./pages/all-activations/activations-list-wrapper/activation-item/activation-item.component");
var page_information_component_1 = require("./pages/all-activations/page-information/page-information.component");
var horizontal_line_component_1 = require("./shared/components/horizontal-line/horizontal-line.component");
var getRespondents_service_1 = require("./shared/services/getRespondents.service");
var multiselect_component_1 = require("./shared/components/multiselect/multiselect.component");
var question_list_component_1 = require("./pages/create-new-test/question-list/question-list.component");
var question_component_1 = require("./pages/create-new-test/question-list/question/question.component");
var fileuploader_component_1 = require("./pages/create-new-test/question-list/fileuploader/fileuploader.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                all_tests_component_1.AllTestsComponent,
                all_activations_component_1.AllActivationsComponent,
                all_respondents_component_1.AllRespondentsComponent,
                header_component_1.HeaderComponent,
                navigation_buttons_component_1.NavigationButtonsComponent,
                tools_component_1.ToolsComponent,
                tests_list_component_1.WraperComponent,
                create_new_block_component_1.CreateNewBlockComponent,
                test_item_component_1.TestItemComponent,
                create_new_test_component_1.CreateNewTestComponent,
                create_new_test_header_component_1.CreateNewTestHeaderComponent,
                create_new_test_uploader_component_1.CreateNewTestUploaderComponent,
                all_respondents_list_component_1.AllRespondentsListComponent,
                respondent_item_component_1.RespondentItemComponent,
                test_item_component_1.TestItemComponent,
                create_new_component_1.CreateNewComponent,
                activations_list_wrapper_component_1.ActivationsListWrapperComponent,
                activation_item_component_1.ActivationItemComponent,
                page_information_component_1.PageInformationComponent,
                horizontal_line_component_1.HorizontalLineComponent,
                create_new_component_1.CreateNewComponent,
                multiselect_component_1.MultiselectComponent,
                question_list_component_1.QuestionListComponent,
                question_component_1.QuestionComponent,
                fileuploader_component_1.FileuploaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule
            ],
            providers: [getRespondents_service_1.GetRespondentsService],
            bootstrap: [app_component_1.AppComponent],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA,
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map