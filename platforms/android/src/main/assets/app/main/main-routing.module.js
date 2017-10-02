"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var categories_component_1 = require("./categories/categories.component");
var auth_guard_service_1 = require("./auth-guard.service");
var routes = [
    {
        path: "",
        children: [
            { path: "", component: signin_component_1.SigninComponent },
            { path: "signup", component: signup_component_1.SignupComponent },
            { path: "categories", component: categories_component_1.CategoriesComponent, canActivate: [auth_guard_service_1.AuthGuardService] }
        ]
    },
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsMEVBQXdFO0FBRXhFLDJEQUF3RDtBQUV4RCxJQUFNLE1BQU0sR0FBVztJQUN2QjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFLFdBQVcsRUFBRSxDQUFDLHFDQUFnQixDQUFDLEVBQUU7U0FDeEY7S0FDSjtDQUVBLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9zaWduaW4vc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2F0ZWdvcmllc0NvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLWd1YXJkLnNlcnZpY2UnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbntcclxuICAgIHBhdGg6IFwiXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogXCJzaWdudXBcIiwgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiBcImNhdGVnb3JpZXNcIiwgY29tcG9uZW50OiBDYXRlZ29yaWVzQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZFNlcnZpY2VdIH1cclxuICAgIF1cclxufSxcclxuXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=