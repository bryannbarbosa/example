"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var auth_service_1 = require("../auth.service");
var SigninComponent = (function () {
    function SigninComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    SigninComponent.prototype.Access = function () {
        this.authService.AuthUser(this.input);
        if (ApplicationSettings.getString('token') != undefined) {
            this.router.navigate(["categories"], { relativeTo: this.route });
        }
    };
    SigninComponent.prototype.Quit = function () {
        ApplicationSettings.remove('token');
    };
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: "Signin",
            moduleId: module.id,
            templateUrl: "./signin.component.html"
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, router_2.ActivatedRoute])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQTREO0FBQzVELDBDQUF5QztBQUN6QywwQ0FBaUQ7QUFDakQsZ0RBQThDO0FBUTlDO0lBSUUseUJBQTJCLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3RHLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUE7SUFDTCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSixDQUFDO0lBRUEsOEJBQUksR0FBSjtRQUNFLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUF2QlUsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FLd0MsMEJBQVcsRUFBa0IsZUFBTSxFQUFpQix1QkFBYztPQUovRixlQUFlLENBd0IzQjtJQUFELHNCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTaWduaW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbmluLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaW5wdXQ6IGFueTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICAgIFwiZW1haWxcIjogXCJcIixcbiAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCJcbiAgICAgIH1cbiAgfVxuXG4gIEFjY2VzcygpIHtcblx0XHR0aGlzLmF1dGhTZXJ2aWNlLkF1dGhVc2VyKHRoaXMuaW5wdXQpO1xuICAgIGlmKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY2F0ZWdvcmllc1wiXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICAgIH1cblx0fVxuXG4gIFF1aXQoKSB7XG4gICAgQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoJ3Rva2VuJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxufVxuIl19